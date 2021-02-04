<?php

/**
 * Desktop navigation
 * 
 */

defined('ABSPATH') || exit; ?>


<nav role="navigation" class="navigation navigation--desktop">
    <?php wp_nav_menu(array(
        'theme_location' => 'desktop',
        'container' => '',
        'menu_class' => 'nav__menu',
        'menu_id' => 'menu-primary',
        'walker' => new Rasande_WP_Navwalker(),
        'fallback_cb' => '',
        'depth' => '3'
    ));
    ?>
</nav>
