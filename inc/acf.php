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
}
