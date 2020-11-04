<?php

/**
 * The main template file
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>


<!-- Site content -->
<div class="site__content">
    <main class="main">
    <?php get_template_part('template-parts/page', 'header'); ?>
    <div class="container-wide">

        <!-- Entries -->
        
            <div class="columns row--animate">

                <?php if (have_posts()) :
                    while (have_posts()) : the_post(); ?>

<div class="col-12 col-sm-6 col-md-4 <?php echo $odd_or_even; $odd_or_even = ('odd' == $odd_or_even) ? 'even' : 'odd'; ?>">
                            <?php get_template_part('template-parts/card-small'); ?>
                        </div>
                    <?php endwhile; ?>
                <?php endif; ?>

            </div>
        </div>

          <!-- Pagination here -->

    </main>
</div>

<?php get_footer(); ?>