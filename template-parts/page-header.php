<?php

/**
 * Entry header
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

$customTitle = get_field('page_title');
$customLead = get_field('page_lead');
$leadChoice = get_field('page_lead-choice')

?>

<header class="page-header">
    <div class="container-wide">

        <?php if (is_archive()) : ?>
            <h1 class="page-header__title"><?php the_archive_title(); ?></h1>
        <?php elseif (!is_front_page() && is_home()) : ?>
            <h1 class="page-header__title"><?php single_post_title(); ?></h1>

        <?php elseif (is_search()) : ?>
            <h1 class="page-header__title"><?php _e('Search Results For', 'rasande'); ?>: "<?php the_search_query(); ?>"</h1>
        <?php else : ?>
            <?php if ($customTitle) : ?>
                <h1 class="page-header__title"><?php echo $customTitle; ?></h1>
            <?php else : ?>
                <h1 class="page-header__title"><?php echo get_the_title(); ?></h1>
            <?php endif; ?>
            <div class="page-header__lead">
                <?php if ($leadChoice == 'excerpt' && has_excerpt()) :
                    the_excerpt();
                elseif ($leadChoice == 'lead' && $customLead) :
                    echo $customLead;
                endif; ?>
            </div>
        <?php endif; ?>

    </div>
</header>
