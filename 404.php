<?php

/**
 * The 404 template file
 * 
 */

defined('ABSPATH') || exit; ?>

<?php get_header(); ?>

<!-- Site content -->
<main class="site-main">


    <div class="page-404">
        <div class="container">
            <h1>404</h1>
            <p><?php _e("The page cannot be found", "rasande") ?></p>
            <p><a href="<?php echo get_home_url(); ?>" class="btn btn-primary"><?php _e('Back to homepage', 'rasande') ?></a></p>
        </div>
    </div>

</main>

<?php get_footer(); ?>
