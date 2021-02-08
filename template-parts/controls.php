<?php

/**
 * Controls
 * 
 */

defined('ABSPATH') || exit; ?>

<div class="controls">
    <div class="site-header__search">

        <div class="container-wide">
            <form action="<?php echo home_url('/'); ?>" method="get" role="search" class="search__form">
                <input type="search" class="search__input" placeholder="<?php _e('Search...', 'rasande') ?>" value="<?php the_search_query(); ?>" name="s">
            </form>
        </div>

    </div>
    <button class="search__toggle btn-clean" aria-expanded="false"><i class="icon-search"></i></button>

    <!-- Hamburger -->
    <button toggle-menu="mobile" class="navigation__toggle hamburger hamburger--squeeze" type="button" aria-label="<?php esc_attr_e('Toggle navigation', 'rasande'); ?>" aria-expanded="false">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>

</div>
