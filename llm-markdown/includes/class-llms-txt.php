<?php

declare(strict_types=1);

namespace LLM_Markdown;

use WP_Post;

if (!defined('ABSPATH')) {
	exit;
}

/**
 * Handles the /llms.txt endpoint.
 *
 * The llms.txt specification provides a machine-readable index of available
 * content for LLM crawlers and AI agents.
 */
final class LlmsTxt {
	private const CACHE_KEY = 'llm_markdown_llms_txt';
	private const CACHE_TTL = 6 * HOUR_IN_SECONDS;
	private const MAX_POSTS = 500;

	private Settings $settings;

	public function __construct(Settings $settings) {
		$this->settings = $settings;
	}

	public function register_hooks(): void {
		add_rewrite_rule('^llms\.txt$', 'index.php?llm_markdown_llms_txt=1', 'top');
		add_filter('query_vars', static function (array $vars): array {
			$vars[] = 'llm_markdown_llms_txt';
			return $vars;
		});
		add_action('template_redirect', [$this, 'maybe_serve'], 0);

		// Bust cache on post changes.
		add_action('save_post',   [$this, 'flush_cache'], 10, 0);
		add_action('delete_post', [$this, 'flush_cache'], 10, 0);
		add_action('update_option_' . Settings::OPTION_NAME, [$this, 'flush_cache'], 10, 0);
	}

	public function flush_cache(): void {
		delete_transient(self::CACHE_KEY);
	}

	public function maybe_serve(): void {
		if ('1' !== (string) get_query_var('llm_markdown_llms_txt', '')) {
			return;
		}

		$content = get_transient(self::CACHE_KEY);
		if (!is_string($content) || '' === $content) {
			$content = $this->generate();
			if ('' !== $content) {
				set_transient(self::CACHE_KEY, $content, self::CACHE_TTL);
			}
		}

		if ('' === $content) {
			status_header(503);
			header('Content-Type: text/plain; charset=' . get_bloginfo('charset'));
			echo 'Unavailable';
			exit;
		}

		status_header(200);
		header('Content-Type: text/plain; charset=' . get_bloginfo('charset'));
		header('X-Robots-Tag: noindex');
		header('Cache-Control: public, max-age=' . (self::CACHE_TTL / 2));

		echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		exit;
	}

	private function generate(): string {
		$enabled_types = $this->settings->get_enabled_post_types();
		if (empty($enabled_types)) {
			return '';
		}

		$site_name = html_entity_decode((string) get_bloginfo('name'), ENT_QUOTES | ENT_HTML5, 'UTF-8');
		$site_desc = html_entity_decode((string) get_bloginfo('description'), ENT_QUOTES | ENT_HTML5, 'UTF-8');

		$lines = [];
		$lines[] = '# ' . $site_name;
		if ('' !== $site_desc) {
			$lines[] = '';
			$lines[] = '> ' . $site_desc;
		}
		$lines[] = '';
		$lines[] = '## Content';
		$lines[] = '';

		$posts = get_posts([
			'post_type'      => $enabled_types,
			'post_status'    => 'publish',
			'posts_per_page' => self::MAX_POSTS,
			'orderby'        => 'modified',
			'order'          => 'DESC',
			'no_found_rows'  => true,
			'fields'         => 'all',
		]);

		if (empty($posts)) {
			return '';
		}

		foreach ($posts as $post) {
			if (!$post instanceof WP_Post) {
				continue;
			}

			if (post_password_required($post)) {
				continue;
			}

			if (function_exists('is_post_publicly_viewable') && !is_post_publicly_viewable($post)) {
				continue;
			}

			$canonical = get_permalink($post);
			if (!is_string($canonical) || '' === $canonical) {
				continue;
			}

			$md_url = $this->build_markdown_url($canonical);
			$title  = html_entity_decode((string) get_the_title($post), ENT_QUOTES | ENT_HTML5, 'UTF-8');
			$title  = trim(str_replace(["\r\n", "\r", "\n"], ' ', $title));

			if ('' === $title) {
				$title = basename(untrailingslashit($canonical));
			}

			$lines[] = '- [' . $title . '](' . $md_url . ')';
		}

		$lines[] = '';

		return implode("\n", $lines);
	}

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
