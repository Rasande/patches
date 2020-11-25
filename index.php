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
        <div class="columns">

            <?php if (have_posts()) :
                while (have_posts()) : the_post(); ?>

                    <div class="col-12 col-sm-6 col-md-4">
                        <?php get_template_part('template-parts/card'); ?>
                    </div>

                <?php endwhile; ?>
            <?php endif; ?>

        </div>

        <div class="pagination">
            <div class="pagination__prev">
                <?php echo get_previous_posts_link(__('Newer posts', 'rasande')) ?>
            </div>
            <div class="pagination__next">
                <?php echo get_next_posts_link(__('Older posts', 'rasande')) ?>
            </div>
        </div>
        
    </div>
</main>

<?php get_footer(); ?>
