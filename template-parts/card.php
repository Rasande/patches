<?php

/**
 * Card
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;
?>
<article id="post-<?php the_ID(); ?>" <?php post_class('entry card the-card'); ?>>
    <a href="<?php echo get_permalink(); ?>">
        <div class="card__thumbnail">
            <?php if (has_post_thumbnail()) :
                the_post_thumbnail('card-thumbnail');
            else : ?>
                <img src="<?php echo get_template_directory_uri() . '/assets/img/card-thumbnail-default.jpg' ?>">
            <?php endif; ?>
        </div>
    </a>
    <div class="card__content">
        <!-- Post category -->
        <div class="card__content--category">
            <?php $categories = get_the_category();
            if (!empty($categories)) {
                echo '<a href="' . esc_url(get_category_link($categories[0]->term_id)) . '">' . esc_html($categories[0]->name) . '</a>';
            } ?>
        </div>
        <div class="card__content--title">
        <h2><a href="<?php echo get_permalink(); ?>">
                <?php the_title(); ?>
            </a></h2>
        </div>



    </div>
</article>