<?php

/**
 * The main template file
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>

<!-- Site content -->
<main class="site-main">

    <!-- Page header -->
    <?php get_template_part('template-parts/page', 'header'); ?>

    <div class="container-wide">

        <?php if (have_posts()) :
            while (have_posts()) : the_post(); ?>

                <div class="block-content">
                    <?php the_content(); ?>
                </div>

            <?php endwhile; ?>
        <?php endif; ?>


    </div>
</main>

<?php get_footer(); ?>
