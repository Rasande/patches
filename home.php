<?php

/**
 * The blog template file
 *
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>

<!-- Site content -->
<div class="site__content">
    <main class="main">
        <section class="blog">

            <!-- Entry header -->
            <?php get_template_part('parts/entry', 'header'); ?>

            <div class="container">
                <div class="row">

                    <?php if (have_posts()) :
                        while (have_posts()) : the_post(); ?>

                            <!-- Blog item -->
                            <div class="col-12 col-sm-6 col-md-4">
                                <article class="blog-item">
                                    <a class="blog-item-link" href="<?php the_permalink(); ?>">

                                        <?php if (has_post_thumbnail()) :
                                            the_post_thumbnail('blog-item');
                                        else : ?>

                                            <img class="blog-item-thumbnail" src="<?php bloginfo('template_directory'); ?>/assets/img/default-blog.jpg" alt="<?php the_title(); ?>" />

                                        <?php endif; ?>

                                        <div class="blog-item-info">
                                            <h2 class="bold"><?php the_title(); ?></h2>
                                            <span class="blog-date"><?php echo get_the_date('d/m Y') ?></span>
                                        </div>

                                    </a>
                                </article>
                            </div>
                        <?php endwhile; ?>
                    <?php endif; ?>
                </div>

                <!-- Pagination -->
                <nav class="pagination">
                    <span class="pagination-prev"><?php previous_posts_link(); ?></span>
                    <span class="pagination-next"><?php next_posts_link(); ?></span>
                </nav>

            </div>
        </section>
    </main>
</div>

<?php get_footer(); ?>
