<?php

/**
 * Hero section for frontpage template.
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;
?>

<header class="hero">
        <div class="hero__inner">
            <?php the_title( '<h1 class="hero__title">', '</h1>'); ?>
        </div>
</header>
