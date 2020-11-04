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

<body itemscope itemtype="http://schema.org/WebPage">
	<?php do_action('wp_body_open'); ?>
	<div id="root">
		<div <?php body_class('site'); ?>>
			<!-- Site header -->
			<header class="site__header fixed">
			<div class="site-header__wrapper container-wide">

						<!-- Navbar brand -->
						<?php if (!has_custom_logo()) : ?>

<?php if (is_front_page()) : ?>

	<h1 class="navbar__brand"><a rel="home" href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" itemprop="url"><?php bloginfo('name'); ?></a></h1>

<?php else : ?>

	<a class="navbar__brand" rel="home" href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" itemprop="url"><?php bloginfo('name'); ?></a>

<?php endif; ?>

<?php else :
the_custom_logo();
endif; ?>
				<!-- Navbar -->
				<nav class="navbar">
						<!-- Navbar menu toggler -->
		
					<!-- Navbar navigation -->
					<?php wp_nav_menu(array(
					'theme_location' => 'primary',
					'container' => '',
					'menu_class' => 'navbar__nav',
					'depth' => 0,
					'walker' => new Rasande_WP_Navwalker(),
					'fallback_cb' => '',
					'depth' => '3'
					)); 
					?>
					<!-- Navbar search toggler -->
				
				<div class="navbar-overlay"></div>			
				</nav>
				<button class="search-modal__toggle"><i class="fas fa-search"></i></button>
					<button class="navbar__toggler hamburger hamburger--squeeze" type="button" aria-label="<?php esc_attr_e('Toggle navigation', 'rasande'); ?>">
							<span class="hamburger-box">
								<span class="hamburger-inner"></span>
							</span>
						</button>

				</div>


				
				<div class="search-modal">
					<div class="search-modal__form">
					<i class="fas fa-window-close search-modal__close" aria-hidden="true"></i>
						<div class="container-wide">
							<form action="<?php echo home_url( '/' ); ?>" method="get" role="search">
							<input type="search" class="search-modal__input" placeholder="What are you looking for?" value="<?php the_search_query(); ?>" name="s">
							<!-- <input type="submit" class="search-submit" value="Sök"> -->
							</form>
						</div>
					</div>

					<div class="search-modal__overlay">

					</div>
					
				</div>

			</header>
