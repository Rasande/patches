<?php
/**
 * The template for displaying the header
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

?>

<!DOCTYPE html>
    <html <?php language_attributes(); ?>>
        <head>
            <meta charset="<?php bloginfo( 'charset' ); ?>">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <link rel="profile" href="http://gmpg.org/xfn/11">
            <?php wp_head(); ?>
        </head>
        <body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
		<?php do_action( 'wp_body_open' ); ?>

        <header class="site-header">
            <nav class="bg-primary">
                <div class="container-fluid">
                    <?php get_template_part( 'parts/navbar', 'logo' ); ?>

                    <?php get_template_part( 'parts/navbar', 'toggle' ); ?>

                    <?php wp_nav_menu(
                        array(
                            'theme_location'  => 'primary',
                            'container_class' => 'navigation',
                            'menu_class'      => 'nav-menu',
                            'items_wrap'      => '<ul class="%2$s">%3$s</ul>' ,
                            'fallback_cb'     => '',
                            'walker'          => new Rasande_WP_Navwalker(),
                        )
                    ); ?>
                </div>
            </nav>
        </header>
