<?php

/**
 * Entry header
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;
?>

<header class="entry__header">
    <div class="container-wide">
        <?php if (is_singular('post')) : ?>
            <div class="post-meta fade-in">
                <span class="post-meta-date"><?php echo get_the_date('d/m Y') ?></span> - <span class="post-meta-category"><?php the_category('| '); ?></span>
            </div>
        <?php endif; ?>

        <!-- Entry title -->
        <?php if (is_archive() || is_home()) : ?>
            <h1 class="entry__header--title"><?php the_archive_title(); ?></h1>
        <?php else :

            // Check if has custom title, else use the_title();
            if (class_exists('ACF') && get_field('custom_title')) :
                $title = get_field('custom_title');
            elseif (!class_exists('ACF') || class_exists('ACF') && ! get_field('custom_title')):
                $title = get_the_title();
            endif; ?>

            <h1 class="entry__header--title"><?php echo $title ?></h1>
        <?php endif; ?>
        
        <?php if (has_excerpt()) : ?>
            <!-- Entry lead -->
            <div class="entry__header--lead">
                <?php the_excerpt(); ?>
            </div>
        <?php endif; ?>
    </div>
</header>

<?php if ( function_exists('yoast_breadcrumb') ) : ?>
    
<div class="breadcrumbs">
    <div class="container-wide">

        <?php yoast_breadcrumb( '<p id="breadcrumbs">','</p>' ); ?>

    </div>
</div>

<?php elseif (function_exists("seopress_display_breadcrumbs")) :?>

<div clasS="breadcrumbs">
    <div class="container-wide">

        <?php seopress_display_breadcrumbs(); ?>

    </div>
</div>

<?php endif; ?>
