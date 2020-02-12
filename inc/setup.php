<?php
/**
 * Theme basic setup
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'rasande_theme_support' )) {
    function rasande_theme_support() {

        // Setup for translation
        load_theme_textdomain( 'rasande', get_template_directory() . '/lang' );

        // Add Support for WP Controlled Title Tag
        add_theme_support( 'title-tag' );

        // Add WP Thumbnail Support
        add_theme_support( 'post-thumbnails' );

        // Add support for responsive embedded content
        add_theme_support( 'responsive-embeds' );

        // Add RSS Support
	    add_theme_support( 'automatic-feed-links' );
        
        // Add HTML5 Support
        add_theme_support( 'html5', 
            array( 
                'comment-list', 
                'comment-form', 
                'search-form',
                'gallery',
                'caption',
                'script',
                'style'
            ) 
        );
    
    }

    add_action( 'after_setup_theme', 'rasande_theme_support');
}
