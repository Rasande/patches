<?php

/**
 * The template for single posts and pages
 * 
 */

defined('ABSPATH') || exit; ?>

<?php get_header(); ?>

<!-- Site content -->
<main class="site-main">

    <?php if (have_posts()) :
        while (have_posts()) : the_post(); ?>

            <article id="post-<?php the_ID(); ?>" <?php post_class('entry'); ?>>

                <!-- Page header -->
                <?php get_template_part('template-parts/page', 'header'); ?>

                <!-- Page content -->
                <div class="block-content">
                    <?php the_content(); ?>
                </div>

            </article>

        <?php endwhile; ?>
    <?php endif; ?>

</main>

<?php get_footer(); ?>
