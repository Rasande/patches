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

<body itemscope itemtype="http://schema.org/WebPage" <?php body_class(); ?>>
	<?php do_action('wp_body_open'); ?>
	<!-- Site header -->
	<header class="site-header fixed">
		<div class="site-header__wrapper container-lg">

			<!-- Site header brand -->
			<?php if (!has_custom_logo()) : ?>
				
					<a class="site-header__brand" rel="home" href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" itemprop="url"><?php bloginfo('name'); ?></a>

			<?php else :
				the_custom_logo();
			endif; ?>

			<!-- Site header navigation -->
			<nav class="site-header__navigation">
				<?php wp_nav_menu(array(
					'theme_location' => 'primary',
					'container' => '',
					'menu_class' => 'navigation__menu',
					'menu_id' => 'menu',
					'depth' => 0,
					'walker' => new Rasande_WP_Navwalker(),
					'fallback_cb' => '',
					'depth' => '3'
				));
				?>
			</nav>

			<!-- Site header controls -->
			<div class="site-header__controls">
				<button class="search__toggle btn-clean" aria-expanded="false"><i class="fas fa-search"></i></button>

				<button class="navigation__toggle hamburger hamburger--squeeze" type="button" aria-label="<?php esc_attr_e('Toggle navigation', 'rasande'); ?>" aria-expanded="false">
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</button>
			</div>

		</div>

		<!-- Site header search -->
		<div class="site-header__search">
			<div class="container-wide">
				<form action="<?php echo home_url('/'); ?>" method="get" role="search" class="search__form">
					<input type="search" class="search__input" placeholder="What are you looking for?" value="<?php the_search_query(); ?>" name="s">
				</form>
			</div>

		</div>
	</header>