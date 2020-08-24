<?php

/**
 * Template name: Start
 *
 *  A template for a custom frontpage
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>

<!-- Site content -->
<div class="site-content">
    <main class="main">

        <?php if (have_posts()) :
            while (have_posts()) : the_post(); ?>

                <!-- Entry -->
                <article class="entry">

                    <!-- Hero -->
                    <?php get_template_part('parts/hero'); ?>

                    <!-- Entry -->
                    

                    <div class="entry-content">
                        <div class="container">
                            <?php the_content(); ?>
                        </div>
                    </div>

                </article>

            <?php endwhile; ?>
        <?php endif; ?>

    </main>
</div>

<?php get_footer(); ?>
