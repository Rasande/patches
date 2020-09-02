<?php

/**
 * Template for 404
 *
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>

<!-- Site content -->
<div class="site__content">
    <main class="main">

        <!-- 404 -->
        <div class="container height-100vh">
            <div class="row align-center justify-center height-80">
                <div>
                    <h1 class="text-biggest text-center width-100 bold">
                        <span class="four-zero-four">4</span>
                        <span class="four-zero-four">0</span>
                        <span class="four-zero-four">4</span>
                    </h1>
                    <p class="text-center"><?php echo __('Something went wrong, the page you are looking for does not exist', 'rasande') ?></p>
                </div>
            </div>
        </div>

    </main>
</div>

<?php get_footer(); ?>
