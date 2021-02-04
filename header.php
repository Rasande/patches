<?php

/**
 * The template for displaying the header
 *
 */

defined('ABSPATH') || exit; ?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
	<?php wp_head(); ?>
</head>

<body itemscope itemtype="http://schema.org/WebPage" <?php body_class(); ?>>
	<?php do_action('wp_body_open'); ?>

	<!-- Site header -->
	<header class="site-header is-fixed">
		<div class="site-header__inner container-fluid">

			<!-- Site header brand -->
			<?php get_template_part('template-parts/brand'); ?>

			<!-- Desktop navigation -->
			<?php get_template_part('template-parts/navigation', 'desktop'); ?>

			<!-- Site header controls -->
			<?php get_template_part('template-parts/controls'); ?>

		</div>

		<!-- Site header mobile navigation -->
		<?php get_template_part('template-parts/navigation', 'mobile'); ?>

	</header>
