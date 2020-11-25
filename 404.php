<?php

/**
 * The 404 template file
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>


<!-- Site content -->
<main class="site-main">

        
            <div class="page-404">
            <div class="container">
                <h1>404</h1>
                <p><?php _e("Sorry, we can't find the page you were looking for.","rasande") ?></p>
            </div>
        </div>

    </main>

<?php get_footer(); ?>
