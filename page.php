<?php

/**
 * Template file for pages
 *
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>

<!-- Site content -->
<div class="site__content">
    <main class="main">

        <?php if (have_posts()) :
            while (have_posts()) : the_post(); ?>

                <!-- Entry -->
                <article class="entry">
                   
                        <?php if (is_front_page()) : ?>
                            <!-- Hero -->
                            <?php get_template_part('parts/hero'); ?>
                        <?php else : ?>
                            <!-- Entry header -->
                            <?php get_template_part('parts/entry', 'header'); ?>
                        <?php endif; ?>
                        <!-- Entry content -->
                        <div class="entry-content">
                            <div class="content">
                                <?php the_content(); ?>
                            </div>
                        </div>

                </article>

            <?php endwhile; ?>
        <?php endif; ?>

    </main>
</div>

<?php get_footer(); ?>
