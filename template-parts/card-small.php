<?php

/**
 * Card
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;
?>
<article id="post-<?php the_ID(); ?>" <?php post_class('entry card the-card'); ?>>
    <a href="<?php echo get_permalink();?>">
    <div class="card__thumbnail">
        <?php if (has_post_thumbnail()) :
            the_post_thumbnail('card-thumbnail');
        else : ?>
            <img src="<?php echo get_template_directory_uri() . '/assets/img/card-thumbnail-default.jpg' ?>">
        <?php endif; ?>
    </div>
    </a>
    <div class="card__content">
        <div class="card__content--title">
        <a href="<?php echo get_permalink();?>">
            <h2><?php the_title(); ?></h2>
        </a>
        </div>

        <!-- Post category -->
        <div class="card__content--category">
            <?php
            $primary_cat_meta = get_post_meta(get_the_ID(), '_seopress_robots_primary_cat', true);
            $primary_cat = get_category($primary_cat_meta);
            // Echo SEOpress primary cat or first cat in array.
            if (isset($primary_cat_meta) && $primary_cat_meta != '' && $primary_cat_meta != 'none') :
                echo $primary_cat->name;
            else :
                //echo get_the_category(get_the_ID())[0]->name;
            endif; ?>
        </div>
        <div class="wrapper">
            <!-- Post date -->
            <time class="card__content--date" datetime="<?php echo get_the_date('Y-m-d'); ?>" itemprop="datePublished"><?php echo get_the_date('j M') ?></time>
            <!-- Post reading time -->
            <?php if (rasande_reading_time(get_the_ID()) > 0) : ?>
                <span class="card__content--read">Lästid: <?php echo rasande_reading_time(get_the_ID()) ?></span>
            <?php endif; ?>
        </div>
    </div>
</article>