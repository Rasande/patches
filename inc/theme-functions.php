<?php

/**
 * Custom theme functions
 * 
 */

defined('ABSPATH') || exit;

// Read time for post
if (!function_exists('rasande_read_time')) {
    function rasande_read_time($postID)
    {
        $content = get_post_field('post_content', $postID);
        $word_count = str_word_count(strip_tags($content));
        $readingtime = ceil($word_count / 250);
        $timer = " min";
        $totalreadingtime = $readingtime . $timer;
        return $totalreadingtime;
    }
}
