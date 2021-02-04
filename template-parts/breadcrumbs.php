<?php

/**
 * Breadcrumbs
 * 
 * From either Yoast or SEOPress
 * 
 */

defined('ABSPATH') || exit; ?>

<?php
if (function_exists('yoast_breadcrumb')) {
    yoast_breadcrumb('<p id="breadcrumbs">', '</p>');
} elseif (function_exists("seopress_display_breadcrumbs")) {
    seopress_display_breadcrumbs();
}
?>
