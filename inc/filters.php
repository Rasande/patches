<?php

/**
 * Custom Filter hooks
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

// Cleanup archive titles
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

// Change attributes of custom logo
if (!function_exists('rasande_change_logo_class')) {
    function rasande_change_logo_class($html)
    {
        $html = str_replace('class="custom-logo-link"', 'class="site-header__brand"', $html);
        $html = str_replace('alt=""', 'title="Home" alt="logo"', $html);

        return $html;
    }
    add_filter('get_custom_logo', 'rasande_change_logo_class');
}

// Remove hentry from post_class
if (!function_exists('rasande_remove_hentry_class')) {
    function rasande_remove_hentry_class($classes)
    {
        $classes = array_diff($classes, array('hentry'));
        return $classes;
    }
    add_filter('post_class', 'rasande_remove_hentry_class');
}

// Fix svg size attributes
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

// Pagination classes
if (!function_exists('rasande_pagination_attr')) {
    function rasande_pagination_attr()
    {
        return 'class="pagination__link"';
    }
    add_filter('next_posts_link_attributes', 'rasande_pagination_attr');
    add_filter('previous_posts_link_attributes', 'rasande_pagination_attr');
}
