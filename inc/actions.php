<?php

/**
 * Custom Action hooks
 * 
 */

defined('ABSPATH') || exit;

// Clean up Wordpress head
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

// Archive post order
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

// Admin CSS
if (!function_exists('rasande_admin_bar_css')) {
    function rasande_admin_bar_css()
    {
        if (is_admin_bar_showing()) : ?>
            <style>
                #wpadminbar {
                    position: fixed;
                }

                .site-header.is-fixed {
                    margin-top: 46px;
                }

                @media screen and (min-width: 783px) {
                    .site-header.is-fixed {
                        margin-top: 32px;
                    }
                }
            </style>
<?php endif;
    }
    add_action('wp_head', 'rasande_admin_bar_css');
}
