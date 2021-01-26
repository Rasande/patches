<?php

/**
 * Functions.php
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

// Variables
$odd_or_even = 'odd';

// Theme setup
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
		// Editor styles
		add_theme_support('editor-styles');
		add_editor_style('assets/css/editor-style.css');
		// Editor Color Palette
		add_theme_support('editor-color-palette', array(
			array(
				'name'  => __('Primary', 'rasande'),
				'slug'  => 'primary',
				'color'    => 'var(--primary)',
			),
			array(
				'name'  => __('Secondary', 'rasande'),
				'slug'  => 'secondary',
				'color' => 'var(--secondary)',
			),
			array(
				'name'  => __('Accent', 'rasande'),
				'slug'  => 'accent',
				'color' => 'var(--accent)',
			),
			array(
				'name'    => __('Light', 'rasande'),
				'slug'    => 'light',
				'color'    => 'var(--light)',
			),
			array(
				'name'    => __('Dark', 'rasande'),
				'slug'    => 'dark',
				'color'    => 'var(--dark)',
			),
			array(
				'name'    => __('Grey', 'rasande'),
				'slug'    => 'grey',
				'color'    => 'var(--grey)',
			),
		));
		// Editor font sizes
		add_theme_support(
			'editor-font-sizes',
			array(
				array(
					'name'      => __('Small', 'rasande'),
					'shortName' => __('S', 'rasande'),
					'size'      => 12,
					'slug'      => 'small'
				),
				array(
					'name'      => __('Normal', 'rasande'),
					'shortName' => __('N', 'rasande'),
					'size'      => 18,
					'slug'      => 'normal'
				),
				array(
					'name'      => __('Medium', 'rasande'),
					'shortName' => __('M', 'rasande'),
					'size'      => 24,
					'slug'      => 'medium'
				),
				array(
					'name'      => __('Large', 'rasande'),
					'shortName' => __('L', 'rasande'),
					'size'      => 30,
					'slug'      => 'large'
				)
			)
		);
		// Add image sizes
		add_image_size('card-thumbnail', 500, 320, array('center', 'center'));
		add_image_size('page-header', 1020, 650, array('center', 'center'));
		// Register menus
		register_nav_menus(array(
			'primary' => __('Primary Menu', 'rasande'),
			'mobile' => __('Mobile Menu', 'rasande')
		));
	}

	add_action('after_setup_theme', 'rasande_theme_support');
}

// Register widget ares
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

// Enqueue styles
if (!function_exists('rasande_styles')) {

	function rasande_styles()
	{
		$theme_version = wp_get_theme()->get('Version');
		wp_enqueue_style('styles', get_stylesheet_uri(), array(), $theme_version);
		wp_enqueue_style('rasande-styles', get_template_directory_uri() . '/assets/css/style.css', array(), $theme_version);
	}
	add_action('wp_enqueue_scripts', 'rasande_styles');
}

// Enqueue scripts
if (!function_exists('rasande_scripts')) {

	function rasande_scripts()
	{

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

// Rewrite slug to swedish
add_action('init', function () {
	$GLOBALS['wp_rewrite']->pagination_base = 'sida';
});

// Include /inc files
$rasande_includes = array(
	'actions',
	'filters',
	'theme-functions',
	'acf',
	'walkers',
);

foreach ($rasande_includes as $file) {
	$filepath = locate_template('inc/' . $file . '.php');
	if (!$filepath) {
		trigger_error(sprintf('Error locating /inc%s for inclusion', $file), E_USER_ERROR);
	}
	require_once $filepath;
}
