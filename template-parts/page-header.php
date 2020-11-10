<?php

/**
 * Entry header
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;
?>

<header class="page-header">
    <div class="container-wide">

        <!-- Entry title -->
        <?php if (is_archive() ) : ?>
            <h1 class="page-header--title"><?php the_archive_title(); ?></h1>
        <?php elseif (is_home() && is_front_page())  : ?>
            <h1 class="page-header--title"><?php echo get_bloginfo('name'); ?></h1>
        <?php elseif (is_search())  : ?>
            <h1 class="page-header--title"><?php _e( 'Search Results For', 'rasande' ); ?>: "<?php the_search_query(); ?>"</h1>
        <?php else : ?>
            <h1 class="page-header--title"><?php echo get_the_title(); ?></h1>
        <?php endif; ?>
        
        <?php if (has_excerpt()) : ?>
            <!-- Entry lead -->
            <div class="page-header--lead">
                <?php the_excerpt(); ?>
            </div>
        <?php endif; ?>
    </div>
</header>
