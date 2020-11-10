<?php

/**
 * Functions, setups and definitions
 * 
 * Index:
 * - Variables
 * - Theme setup
 * - Register widget areas
 * - Clean up
 * - Remove hentry class
 * - Enqueue styles
 * - Enqueue scripts
 * - Ajax handler
 * - Register block categories
 * - Custom logo classes
 * - Archive post order
 * - SVG fix
 * - Adminbar CSS
 * - Include files
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Variables
 */
$odd_or_even = 'odd';

/**
 * Theme setup
 */
if (!function_exists('rasande_theme_support')) {

	function rasande_theme_support()
	{
		// Setup for translation
		load_theme_textdomain('rasande', get_template_directory() . '/lang');
		// Add Support for WP Controlled Title Tag
		add_theme_support('title-tag');
		// Set up the WordPress Theme logo feature.
		add_theme_support('custom-logo');
		// Add WP Thumbnail Support
		add_theme_support('post-thumbnails');
		// Add support for responsive embedded content
		add_theme_support('responsive-embeds');
		// Add excerpt
		add_post_type_support('page', 'excerpt');
		// Enable blockeditor .alignwide and .alignfull support
		add_theme_support('align-wide');
		// Add RSS Support
		add_theme_support('automatic-feed-links');
		//Add AMP support
		add_theme_support('amp');
		// Add HTML5 Support
		add_theme_support('html5', array(
			'comment-list',
			'comment-form',
			'search-form',
			'gallery',
			'caption',
			'script',
			'style'
		));
		// Add image sizes
		add_image_size('card-thumbnail', 320, 250, array('center', 'center'));
		add_image_size('entry-header', 950, 500, array('center', 'center'));
		// Register menus
		register_nav_menus(array(
			'primary' => __('Primary Menu', 'rasande'),
			'mobile' => __('Mobile Menu', 'rasande')
		));
	}

	add_action('after_setup_theme', 'rasande_theme_support');
}

/**
 * Register widget areas
 */
if (!function_exists('rasande_widgets_init')) {

	function rasande_widgets_init()
	{
		register_sidebar(array(
			'name' => __('Footer column 1', 'rasande'),
			'id' => 'footer-1',
			'before_widget' => '<div>',
			'after_widget' => '</div>',
			'before_title' => '<h3>',
			'after_title' => '</h3>',
		));
		register_sidebar(array(
			'name' => __('Footer column 2', 'rasande'),
			'id' => 'footer-2',
			'before_widget' => '<div>',
			'after_widget' => '</div>',
			'before_title' => '<h3>',
			'after_title' => '</h3>',
		));
		register_sidebar(array(
			'name' => __('Footer column 3', 'rasande'),
			'id' => 'footer-3',
			'before_widget' => '<div>',
			'after_widget' => '</div>',
			'before_title' => '<h3>',
			'after_title' => '</h3>',
		));
	}
	add_action('widgets_init', 'rasande_widgets_init');
}

/**
 * Clean up WordPress head
 */
if (!function_exists('rasande_cleanup')) {

	function rasande_cleanup()
	{
		// Remove extra links
		remove_action('wp_head', 'feed_links_extra', 3);
		// Remove post and comment feeds
		remove_action('wp_head', 'feed_links', 2);
		// Remove EditURI link
		remove_action('wp_head', 'rsd_link');
		// Remove Windows live writer
		remove_action('wp_head', 'wlwmanifest_link');
		// Remove index link
		remove_action('wp_head', 'index_rel_link');
		// Remove previous link
		remove_action('wp_head', 'parent_post_rel_link', 10, 0);
		// Remove start link
		remove_action('wp_head', 'start_post_rel_link', 10, 0);
		// Remove links for adjacent posts
		remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
		// Remove WP version
		remove_action('wp_head', 'wp_generator');
		// Remove emjois
		remove_action('wp_head', 'print_emoji_detection_script', 7);
		remove_action('admin_print_scripts', 'print_emoji_detection_script');
		remove_action('wp_print_styles', 'print_emoji_styles');
		remove_action('admin_print_styles', 'print_emoji_styles');
	}
	add_action('after_setup_theme', 'rasande_cleanup');
}

/**
* Remove hentry from post_class
*/
function isa_remove_hentry_class( $classes ) {
    $classes = array_diff( $classes, array( 'hentry' ) );
    return $classes;
}
add_filter( 'post_class', 'isa_remove_hentry_class' );

/**
 * Clean up archives titles
 */
if (!function_exists('rasande_archive_titles')) {

	function rasande_archive_titles($title)
	{
		if (is_category()) {
			$title = single_cat_title('', false);
		} elseif (is_tag()) {
			$title = single_tag_title('', false);
		} elseif (is_author()) {
			$title = '<span class="vcard">' . get_the_author() . '</span>';
		} elseif (is_post_type_archive()) {
			$title = post_type_archive_title('', false);
		} elseif (is_tax()) {
			$title = single_term_title('', false);
		} elseif (is_home()) {
			$title = single_post_title('', false);
		}
		return $title;
	}
	add_filter('get_the_archive_title', 'rasande_archive_titles');
}

/**
 * Enqueue styles
 */
if (!function_exists('rasande_styles')) {

	function rasande_styles()
	{
		$theme_version = wp_get_theme()->get('Version');
		wp_enqueue_style('styles', get_stylesheet_uri(), array(), $theme_version);
		wp_enqueue_style('rasande-styles', get_template_directory_uri() . '/assets/css/style.css', array(), $theme_version);
	}
	add_action('wp_enqueue_scripts', 'rasande_styles');
}

/**
 * Enqueue editor styles
 */
if (!function_exists('rasande_editor_styles')) {

	function rasande_editor_styles()
	{
		$theme_version = wp_get_theme()->get('Version');
		wp_enqueue_style('editor', get_stylesheet_directory_uri() . '/assets/css/editor-style.css', false, $theme_version, 'all');
	}

	add_action('enqueue_block_editor_assets', 'rasande_editor_styles');
}

/**
 * Enqueue scripts
 */
if (!function_exists('rasande_scripts')) {

	function rasande_scripts()
	{
		global $wp_query;
		$theme_version = wp_get_theme()->get('Version');

		wp_register_script('anime', get_template_directory_uri() . '/assets/js/vendor/anime.min.js', array(), false, true);
		//wp_enqueue_script('anime');

		wp_register_script('waypoints', get_template_directory_uri() . '/assets/js/vendor/noframework.waypoints.min.js', array(), false, true);
		//wp_enqueue_script('waypoints');

		wp_register_script('rasande-script', get_template_directory_uri() . '/assets/js/script.js', array(), $theme_version, true);
		wp_enqueue_script('rasande-script');

		if (!wp_is_mobile()) {
			wp_enqueue_script('rasande-desktop-script', get_template_directory_uri() . '/assets/js/scriptDesktop.js', array(), $theme_version, true);
		}

		if (is_singular() && comments_open() && get_option('thread_comments')) {
			wp_enqueue_script('comment-reply');
		}
	}
	add_action('wp_enqueue_scripts', 'rasande_scripts');
}

/**
 * Ajax handler
 */
function rasande_ajax_loadmore()
{

	$next_page = $_POST['current_page'] + 1;
	$query = new WP_Query([
	  'posts_per_page' => get_option( 'posts_per_page' ),
	  'paged' => $next_page
	]);
	if ($query->have_posts()) :

		ob_start();

		while ($query->have_posts()) : $query->the_post(); ?>

			<div class="col-12 col-sm-6 col-md-4 the-card">
				<article id="post-<?php the_ID(); ?>" <?php post_class('entry'); ?>>
					<?php get_template_part('template-parts/card'); ?>
				</article>
			</div>

		<?php endwhile;

		wp_send_json_success(ob_get_clean());

	else :

		wp_send_json_error('No more posts!');

	endif;

	die; // here we exit the script and even no wp_reset_query() required!
}

add_action('wp_ajax_loadmore', 'rasande_ajax_loadmore'); // wp_ajax_{action}
add_action('wp_ajax_nopriv_loadmore', 'rasande_ajax_loadmore'); // wp_ajax_nopriv_{action}

/**
 * Register custom editor block-category
 */
if (!function_exists('rasande_block_categories')) {

	function rasande_block_categories($categories, $post)
	{
		return array_merge(
			$categories,
			array(
				array(
					'slug' => 'customblocks',
					'title' => __('Custom Blocks', 'rasande')
				),
			)
		);
	}
	add_filter('block_categories', 'rasande_block_categories', 10, 2);
}

/**
 * Change attributes of custom logo
 */
if (!function_exists('rasande_change_logo_class')) {
	function rasande_change_logo_class($html)
	{
		$html = str_replace('class="custom-logo-link"', 'class="site-header__brand"', $html);
		$html = str_replace('alt=""', 'title="Home" alt="logo"', $html);

		return $html;
	}
	add_filter('get_custom_logo', 'rasande_change_logo_class');
}

/**
 * Set archive post order
 */
if (!function_exists('rasande_archive_order')) {

	function rasande_archive_order($query)
	{
		if (is_archive()) :
			$query->set('order', 'DESC');
			$query->set('orderby', 'date');
		endif;
	};
	add_action('pre_get_posts', 'rasande_archive_order');
}

/**
 * Fix svg size attributes
 */
if (!function_exists('rasande_svg_attr')) {

	function rasande_svg_attr($out, $id)
	{
		$image_url  = wp_get_attachment_url($id);
		$file_ext   = pathinfo($image_url, PATHINFO_EXTENSION);
		if (is_admin() || 'svg' !== $file_ext) {
			return false;
		}
		return array($image_url, null, null, false);
	}
	add_filter('image_downsize', 'rasande_svg_attr', 10, 2);
}

/**
 * 
 */
if (!function_exists('rasande_reading_time')) {
	function rasande_reading_time($postID)
	{
		$content = get_post_field('post_content', $postID);
		$word_count = str_word_count(strip_tags($content));
		$readingtime = ceil($word_count / 250);
		$timer = " min";
		$totalreadingtime = $readingtime . $timer;
		return $totalreadingtime;
	}
}

/**
 * Add margin to adminbar when site__header is fixed
 */
if (!function_exists('rasande_admin_bar_css')) {
	function rasande_admin_bar_css()
	{
		if (is_admin_bar_showing()) { ?>
			<style>
				#wpadminbar {
					position: fixed;
				}

				.site-header.fixed {
					margin-top: 46px;
				}

				@media screen and (min-width: 783px) {
					.site-header.fixed {
						margin-top: 32px;
					}
				}
			</style>
<?php }
	}
	add_action('wp_head', 'rasande_admin_bar_css');
}


add_action( 'init', function() {
    $GLOBALS['wp_rewrite']->pagination_base = 'sida';
});

/**
 * Include /inc files
 */
$rasande_includes = array(
	'/acf.php',
	'/navigation-walker.php',
);

foreach ($rasande_includes as $file) {
	$filepath = locate_template('inc' . $file);
	if (!$filepath) {
		trigger_error(sprintf('Error locating /inc%s for inclusion', $file), E_USER_ERROR);
	}
	require_once $filepath;
}
