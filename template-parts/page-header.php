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

        <!-- Entry title -->
        <?php if (is_archive() || is_home()) : ?>
            <h1 class="entry__header--title"><?php the_archive_title(); ?></h1>
        <?php else : ?>
            <h1 class="entry__header--title"><?php echo get_the_title(); ?></h1>
        <?php endif; ?>
        
        <?php if (has_excerpt()) : ?>
            <!-- Entry lead -->
            <div class="entry__header--lead">
                <?php the_excerpt(); ?>
            </div>
        <?php endif; ?>
    </div>
</header>
