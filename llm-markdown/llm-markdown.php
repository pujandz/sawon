<?php
/**
 * Plugin Name:       LLM Markdown – Expose Content as .md
 * Plugin URI:        https://compiledrogue.com/
 * Description:       Exposes public WordPress content as clean .md routes with YAML front matter. Designed for LLMs, AI crawlers, and headless workflows. Includes llms.txt, direct content rendering, and smart caching.
 * Version:           2.0.0
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Author:            Compiled Rogue
 * Author URI:        https://compiledrogue.com
 * License:           GPL2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       llm-markdown
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
	exit;
}

define('LLMMD_FILE', __FILE__);
define('LLMMD_PATH', plugin_dir_path(__FILE__));
define('LLMMD_URL', plugin_dir_url(__FILE__));
define('LLMMD_VERSION', '2.0.0');

require_once LLMMD_PATH . 'includes/class-settings.php';
require_once LLMMD_PATH . 'includes/class-renderer.php';
require_once LLMMD_PATH . 'includes/class-llms-txt.php';
require_once LLMMD_PATH . 'includes/class-plugin.php';

register_activation_hook(LLMMD_FILE, ['\LLM_Markdown\Plugin', 'activate']);
register_deactivation_hook(LLMMD_FILE, ['\LLM_Markdown\Plugin', 'deactivate']);

add_action('plugins_loaded', static function (): void {
	\LLM_Markdown\Plugin::instance()->register_hooks();
});
