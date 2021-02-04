<?php

/**
 * Brand
 * 
 */

defined('ABSPATH') || exit; ?>

<?php if (!has_custom_logo()) : ?>

    <a class="brand" rel="home" href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" itemprop="url"><?php bloginfo('name'); ?></a>

<?php else :
    the_custom_logo();
endif; ?>
