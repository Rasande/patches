<?php

/**
 * Custom theme functions
 * 
 */

defined('ABSPATH') || exit;

// Read time for post
if (!function_exists('rasande_read_time')) {
    function rasande_read_time()
    {
        $postID = get_the_ID();
        $content = get_post_field('post_content', $postID);
        $word_count = str_word_count(strip_tags($content));
        $readingtime = ceil($word_count / 250);
        $timer = " min";
        $totalreadingtime = $readingtime . $timer;

        return $totalreadingtime;
    }
}

if (!function_exists('rasande_time_diff')) {
    function rasande_time_diff() {
        $posted = get_post_time();
        $date = $posted >= strtotime('-2 weeks') ? human_time_diff($posted) . ' ' . __('ago', 'rasande') :  get_the_date(); ;

        return $date;
    }
}
