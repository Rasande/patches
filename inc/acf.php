<?php
/**
 * ACF settings and blocks
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

if (class_exists('ACF')) {

	// Register settings page
	acf_add_options_page(array(
		'page_title' 	=> __('Theme settings', 'rasande'),
		'menu_title'	=> __('Theme settings', 'rasande'),
		'menu_slug' 	=> 'global-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false,
		'icon_url'		=> 'dashicons-palmtree'
	));

	// Fields
	$acf_includes = array(
		'/custom-title.php'
	);

	foreach ($acf_includes as $file) {
		$filepath = locate_template('inc/fields' . $file);

		if (!$filepath) {
			trigger_error(sprintf('Error locating /fields%s for inclusion', $file), E_USER_ERROR);
		}

		require_once $filepath;
	}

	function register_acf_block_types() {

		// register a ingress block.
		acf_register_block_type(array(
		'name'              => 'social_icons',
		'title'             => __('Social Icons'),
		'description'       => __('Display social media icons.'),
		'render_template'   => '/inc/blocks/social-media-block.php',
		'category'          => 'customblocks',
		'icon'              => 'admin-comments',
		'keywords'          => array( 'socialmedia', 'social' ),
		));
	}
	
	// Check if function exists and hook into setup.
	if( function_exists('acf_register_block_type') ) {
		add_action('acf/init', 'register_acf_block_types');
	}

}
