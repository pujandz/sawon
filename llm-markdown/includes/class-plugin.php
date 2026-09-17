<?php

declare(strict_types=1);

namespace LLM_Markdown;

use WP_Post;
use WP_Query;

if (!defined('ABSPATH')) {
	exit;
}

final class Plugin {
	private static ?Plugin $instance = null;

	private Settings $settings;
	private Renderer $renderer;
	private LlmsTxt  $llms_txt;

	private bool $hooks_registered    = false;
	private int  $markdown_buffer_level = 0;

	private function __construct() {
		$this->settings = Settings::instance();
		$this->renderer = new Renderer($this->settings);
		$this->llms_txt = new LlmsTxt($this->settings);
	}

	public static function instance(): Plugin {
		if (null === self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	public static function activate(): void {
		self::instance()->register_rewrite_rules();
		if (self::instance()->settings->should_enable_llms_txt()) {
			self::instance()->llms_txt->register_hooks();
		}
		flush_rewrite_rules();
	}

	public static function deactivate(): void {
		flush_rewrite_rules();
	}

	public function register_hooks(): void {
		if ($this->hooks_registered) {
			return;
		}

		$this->settings->register_hooks();

		add_action('init', [$this, 'register_rewrite_rules'], 10);

		if ($this->settings->should_discard_early_output()) {
			add_action('init', [$this, 'maybe_start_markdown_output_buffer'], 0);
		}

		add_filter('query_vars', [$this, 'register_query_vars']);
		add_action('template_redirect', [$this, 'maybe_serve_markdown'], 0);

		if ($this->settings->should_enable_content_negotiation()) {
			add_action('template_redirect', [$this, 'maybe_serve_negotiated_markdown'], 11);
		}

		if ($this->settings->should_enable_query_param()) {
			add_action('template_redirect', [$this, 'maybe_serve_query_param_markdown'], 5);
		}

		add_action('wp_head', [$this, 'output_alternate_link'], 1);
		add_action('pre_get_posts', [$this, 'harden_render_source_query'], 0);
		add_filter('redirect_canonical', [$this, 'maybe_disable_canonical_redirect'], 0, 2);

		// Bust cache generation on global changes.
		add_action('update_option_' . Settings::OPTION_NAME, [Renderer::class, 'bump_cache_generation'], 10, 0);
		add_action('switch_theme', [Renderer::class, 'bump_cache_generation'], 10, 0);
		add_action('wp_update_nav_menu', [Renderer::class, 'bump_cache_generation'], 10, 0);

		// Invalidate individual post cache on save / delete.
		add_action('save_post', static function (int $post_id): void {
			Renderer::delete_post_cache($post_id);
			Renderer::bump_cache_generation();
		}, 10, 1);
		add_action('delete_post', static function (int $post_id): void {
			Renderer::delete_post_cache($post_id);
			Renderer::bump_cache_generation();
		}, 10, 1);

		// llms.txt endpoint.
		if ($this->settings->should_enable_llms_txt()) {
			$this->llms_txt->register_hooks();
		}

		$this->hooks_registered = true;
	}

	// -------------------------------------------------------------------------
	// Rewrite & query vars
	// -------------------------------------------------------------------------

	public function register_rewrite_rules(): void {
		add_rewrite_rule(
			'^(.+)\.md/?$',
			'index.php?llm_markdown_md=1&llm_markdown_path=$matches[1]',
			'top'
		);
	}

	/**
	 * @param array<int, string> $vars
	 * @return array<int, string>
	 */
	public function register_query_vars(array $vars): array {
		$vars[] = 'llm_markdown_md';
		$vars[] = 'llm_markdown_path';
		return $vars;
	}

	// -------------------------------------------------------------------------
	// Output buffer (early-output cleanup)
	// -------------------------------------------------------------------------

	public function maybe_start_markdown_output_buffer(): void {
		$request_uri = isset($_SERVER['REQUEST_URI']) ? sanitize_text_field(wp_unslash($_SERVER['REQUEST_URI'])) : '';
		if ('' === $request_uri) {
			return;
		}

		$path             = wp_parse_url($request_uri, PHP_URL_PATH);
		$is_markdown_path = is_string($path) && '.md' === substr(untrailingslashit($path), -3);
		$is_negotiated    = $this->settings->should_enable_content_negotiation()
			&& $this->is_safe_request_method()
			&& $this->request_prefers_markdown();
		$is_query_param   = $this->settings->should_enable_query_param()
			&& $this->request_has_md_param();

		if (!$is_markdown_path && !$is_negotiated && !$is_query_param) {
			return;
		}

		ob_start();
		$this->markdown_buffer_level = ob_get_level();
	}

	// -------------------------------------------------------------------------
	// Markdown route (.md extension)
	// -------------------------------------------------------------------------

	public function maybe_serve_markdown(): void {
		if (is_admin() || wp_doing_ajax() || wp_doing_cron() || $this->is_rest_request()) {
			return;
		}

		if (!$this->is_markdown_route_request()) {
			return;
		}

		if ($this->is_render_source_request()) {
			$this->send_not_found();
		}

		$post = $this->resolve_markdown_route_post();
		if (!$post instanceof WP_Post) {
			$this->send_not_found();
		}

		if (!$this->can_serve_post($post)) {
			$this->send_not_found();
		}

		$this->send_markdown($post);
	}

	// -------------------------------------------------------------------------
	// Markdown via Accept: text/markdown header
	// -------------------------------------------------------------------------

	public function maybe_serve_negotiated_markdown(): void {
		if (!$this->is_safe_request_method()) {
			return;
		}

		if (is_admin() || wp_doing_ajax() || wp_doing_cron() || $this->is_rest_request()) {
			return;
		}

		if ($this->is_render_source_request() || is_feed() || is_preview() || is_trackback() || is_embed()) {
			return;
		}

		if (!is_singular()) {
			return;
		}

		$post = get_queried_object();
		if (!$post instanceof WP_Post || !$this->can_serve_post($post)) {
			return;
		}

		$this->add_vary_accept_header();

		if (!$this->request_prefers_markdown()) {
			return;
		}

		$this->send_markdown($post);
	}

	// -------------------------------------------------------------------------
	// Markdown via ?md=1 / ?output_format=md query param
	// -------------------------------------------------------------------------

	public function maybe_serve_query_param_markdown(): void {
		if (!$this->is_safe_request_method()) {
			return;
		}

		if (is_admin() || wp_doing_ajax() || wp_doing_cron() || $this->is_rest_request()) {
			return;
		}

		if ($this->is_render_source_request() || is_feed() || is_preview() || is_trackback() || is_embed()) {
			return;
		}

		if (!$this->request_has_md_param()) {
			return;
		}

		if (!is_singular()) {
			return;
		}

		$post = get_queried_object();
		if (!$post instanceof WP_Post || !$this->can_serve_post($post)) {
			return;
		}

		$this->send_markdown($post);
	}

	// -------------------------------------------------------------------------
	// Alternate link in <head>
	// -------------------------------------------------------------------------

	public function output_alternate_link(): void {
		if (!is_singular() || $this->is_markdown_route_request()) {
			return;
		}

		$post = get_queried_object();
		if (!$post instanceof WP_Post || !$this->can_serve_post($post)) {
			return;
		}

		$canonical = get_permalink($post);
		if (!is_string($canonical) || '' === $canonical) {
			return;
		}

		printf(
			"<link rel=\"alternate\" type=\"text/markdown\" title=\"%s\" href=\"%s\" />\n",
			esc_attr__('Markdown version', 'llm-markdown'),
			esc_url($this->build_markdown_url($canonical))
		);
	}

	// -------------------------------------------------------------------------
	// Front-page source query hardening
	// -------------------------------------------------------------------------

	public function harden_render_source_query(WP_Query $q): void {
		if (is_admin() || !$q->is_main_query() || !$this->is_render_source_request()) {
			return;
		}

		if ('page' !== (string) get_option('show_on_front')) {
			return;
		}

		$front_id = (int) get_option('page_on_front');
		if ($front_id <= 0) {
			return;
		}

		$request_uri = isset($_SERVER['REQUEST_URI']) ? sanitize_text_field(wp_unslash($_SERVER['REQUEST_URI'])) : '';

		if ($q->is_home() || $q->is_front_page() || '/' === $request_uri) {
			$q->set('page_id', $front_id);
			$q->set('post_type', 'page');
			$q->is_home       = false;
			$q->is_front_page = true;
			$q->is_page       = true;
			$q->is_singular   = true;
		}
	}

	// -------------------------------------------------------------------------
	// Canonical redirect suppression
	// -------------------------------------------------------------------------

	/**
	 * @param string|false $redirect_url
	 * @param string       $requested_url
	 * @return string|false
	 */
	public function maybe_disable_canonical_redirect($redirect_url, string $requested_url) {
		return $this->is_render_source_request() ? false : $redirect_url;
	}

	// -------------------------------------------------------------------------
	// Response dispatch
	// -------------------------------------------------------------------------

	private function send_markdown(WP_Post $post): void {
		$canonical = get_permalink($post);
		if (!is_string($canonical) || '' === $canonical) {
			$canonical = home_url('/');
		}

		$md_url   = $this->build_markdown_url($canonical);
		$document = $this->renderer->render_post($post, $canonical, $md_url);

		if ('' === $document) {
			$this->send_unavailable();
		}

		$this->discard_early_output();

		$charset = get_bloginfo('charset');

		status_header(200);
		header_remove('Content-Type');
		header('Content-Type: text/markdown; charset=' . $charset);
		header('X-Content-Type-Options: nosniff');
		header('X-Robots-Tag: noindex');
		header('Content-Security-Policy: default-src \'none\'');
		header('Link: <' . esc_url_raw($canonical) . '>; rel="canonical"', false);

		echo $document; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		exit;
	}

	private function send_unavailable(): void {
		$this->discard_early_output();
		status_header(503);
		header_remove('Content-Type');
		header('Content-Type: text/plain; charset=' . get_bloginfo('charset'));
		header('Cache-Control: no-store');
		header('Retry-After: 60');
		header('X-Content-Type-Options: nosniff');
		echo esc_html__('Markdown temporarily unavailable', 'llm-markdown');
		exit;
	}

	private function send_not_found(): void {
		global $wp_query;

		if ($wp_query instanceof WP_Query) {
			$wp_query->set_404();
		}

		$this->discard_early_output();
		status_header(404);
		header_remove('Content-Type');
		header('Content-Type: text/plain; charset=' . get_bloginfo('charset'));
		header('X-Content-Type-Options: nosniff');
		echo esc_html__('Not Found', 'llm-markdown');
		exit;
	}

	// -------------------------------------------------------------------------
	// Post resolution
	// -------------------------------------------------------------------------

	private function resolve_markdown_route_post(): ?WP_Post {
		$route_path = trim(rawurldecode((string) get_query_var('llm_markdown_path', '')), '/');

		if ('' === $route_path) {
			return null;
		}

		// Front-page alias: /index.md
		if ('index' === strtolower($route_path) && 'page' === (string) get_option('show_on_front')) {
			$front_id = (int) get_option('page_on_front');
			if ($front_id > 0) {
				$front = get_post($front_id);
				if ($front instanceof WP_Post) {
					return $front;
				}
			}
		}

		$encoded_path = implode('/', array_map('rawurlencode', explode('/', $route_path)));

		foreach (array_unique([home_url('/' . $encoded_path), home_url('/' . $encoded_path . '/')]) as $url) {
			$post_id = url_to_postid($url);
			if ($post_id > 0) {
				$post = get_post($post_id);
				if ($post instanceof WP_Post) {
					return $post;
				}
			}
		}

		$post = get_page_by_path($route_path, OBJECT, get_post_types(['public' => true], 'names'));
		return ($post instanceof WP_Post) ? $post : null;
	}

	// -------------------------------------------------------------------------
	// Post eligibility
	// -------------------------------------------------------------------------

	private function can_serve_post(WP_Post $post): bool {
		if (!in_array($post->post_type, $this->settings->get_enabled_post_types(), true)) {
			return false;
		}

		if (post_password_required($post)) {
			return false;
		}

		if (function_exists('is_post_publicly_viewable') && !is_post_publicly_viewable($post)) {
			return false;
		}

		if ($this->settings->should_respect_noindex() && $this->is_noindex($post)) {
			return false;
		}

		return (bool) apply_filters('llm_markdown_can_serve_post', true, $post);
	}

	private function is_noindex(WP_Post $post): bool {
		$yoast = (string) get_post_meta($post->ID, '_yoast_wpseo_meta-robots-noindex', true);
		if ('1' === $yoast || 'noindex' === strtolower($yoast)) {
			return true;
		}

		// RankMath support.
		$rankmath = (string) get_post_meta($post->ID, 'rank_math_robots', true);
		if (false !== strpos($rankmath, 'noindex')) {
			return true;
		}

		return (bool) apply_filters('llm_markdown_is_noindex_post', false, $post);
	}

	// -------------------------------------------------------------------------
	// Request detection helpers
	// -------------------------------------------------------------------------

	private function is_markdown_route_request(): bool {
		return '1' === (string) get_query_var('llm_markdown_md', '');
	}

	private function is_render_source_request(): bool {
		if (!isset($_SERVER['HTTP_X_LLMMD_RENDER_SOURCE'])) {
			return false;
		}
		return '1' === trim(sanitize_text_field(wp_unslash($_SERVER['HTTP_X_LLMMD_RENDER_SOURCE'])));
	}

	private function is_rest_request(): bool {
		if (defined('REST_REQUEST') && REST_REQUEST) {
			return true;
		}
		if (!isset($_SERVER['REQUEST_URI'])) {
			return false;
		}
		$request_uri = sanitize_text_field(wp_unslash($_SERVER['REQUEST_URI']));
		return false !== strpos($request_uri, '/' . trailingslashit(rest_get_url_prefix()));
	}

	private function is_safe_request_method(): bool {
		$method = isset($_SERVER['REQUEST_METHOD']) ? sanitize_key(wp_unslash($_SERVER['REQUEST_METHOD'])) : 'GET';
		return in_array(strtoupper($method), ['GET', 'HEAD'], true);
	}

	private function request_prefers_markdown(): bool {
		$accept = isset($_SERVER['HTTP_ACCEPT']) ? sanitize_text_field(wp_unslash($_SERVER['HTTP_ACCEPT'])) : '';
		if ('' === $accept) {
			return false;
		}

		$ranges              = $this->parse_accept_header($accept);
		$markdown            = $this->media_quality($ranges, 'text', 'markdown');
		$html                = $this->media_quality($ranges, 'text', 'html');
		$minimum_specificity = $this->settings->should_accept_markdown_wildcards() ? 1 : 2;

		return $markdown['specificity'] >= $minimum_specificity
			&& $markdown['quality'] > 0.0
			&& $markdown['quality'] >= max(0.0, $html['quality']);
	}

	private function request_has_md_param(): bool {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		if (isset($_GET['md']) && '1' === sanitize_key(wp_unslash($_GET['md']))) {
			return true;
		}
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		if (isset($_GET['output_format']) && 'md' === sanitize_key(wp_unslash($_GET['output_format']))) {
			return true;
		}
		return false;
	}

	// -------------------------------------------------------------------------
	// Accept header parsing
	// -------------------------------------------------------------------------

	/**
	 * @return array<int, array{type: string, subtype: string, quality: float}>
	 */
	private function parse_accept_header(string $accept): array {
		$ranges = [];

		foreach (explode(',', $accept) as $value) {
			$parts = array_map('trim', explode(';', $value));
			$media = strtolower((string) array_shift($parts));

			if (!preg_match('~^([a-z0-9!#$&^_.+*-]+)/([a-z0-9!#$&^_.+*-]+)$~i', $media, $matches)) {
				continue;
			}

			$quality = 1.0;
			$valid   = true;

			foreach ($parts as $parameter) {
				if (!preg_match('/^q\s*=\s*(.+)$/i', $parameter, $quality_match)) {
					continue;
				}
				$quality_value = trim((string) $quality_match[1]);
				if (!preg_match('/^(?:0(?:\.\d{0,3})?|1(?:\.0{0,3})?)$/', $quality_value)) {
					$valid = false;
					break;
				}
				$quality = (float) $quality_value;
			}

			if (!$valid) {
				continue;
			}

			$ranges[] = [
				'type'    => strtolower((string) $matches[1]),
				'subtype' => strtolower((string) $matches[2]),
				'quality' => $quality,
			];
		}

		return $ranges;
	}

	/**
	 * @param array<int, array{type: string, subtype: string, quality: float}> $ranges
	 * @return array{quality: float, specificity: int}
	 */
	private function media_quality(array $ranges, string $type, string $subtype): array {
		$best = ['quality' => -1.0, 'specificity' => -1];

		foreach ($ranges as $range) {
			if ($type === $range['type'] && $subtype === $range['subtype']) {
				$specificity = 2;
			} elseif ($type === $range['type'] && '*' === $range['subtype']) {
				$specificity = 1;
			} elseif ('*' === $range['type'] && '*' === $range['subtype']) {
				$specificity = 0;
			} else {
				continue;
			}

			if ($specificity > $best['specificity'] || ($specificity === $best['specificity'] && $range['quality'] > $best['quality'])) {
				$best = ['quality' => $range['quality'], 'specificity' => $specificity];
			}
		}

		return $best;
	}

	// -------------------------------------------------------------------------
	// Vary header
	// -------------------------------------------------------------------------

	private function add_vary_accept_header(): void {
		if (headers_sent()) {
			return;
		}

		$vary = [];
		foreach (headers_list() as $header_line) {
			if (0 !== stripos($header_line, 'Vary:')) {
				continue;
			}
			foreach (explode(',', trim(substr($header_line, 5))) as $value) {
				$value = trim($value);
				if ('*' === $value) {
					return;
				}
				if ('' !== $value) {
					$vary[strtolower($value)] = $value;
				}
			}
		}

		$vary['accept'] = 'Accept';
		header_remove('Vary');
		header('Vary: ' . implode(', ', array_values($vary)));
	}

	// -------------------------------------------------------------------------
	// Output buffer cleanup
	// -------------------------------------------------------------------------

	private function discard_early_output(): void {
		while ($this->markdown_buffer_level > 0 && ob_get_level() >= $this->markdown_buffer_level) {
			$status = ob_get_status();
			if (!is_array($status) || !isset($status['flags']) || 0 === ($status['flags'] & PHP_OUTPUT_HANDLER_REMOVABLE)) {
				break;
			}
			ob_end_clean();
		}
		$this->markdown_buffer_level = 0;
	}

	// -------------------------------------------------------------------------
	// URL building
	// -------------------------------------------------------------------------

	private function build_markdown_url(string $canonical_url): string {
		$parts = wp_parse_url($canonical_url);
		if (!is_array($parts)) {
			return $canonical_url;
		}

		$path          = isset($parts['path']) ? (string) $parts['path'] : '/';
		$path          = '/' === $path ? '/index' : untrailingslashit($path);
		$parts['path'] = '.md' !== substr($path, -3) ? $path . '.md' : $path;

		$url = (isset($parts['scheme']) ? $parts['scheme'] . '://' : '')
			. (isset($parts['host']) ? $parts['host'] : '')
			. (isset($parts['port']) ? ':' . (int) $parts['port'] : '')
			. (string) ($parts['path'] ?? '');

		if (!empty($parts['query'])) {
			$url .= '?' . $parts['query'];
		}
		if (!empty($parts['fragment'])) {
			$url .= '#' . $parts['fragment'];
		}

		return $url;
	}
}
