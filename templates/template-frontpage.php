<?php

/**
 * 
 * Template name: Frontpage
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>

<!-- Site content -->
<main class="site-main">

    <?php if (have_posts()) :
        while (have_posts()) : the_post(); ?>

            <!-- Page header -->
            <?php get_template_part('template-parts/hero'); ?>

            <!-- Page content -->
            <div class="block-content">
                <?php the_content(); ?>
            </div>

        <?php endwhile; ?>
    <?php endif; ?>

</main>

<?php get_footer(); ?>
