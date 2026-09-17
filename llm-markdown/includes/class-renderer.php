<?php

declare(strict_types=1);

namespace LLM_Markdown;

use DOMDocument;
use DOMElement;
use DOMNode;
use DOMXPath;
use WP_Post;
use WP_Taxonomy;

if (!defined('ABSPATH')) {
	exit;
}

final class Renderer {
	public const CACHE_GENERATION_OPTION = 'llm_markdown_cache_generation';

	private const CACHE_TTL     = 12 * HOUR_IN_SECONDS;
	private const CACHE_VERSION = 3;

	private Settings $settings;

	public function __construct(Settings $settings) {
		$this->settings = $settings;
	}

	public static function bump_cache_generation(): void {
		$generation = max(1, (int) get_option(self::CACHE_GENERATION_OPTION, 1));
		update_option(self::CACHE_GENERATION_OPTION, $generation + 1, false);
	}

	/**
	 * Delete a single post's cached Markdown document.
	 */
	public static function delete_post_cache(int $post_id): void {
		delete_transient('llm_markdown_p' . $post_id);
	}

	public function render_post(WP_Post $post, string $canonical_url, string $markdown_url): string {
		$cache_key = $this->cache_key($post);
		$cache_ttl = (int) apply_filters('llm_markdown_cache_ttl', self::CACHE_TTL, $post);

		if (!is_user_logged_in() && $cache_ttl > 0) {
			$cached = get_transient($cache_key);
			if (is_string($cached) && '' !== $cached) {
				return $cached;
			}
		}

		$html = $this->settings->should_use_full_page_render()
			? $this->fetch_rendered_html($canonical_url)
			: $this->render_content_directly($post);

		if ('' === trim($html)) {
			return '';
		}

		$md_body = $this->html_to_markdown($html, $this->settings->should_use_full_page_render());

		$front_matter = $this->build_front_matter($post, $canonical_url, $markdown_url);
		/** @var array<string, mixed> $front_matter */
		$front_matter = (array) apply_filters('llm_markdown_front_matter', $front_matter, $post);

		$document = "---\n" . $this->yaml($front_matter) . "---\n\n" . trim($md_body) . "\n";

		$document = (string) apply_filters('llm_markdown_markdown_document', $document, $post);

		if (!is_user_logged_in() && $cache_ttl > 0) {
			set_transient($cache_key, $document, $cache_ttl);
		}

		return $document;
	}

	// -------------------------------------------------------------------------
	// Content acquisition
	// -------------------------------------------------------------------------

	/**
	 * Fast path: render post content directly through WordPress filters.
	 * No HTTP round-trip required. Works correctly for Gutenberg, shortcodes,
	 * and standard theme setups.
	 */
	private function render_content_directly(WP_Post $post): string {
		// Save and restore globals manually (PHP 7.4 compatible).
		$prev_post      = isset($GLOBALS['post']) ? $GLOBALS['post'] : null;
		$prev_more      = isset($GLOBALS['more']) ? (int) $GLOBALS['more'] : null;
		$prev_page      = isset($GLOBALS['page']) ? (int) $GLOBALS['page'] : null;
		$prev_pages     = isset($GLOBALS['pages']) ? $GLOBALS['pages'] : null;
		$prev_multipage = isset($GLOBALS['multipage']) ? (int) $GLOBALS['multipage'] : null;

		$GLOBALS['post']      = $post;
		$GLOBALS['more']      = 1; // Show content past <!--more--> tags.
		$GLOBALS['page']      = 1;
		$GLOBALS['pages']     = [$post->post_content];
		$GLOBALS['multipage'] = 0;

		setup_postdata($post);

		$html = (string) apply_filters('the_content', $post->post_content);

		// Restore previous state.
		wp_reset_postdata();
		if ($prev_post instanceof WP_Post) {
			$GLOBALS['post'] = $prev_post;
			setup_postdata($prev_post);
		} elseif (null !== $prev_post) {
			$GLOBALS['post'] = $prev_post;
		}
		if (null !== $prev_more)      { $GLOBALS['more']      = $prev_more; }
		if (null !== $prev_page)      { $GLOBALS['page']      = $prev_page; }
		if (null !== $prev_pages)     { $GLOBALS['pages']     = $prev_pages; }
		if (null !== $prev_multipage) { $GLOBALS['multipage'] = $prev_multipage; }

		return $html;
	}

	/**
	 * Full page render via loopback HTTP (for page builders).
	 */
	private function fetch_rendered_html(string $canonical_url): string {
		$host      = strtolower((string) wp_parse_url($canonical_url, PHP_URL_HOST));
		$sslverify = !is_string($host) || '' === $host || '.lndo.site' !== substr($host, -9);

		$response = wp_safe_remote_get($canonical_url, [
			'timeout'            => 15,
			'redirection'        => 3,
			'sslverify'          => $sslverify,
			'reject_unsafe_urls' => true,
			'headers'            => [
				'Accept'                => 'text/html,application/xhtml+xml',
				'X-LLMMD-Render-Source' => '1',
			],
			'user-agent'         => 'LLMMD/' . LLMMD_VERSION,
		]);

		if (is_wp_error($response)) {
			return '';
		}

		$code = (int) wp_remote_retrieve_response_code($response);
		if ($code < 200 || $code >= 300) {
			return '';
		}

		$ctype = (string) wp_remote_retrieve_header($response, 'content-type');
		if ('' !== $ctype && false === stripos($ctype, 'text/html')) {
			return '';
		}

		return (string) wp_remote_retrieve_body($response);
	}

	// -------------------------------------------------------------------------
	// HTML → Markdown
	// -------------------------------------------------------------------------

	/**
	 * Convert an HTML string to Markdown.
	 *
	 * @param bool $full_page When true the input is a complete HTML page and
	 *                        we first locate and extract the content root node.
	 */
	private function html_to_markdown(string $html, bool $full_page = false): string {
		if ('' === trim($html)) {
			return '';
		}

		if (!class_exists(DOMDocument::class)) {
			return $this->plain_text($html);
		}

		$dom = $this->make_dom($html, $full_page);
		if (null === $dom) {
			return $this->plain_text($html);
		}

		$xpath = new DOMXPath($dom);

		// When working with a full page, locate the content root first;
		// otherwise use the body as the root (direct rendering).
		if ($full_page) {
			$root = $this->locate_content_root($xpath);
		} else {
			$body = $dom->getElementsByTagName('body')->item(0);
			$root = ($body instanceof DOMNode) ? $body : null;
		}

		if (!$root instanceof DOMNode) {
			return $this->plain_text($html);
		}

		// Always strip non-content elements.
		$this->remove_nodes_by_selectors($xpath, $root, 'script,style,noscript,template,iframe');

		// User-defined ignore selectors.
		$ignore = $this->settings->get_ignore_selectors();
		if ('' !== $ignore) {
			$this->remove_nodes_by_selectors($xpath, $root, $ignore);
		}

		$md = $this->convert_children($root, 0);
		$md = $this->cleanup_markdown((string) $md);

		return trim((string) $md);
	}

	private function make_dom(string $html, bool $full_page): ?DOMDocument {
		$dom   = new DOMDocument('1.0', 'UTF-8');
		$flags = 0;
		if (defined('LIBXML_HTML_NOIMPLIED')) { $flags |= LIBXML_HTML_NOIMPLIED; }
		if (defined('LIBXML_HTML_NODEFDTD'))  { $flags |= LIBXML_HTML_NODEFDTD; }

		$wrapped = $full_page
			? '<?xml encoding="UTF-8">' . $html
			: '<?xml encoding="UTF-8"><!DOCTYPE html><html><body>' . $html . '</body></html>';

		$prev   = libxml_use_internal_errors(true);
		$loaded = $dom->loadHTML($wrapped, $flags);
		libxml_clear_errors();
		libxml_use_internal_errors($prev);

		return $loaded ? $dom : null;
	}

	private function locate_content_root(DOMXPath $xpath): ?DOMNode {
		$root = $this->select_first($xpath, (string) $this->settings->get_document_root_selector());
		$root = $root ?? $this->select_first($xpath, 'main');
		$root = $root ?? $this->select_first($xpath, 'article');
		$root = $root ?? $xpath->query('//body')->item(0);
		return ($root instanceof DOMNode) ? $root : null;
	}

	// -------------------------------------------------------------------------
	// DOM helpers
	// -------------------------------------------------------------------------

	private function select_first(DOMXPath $xpath, string $css_selector): ?DOMNode {
		$selectors = array_filter(array_map('trim', preg_split('/[,\r\n]+/', $css_selector, -1, PREG_SPLIT_NO_EMPTY) ?: []));

		foreach ($selectors as $sel) {
			$expr = $this->css_to_xpath($sel);
			if ('' === $expr) {
				continue;
			}
			$list = $xpath->query($expr);
			if ($list && $list->length > 0) {
				$node = $list->item(0);
				if ($node instanceof DOMNode) {
					return $node;
				}
			}
		}

		return null;
	}

	private function remove_nodes_by_selectors(DOMXPath $xpath, DOMNode $context, string $selectors_csv): void {
		$selectors = array_filter(array_map('trim', preg_split('/[,\r\n]+/', $selectors_csv, -1, PREG_SPLIT_NO_EMPTY) ?: []));

		if (empty($selectors)) {
			return;
		}

		$to_remove = [];
		foreach ($selectors as $sel) {
			$expr  = $this->css_to_xpath($sel, true);
			if ('' === $expr) {
				continue;
			}
			$nodes = $xpath->query($expr, $context);
			if ($nodes) {
				foreach ($nodes as $n) {
					if ($n instanceof DOMNode) {
						$to_remove[] = $n;
					}
				}
			}
		}

		foreach ($to_remove as $n) {
			if ($n->parentNode instanceof DOMNode) {
				$n->parentNode->removeChild($n);
			}
		}
	}

	/**
	 * Minimal CSS selector to XPath converter.
	 * Supports: tag, #id, .class, tag.class, tag#id, descendant ( ), child (>).
	 */
	private function css_to_xpath(string $selector, bool $relative = false): string {
		$selector = trim($selector);
		if ('' === $selector) {
			return '';
		}

		$scope    = $relative ? './/' : '//';
		$selector = (string) preg_replace('/\s*>\s*/u', ' > ', $selector);
		$selector = trim((string) preg_replace('/\s+/u', ' ', $selector));
		$tokens   = explode(' ', $selector);

		$xpath = '';
		$axis  = $scope;

		foreach ($tokens as $tok) {
			if ('' === $tok) {
				continue;
			}
			if ('>' === $tok) {
				$axis = '/';
				continue;
			}
			$step = $this->css_simple_to_xpath_step($tok);
			if ('' === $step) {
				return '';
			}
			$xpath .= $axis . $step;
			$axis   = '//';
		}

		return $xpath;
	}

	private function css_simple_to_xpath_step(string $simple): string {
		$simple = trim($simple);
		if ('' === $simple) {
			return '';
		}

		$tag     = '*';
		$id      = '';
		$classes = [];

		if ('.' !== $simple[0] && '#' !== $simple[0] && preg_match('/^([a-z0-9_-]+)(.*)$/i', $simple, $m)) {
			$tag  = strtolower((string) $m[1]);
			$rest = (string) ($m[2] ?? '');
		} else {
			$rest = $simple;
		}

		if (preg_match('/#([a-zA-Z0-9_-]+)/', $rest, $m)) {
			$id = (string) $m[1];
		}
		if (preg_match_all('/\.([a-zA-Z0-9_-]+)/', $rest, $m)) {
			$classes = array_values(array_unique(array_map('strval', $m[1] ?? [])));
		}

		$pred = [];
		if ('' !== $id) {
			$pred[] = "@id='{$id}'";
		}
		foreach ($classes as $cls) {
			$pred[] = "contains(concat(' ', normalize-space(@class), ' '), ' {$cls} ')";
		}

		$step = $tag;
		if (!empty($pred)) {
			$step .= '[' . implode(' and ', $pred) . ']';
		}

		return $step;
	}

	private function inner_html(DOMNode $node): string {
		if (!$node->ownerDocument instanceof DOMDocument) {
			return '';
		}
		$out = '';
		foreach ($node->childNodes as $child) {
			$out .= (string) $node->ownerDocument->saveHTML($child);
		}
		return $out;
	}

	// -------------------------------------------------------------------------
	// Node → Markdown conversion
	// -------------------------------------------------------------------------

	private function convert_children(DOMNode $node, int $list_depth): string {
		$out = '';
		foreach ($node->childNodes as $child) {
			$out .= $this->convert_node($child, $list_depth);
		}
		return $out;
	}

	private function convert_node(DOMNode $node, int $list_depth): string {
		if (XML_TEXT_NODE === $node->nodeType) {
			$text = (string) $node->nodeValue;
			if ('' === trim($text) && $this->is_block_padding_text($node)) {
				return '';
			}
			return $this->normalize_text($text);
		}

		if (XML_ELEMENT_NODE !== $node->nodeType) {
			return '';
		}

		$tag = strtolower($node->nodeName);

		switch ($tag) {
			case 'script':
			case 'style':
			case 'noscript':
			case 'template':
			case 'iframe':
				return '';

			case 'h1':
			case 'h2':
			case 'h3':
			case 'h4':
			case 'h5':
			case 'h6':
				$level = (int) substr($tag, 1);
				$text  = trim((string) preg_replace('/\s+/u', ' ', $this->convert_children($node, $list_depth)));
				return '' === $text ? '' : str_repeat('#', $level) . ' ' . $text . "\n\n";

			case 'p':
				$text = trim($this->convert_children($node, $list_depth));
				return '' === $text ? '' : $text . "\n\n";

			case 'div':
			case 'section':
			case 'article':
			case 'main':
			case 'aside':
			case 'header':
			case 'footer':
				$text = trim($this->convert_children($node, $list_depth));
				return '' === $text ? '' : $text . "\n\n";

			case 'br':
				return "  \n";

			case 'strong':
			case 'b':
				$text = trim($this->convert_children($node, $list_depth));
				return '' === $text ? '' : '**' . $text . '**';

			case 'em':
			case 'i':
				$text = trim($this->convert_children($node, $list_depth));
				return '' === $text ? '' : '*' . $text . '*';

			case 'del':
			case 's':
			case 'strike':
				$text = trim($this->convert_children($node, $list_depth));
				return '' === $text ? '' : '~~' . $text . '~~';

			case 'mark':
				$text = trim($this->convert_children($node, $list_depth));
				return '' === $text ? '' : '==' . $text . '==';

			case 'sup':
				$text = trim($this->convert_children($node, $list_depth));
				return '' === $text ? '' : '^' . $text . '^';

			case 'sub':
				$text = trim($this->convert_children($node, $list_depth));
				return '' === $text ? '' : '~' . $text . '~';

			case 'abbr':
				$text  = trim($this->convert_children($node, $list_depth));
				$title = ($node instanceof DOMElement) ? trim((string) $node->getAttribute('title')) : '';
				if ('' !== $title) {
					return $text . ' (' . $title . ')';
				}
				return $text;

			case 'kbd':
			case 'samp':
			case 'var':
				$text = trim($this->convert_children($node, $list_depth));
				return '' === $text ? '' : '`' . $text . '`';

			case 'q':
				$text = trim($this->convert_children($node, $list_depth));
				return '' === $text ? '' : '"' . $text . '"';

			case 'cite':
				$text = trim($this->convert_children($node, $list_depth));
				return '' === $text ? '' : '*' . $text . '*';

			case 'code':
				if ($node->parentNode instanceof DOMNode && 'pre' === strtolower($node->parentNode->nodeName)) {
					return $this->normalize_code((string) $node->textContent);
				}
				return $this->convert_inline_code((string) $node->textContent);

			case 'pre':
				$lang = '';
				$code = $node->firstChild;
				if ($code instanceof DOMElement && 'code' === strtolower($code->nodeName)) {
					$class = (string) $code->getAttribute('class');
					if (preg_match('/\blanguage-([a-zA-Z0-9_+-]+)\b/', $class, $m)) {
						$lang = $m[1];
					}
					$text = $this->normalize_code((string) $code->textContent);
				} else {
					$text = $this->normalize_code((string) $node->textContent);
				}
				return $this->convert_fenced_code($text, $lang);

			case 'a':
				$href = ($node instanceof DOMElement) ? trim((string) $node->getAttribute('href')) : '';
				$text = $this->normalize_inline_text((string) $node->textContent);
				if ('' === $href) {
					return $text;
				}
				if ('' === $text) {
					$text = $href;
				}
				// No trailing \n — links are inline elements.
				return '[' . $text . '](' . $href . ')';

			case 'ul':
				return $this->convert_list($node, false, $list_depth);

			case 'ol':
				return $this->convert_list($node, true, $list_depth);

			case 'li':
				// li outside ul/ol: treat as a bullet item.
				$text = trim($this->convert_children($node, $list_depth));
				return '' === $text ? '' : '- ' . $text . "\n";

			case 'blockquote':
				$text = trim($this->convert_children($node, $list_depth));
				if ('' === $text) {
					return '';
				}
				$lines = preg_split('/\r\n|\r|\n/', $text) ?: [];
				$lines = array_map(static fn($l): string => '> ' . rtrim((string) $l), $lines);
				return implode("\n", $lines) . "\n\n";

			case 'hr':
				return "---\n\n";

			case 'table':
				return $this->convert_table($node);

			case 'img':
				return $this->convert_image($node);

			case 'figure':
				$text = trim($this->convert_children($node, $list_depth));
				return '' === $text ? '' : $text . "\n\n";

			case 'figcaption':
				$text = trim($this->convert_children($node, $list_depth));
				return '' === $text ? '' : '_' . $text . "_\n";

			case 'details':
				$text = trim($this->convert_children($node, $list_depth));
				return '' === $text ? '' : $text . "\n\n";

			case 'summary':
				$text = trim($this->convert_children($node, $list_depth));
				return '' === $text ? '' : '**' . $text . "**\n";

			default:
				return $this->convert_children($node, $list_depth);
		}
	}

	// -------------------------------------------------------------------------
	// Code helpers
	// -------------------------------------------------------------------------

	private function convert_inline_code(string $text): string {
		$text = (string) preg_replace('/[ \t]+/u', ' ', str_replace(["\r\n", "\r", "\n"], ' ', $text));
		$text = trim($text);
		if ('' === $text) {
			return '';
		}
		$fence_length = $this->longest_backtick_run($text) + 1;
		$fence        = str_repeat('`', max(1, $fence_length));
		$padding      = ('`' === $text[0] || '`' === $text[-1]) ? ' ' : '';
		return $fence . $padding . $text . $padding . $fence;
	}

	private function convert_fenced_code(string $text, string $lang = ''): string {
		if ('' === $text) {
			return '';
		}
		$fence = str_repeat('`', max(3, $this->longest_backtick_run($text) + 1));
		return $fence . $lang . "\n" . $text . "\n" . $fence . "\n\n";
	}

	private function longest_backtick_run(string $text): int {
		if (!preg_match_all('/`+/', $text, $matches)) {
			return 0;
		}
		$longest = 0;
		foreach ($matches[0] as $match) {
			$longest = max($longest, strlen((string) $match));
		}
		return $longest;
	}

	// -------------------------------------------------------------------------
	// Image
	// -------------------------------------------------------------------------

	private function convert_image(DOMNode $node): string {
		if (!$this->settings->should_include_images() || !$node instanceof DOMElement) {
			return '';
		}

		$src = $this->get_image_src($node);
		if ('' === $src) {
			return '';
		}

		$src = esc_url_raw($src);
		if ('' === $src) {
			return '';
		}

		$alt   = $this->escape_md_image_alt($this->normalize_inline_text((string) $node->getAttribute('alt')) ?: 'Image');
		$title = $this->escape_md_image_title($this->normalize_inline_text((string) $node->getAttribute('title')));

		return '' !== $title
			? '![' . $alt . '](' . $src . ' "' . $title . '")'
			: '![' . $alt . '](' . $src . ')';
	}

	private function get_image_src(DOMElement $node): string {
		foreach (['src', 'data-src', 'data-lazy-src', 'data-original'] as $attr) {
			$value = trim((string) $node->getAttribute($attr));
			if ('' !== $value) {
				return $value;
			}
		}
		return '';
	}

	private function escape_md_image_alt(string $text): string {
		$text = str_replace(['[', ']'], ['\[', '\]'], $text);
		return trim((string) preg_replace('/\s+/u', ' ', str_replace(["\r\n", "\r", "\n"], ' ', $text)));
	}

	private function escape_md_image_title(string $text): string {
		$text = str_replace('"', '\"', $text);
		return trim((string) preg_replace('/\s+/u', ' ', str_replace(["\r\n", "\r", "\n"], ' ', $text)));
	}

	// -------------------------------------------------------------------------
	// Table
	// -------------------------------------------------------------------------

	private function convert_table(DOMNode $table): string {
		$rows = [];

		foreach ($table->childNodes as $child) {
			if (XML_ELEMENT_NODE !== $child->nodeType) {
				continue;
			}
			$tag = strtolower($child->nodeName);
			if (in_array($tag, ['thead', 'tbody', 'tfoot'], true)) {
				foreach ($child->childNodes as $tr) {
					if (XML_ELEMENT_NODE === $tr->nodeType && 'tr' === strtolower($tr->nodeName)) {
						$rows[] = $this->extract_table_row($tr);
					}
				}
			} elseif ('tr' === $tag) {
				$rows[] = $this->extract_table_row($child);
			}
		}

		$rows = array_values(array_filter($rows, static fn($r): bool => is_array($r) && !empty($r)));
		if (empty($rows)) {
			return '';
		}

		$col_count = max(array_map('count', $rows));
		if ($col_count <= 0) {
			return '';
		}

		foreach ($rows as $i => $row) {
			$rows[$i] = array_pad($row, $col_count, '');
		}

		$header = array_shift($rows);
		if (empty($header)) {
			return '';
		}

		$escape = fn($v): string => $this->escape_table_cell((string) $v);
		$out    = [];
		$out[]  = '| ' . implode(' | ', array_map($escape, $header)) . ' |';
		$out[]  = '| ' . implode(' | ', array_fill(0, $col_count, '---')) . ' |';
		foreach ($rows as $row) {
			$out[] = '| ' . implode(' | ', array_map($escape, $row)) . ' |';
		}

		return implode("\n", $out) . "\n\n";
	}

	/**
	 * @return array<int, string>
	 */
	private function extract_table_row(DOMNode $tr): array {
		$cells = [];
		foreach ($tr->childNodes as $cell) {
			if (XML_ELEMENT_NODE !== $cell->nodeType) {
				continue;
			}
			$tag = strtolower($cell->nodeName);
			if ('th' === $tag || 'td' === $tag) {
				$cells[] = $this->normalize_inline_text((string) $cell->textContent);
			}
		}
		return $cells;
	}

	private function escape_table_cell(string $value): string {
		$value = str_replace('|', '\|', $value);
		$value = str_replace(["\r\n", "\r", "\n"], '<br>', $value);
		return trim((string) preg_replace('/\s+/u', ' ', $value));
	}

	// -------------------------------------------------------------------------
	// List
	// -------------------------------------------------------------------------

	private function convert_list(DOMNode $node, bool $ordered, int $depth): string {
		$out   = '';
		$index = 1;

		foreach ($node->childNodes as $child) {
			if (XML_ELEMENT_NODE !== $child->nodeType || 'li' !== strtolower($child->nodeName)) {
				continue;
			}
			$out .= $this->convert_list_item($child, $ordered, $index, $depth);
			$index++;
		}

		return '' === $out ? '' : rtrim($out, "\n") . "\n\n";
	}

	private function convert_list_item(DOMNode $node, bool $ordered, int $index, int $depth): string {
		$inline = '';
		$nested = '';

		foreach ($node->childNodes as $child) {
			if (XML_ELEMENT_NODE === $child->nodeType) {
				$t = strtolower($child->nodeName);
				if ('ul' === $t || 'ol' === $t) {
					$nested .= $this->convert_list($child, 'ol' === $t, $depth + 1);
					continue;
				}
			}
			$inline .= $this->convert_node($child, $depth);
		}

		$inline = trim((string) preg_replace('/\s+/u', ' ', trim($inline)));
		$pad    = str_repeat('  ', $depth);
		$lead   = $ordered ? ($index . '. ') : '- ';
		$line   = $pad . $lead . $inline . "\n";

		if ('' !== $nested) {
			$line .= $nested;
		}

		return $line;
	}

	// -------------------------------------------------------------------------
	// Text helpers
	// -------------------------------------------------------------------------

	private function is_block_padding_text(DOMNode $node): bool {
		$parent = $node->parentNode;
		if (!$parent instanceof DOMNode || XML_ELEMENT_NODE !== $parent->nodeType) {
			return false;
		}

		static $block_tags = [
			'body', 'div', 'section', 'article', 'main', 'header', 'footer', 'aside',
			'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'td', 'th',
		];

		if (!in_array(strtolower((string) $parent->nodeName), $block_tags, true)) {
			return false;
		}

		$prev = $node->previousSibling;
		while ($prev instanceof DOMNode && XML_TEXT_NODE === $prev->nodeType && '' === trim((string) $prev->nodeValue)) {
			$prev = $prev->previousSibling;
		}

		$next = $node->nextSibling;
		while ($next instanceof DOMNode && XML_TEXT_NODE === $next->nodeType && '' === trim((string) $next->nodeValue)) {
			$next = $next->nextSibling;
		}

		return ($prev instanceof DOMNode && XML_ELEMENT_NODE === $prev->nodeType)
			|| ($next instanceof DOMNode && XML_ELEMENT_NODE === $next->nodeType);
	}

	private function normalize_inline_text(string $text): string {
		$text = str_replace(["\r\n", "\r", "\n"], ' ', $text);
		return trim((string) preg_replace('/\s+/u', ' ', $text));
	}

	private function normalize_text(string $text): string {
		$text = str_replace(["\r\n", "\r", "\n"], ' ', $text);
		return (string) preg_replace('/\s+/u', ' ', $text);
	}

	private function normalize_code(string $text): string {
		return trim(str_replace(["\r\n", "\r"], "\n", $text), "\n");
	}

	private function plain_text(string $html): string {
		$text = wp_strip_all_tags($html, true);
		$text = html_entity_decode($text, ENT_QUOTES | ENT_HTML5, 'UTF-8');
		$text = str_replace(["\r\n", "\r"], "\n", $text);
		return trim((string) preg_replace('/\n{3,}/', "\n\n", $text));
	}

	private function cleanup_markdown(string $md): string {
		$md = str_replace(["\r\n", "\r"], "\n", $md);
		$md = (string) preg_replace('/\n{3,}/', "\n\n", $md);

		$lines = explode("\n", $md);
		foreach ($lines as $i => $line) {
			// Remove accidental indentation before headings.
			$line = (string) preg_replace('/^\s+(#{1,6}\s)/u', '$1', $line);
			// Remove a single leading space before list markers (but preserve nested indentation).
			$line = (string) preg_replace('/^ ([-*+]\s|\d+\.\s)/u', '$1', $line);
			$lines[$i] = $line;
		}

		$md = implode("\n", $lines);
		return trim((string) preg_replace('/\n{3,}/', "\n\n", $md));
	}

	// -------------------------------------------------------------------------
	// Front matter
	// -------------------------------------------------------------------------

	/**
	 * @return array<string, mixed>
	 */
	private function build_front_matter(WP_Post $post, string $canonical_url, string $markdown_url): array {
		$data = [
			'title'        => html_entity_decode((string) get_the_title($post), ENT_QUOTES | ENT_HTML5, 'UTF-8'),
			'id'           => (string) $post->ID,
			'type'         => (string) $post->post_type,
			'slug'         => (string) $post->post_name,
			'url'          => $canonical_url,
			'markdown_url' => $markdown_url,
			'published_at' => (string) get_post_time('c', true, $post),
			'modified_at'  => (string) get_post_modified_time('c', true, $post),
			'language'     => (string) get_bloginfo('language'),
		];

		// Author.
		$author_name = get_the_author_meta('display_name', (int) $post->post_author);
		if ('' !== (string) $author_name) {
			$data['author'] = (string) $author_name;
		}

		// Excerpt (up to 40 words).
		$excerpt = trim(wp_strip_all_tags((string) get_the_excerpt($post), true));
		if ('' === $excerpt) {
			$excerpt = trim(wp_strip_all_tags((string) $post->post_content, true));
		}
		if ('' !== $excerpt) {
			$excerpt = html_entity_decode($excerpt, ENT_QUOTES | ENT_HTML5, 'UTF-8');
			$excerpt = (string) preg_replace('/\s+/u', ' ', $excerpt);
			$words   = preg_split('/\s+/u', $excerpt, -1, PREG_SPLIT_NO_EMPTY) ?: [];
			if (count($words) > 40) {
				$excerpt = implode(' ', array_slice($words, 0, 40)) . '...';
			}
			$data['excerpt'] = $excerpt;
		}

		// Word count and reading time (200 wpm).
		$content_text = wp_strip_all_tags((string) $post->post_content, true);
		$word_count   = count(preg_split('/\s+/u', trim($content_text), -1, PREG_SPLIT_NO_EMPTY) ?: []);
		if ($word_count > 0) {
			$data['word_count']   = (string) $word_count;
			$data['reading_time'] = (string) max(1, (int) round($word_count / 200)) . ' min';
		}

		// Taxonomies.
		$taxes = get_object_taxonomies($post->post_type, 'objects');
		foreach ($taxes as $tax) {
			if (!$tax instanceof WP_Taxonomy || !$tax->public) {
				continue;
			}
			if (!(bool) apply_filters('llm_markdown_include_taxonomy', true, $tax, $post)) {
				continue;
			}
			$names = wp_get_post_terms($post->ID, $tax->name, ['fields' => 'names']);
			if (is_wp_error($names) || empty($names)) {
				continue;
			}
			$data['taxonomy_' . $this->yaml_key($tax->name)] = array_values(array_unique(array_map('strval', $names)));
		}

		return $data;
	}

	// -------------------------------------------------------------------------
	// YAML serializer
	// -------------------------------------------------------------------------

	/**
	 * @param array<string, mixed> $data
	 */
	private function yaml(array $data): string {
		$lines = [];
		foreach ($data as $key => $value) {
			$key = $this->yaml_key((string) $key);
			if ('' === $key) {
				continue;
			}
			if (is_array($value)) {
				$lines[] = $key . ':';
				foreach ($value as $item) {
					$lines[] = '  - ' . $this->yaml_scalar((string) $item);
				}
			} else {
				$lines[] = $key . ': ' . $this->yaml_scalar((string) $value);
			}
		}
		return implode("\n", $lines) . "\n";
	}

	private function yaml_key(string $key): string {
		return trim((string) preg_replace('/[^a-z0-9_]+/', '_', strtolower($key)), '_');
	}

	private function yaml_scalar(string $value): string {
		$value = str_replace('\\', '\\\\', $value);
		$value = str_replace('"', '\\"', $value);
		$value = str_replace("\r", '', $value);
		$value = str_replace("\n", '\n', $value);
		return '"' . $value . '"';
	}

	// -------------------------------------------------------------------------
	// Cache key
	// -------------------------------------------------------------------------

	private function cache_key(WP_Post $post): string {
		$opts_hash = md5((string) wp_json_encode([
			'root'           => $this->settings->get_document_root_selector(),
			'ignore'         => $this->settings->get_ignore_selectors(),
			'include_images' => $this->settings->should_include_images(),
			'full_page'      => $this->settings->should_use_full_page_render(),
			'v'              => self::CACHE_VERSION,
		]));

		return 'llm_markdown_' . md5(implode('|', [
			(string) get_current_blog_id(),
			(string) max(1, (int) get_option(self::CACHE_GENERATION_OPTION, 1)),
			(string) $post->ID,
			(string) $post->post_modified_gmt,
			(string) get_locale(),
			$opts_hash,
		]));
	}
}
