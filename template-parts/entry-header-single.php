<?php

/**
 * Entry header single
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;
?>

<header class="entry__header-single">
    <div class="container-wide">
        <div class="entry__header-single--thumbnail">
            <?php if (has_post_thumbnail()) :
                the_post_thumbnail('entry-header');
            else : ?>
                <img src="<?php echo get_template_directory_uri() . '/assets/img/entry-header-default.jpg' ?>">
            <?php endif; ?>
        </div>
        <!-- Entry title -->
        <?php if (is_archive() || is_home()) : ?>
            <h1 class="entry__header-single--title"><?php the_archive_title(); ?></h1>
        <?php else :

            // Check if has custom title, else use the_title();
            if (class_exists('ACF') && get_field('custom_title')) :
                $title = get_field('custom_title');
            elseif (!class_exists('ACF') || class_exists('ACF') && ! get_field('custom_title')):
                $title = get_the_title();
            endif; ?>

            <h1 class="entry__header-single--title"><?php echo $title ?></h1>
        <?php endif; ?>
        
        <?php if (has_excerpt()) : ?>
            <!-- Entry lead -->
            <div class="entry__header-single--lead">
                <?php the_excerpt(); ?>
            </div>
        <?php endif; ?>
    </div>
</header>
