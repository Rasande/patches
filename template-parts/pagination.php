<?php

/**
 * Pagination
 * 
 */

defined('ABSPATH') || exit; ?>

<div class="pagination">
    <div class="pagination__prev">
        <?php echo get_previous_posts_link(__('Newer posts', 'rasande')) ?>
    </div>
    <div class="pagination__next">
        <?php echo get_next_posts_link(__('Older posts', 'rasande')) ?>
    </div>
</div>
