<?php

/**
 * The template for displaying the header
 *
 */
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
	<?php do_action('wp_body_open'); ?>
	<div id="site">
		<div <?php body_class( 'site'); ?>>
	<!-- Site header -->
	<header class="site__header">
	
		<!-- Navbar -->
		<nav class="navbar">

			<!-- Navbar brand -->
			<?php get_template_part('parts/navbar', 'brand'); ?>

			<!-- Navbar menu toggler -->
			<button class="navbar-toggler hamburger hamburger--squeeze" type="button" aria-label="<?php esc_attr_e( 'Toggle navigation', 'rasande' ); ?>">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>	
			</button>

			<!-- Navbar navigation -->
			<?php wp_nav_menu(array(
				'theme_location' => 'primary',
				'container' => '',
				'menu_class' => 'navbar-nav',
				'depth' => 0,
				'walker' => new Rasande_WP_Navwalker(),
				'fallback_cb' => '',
				'depth' => '3'
			)); ?>

		</nav>
	
	</header>
