<?php

/**
 * Entry header
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;
?>

<header class="entry-header">

    <?php if (is_singular('post')) : ?>
        <div class="post-meta fade-in">
            <span class="post-meta-date"><?php echo get_the_date('d/m Y') ?></span> - <span class="post-meta-category"><?php the_category('| '); ?></span>
        </div>
    <?php endif; ?>

    <!-- Entry title -->
    <?php if (is_archive() || is_home()) : ?>
        <h1 class="entry-header__title"><?php the_archive_title(); ?></h1>
    <?php else :

        // Check if has custom title, else use the_title();
        if (get_field('custom_title')) :
            $title = get_field('custom_title');
        else :
            $title = get_the_title();
        endif; ?>

        <h1 class="entry-header__title"><?php echo $title ?></h1>
    <?php endif; ?>

    <!-- Entry lead -->
    <div class="entry-header__lead">
        <?php $lead = get_field('custom_lead'); ?>
        <?php echo $lead ?>
    </div>

</header>
