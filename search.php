<?php

/**
 * The template for single posts and pages
 * 
 */

defined('ABSPATH') || exit; ?>

<?php get_header(); ?>

<!-- Site content -->
<main class="site-main">

    <!-- Page header -->
    <?php get_template_part('template-parts/page', 'header'); ?>

    <div class="container-wide">
        <div class="grid">

            <?php if (have_posts()) :
                while (have_posts()) : the_post(); ?>

                    <div class="col-12 col-sm-6 col-md-4">
                        <?php get_template_part('template-parts/card'); ?>
                    </div>

                <?php endwhile; ?>
            <?php endif; ?>

        </div>
    </div>

    <?php get_template_part('template-parts/pagination'); ?>

</main>

<?php get_footer(); ?>
