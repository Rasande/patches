<?php

/**
 * Template file for single posts
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

                        <!-- Entry header -->
                        <?php get_template_part('parts/entry', 'header'); ?>

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
