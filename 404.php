<?php

/**
 * The 404 template file
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>


<!-- Site content -->
<div class="site__content">
    <main class="main">

        <div class="container">
            <div class="columns row--animate">
            <h2>404</h2>
            <p><?php _e("Sorry, we can't find the page you were looking for.","rasande") ?></p>
                <?php if (have_posts()) :
                    while (have_posts()) : the_post(); ?>

                            <h1>404</h1>
                           

                    <?php endwhile; ?>
                <?php endif; ?>

            </div>
        </div>

    </main>
</div>

<?php get_footer(); ?>