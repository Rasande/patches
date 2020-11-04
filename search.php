<?php

/**
 * The template for single posts and pages
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
                <article id="post-<?php the_ID(); ?>" <?php post_class( 'entry' ); ?>>

                        <!-- Entry header -->
                        <?php get_template_part('template-parts/entry', 'header-single'); ?>

                        <!-- Entry content -->
                        <div class="entry__content">
                                <?php the_content(); ?>
                        </div>

                </article>

            <?php endwhile; ?>
        <?php endif; ?>

    </main>
</div>

<?php get_footer(); ?>
