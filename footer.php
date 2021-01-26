<?php

/**
 * The template for displaying the footer. 
 *
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;
?>

<!-- Site footer -->
<footer class="site-footer">

	<div class="site-footer__top">

	</div>

	<div class="site-footer__center">
		<div class="container-lg">
			<div class="columns">

				<!-- Footer Column 1 -->
				<div class="col-12 col-sm-6 col-md-4">
					<?php dynamic_sidebar('footer-1'); ?>
				</div>

				<!-- Footer Column 2 -->
				<div class="col-12 col-sm-6 col-md-4">
					<?php dynamic_sidebar('footer-2'); ?>
				</div>

				<!-- Footer Column 3 -->
				<div class="col-12 col-sm-6 col-md-4">
					<?php dynamic_sidebar('footer-3'); ?>
				</div>

			</div>
		</div>
	</div>

	<div class="site-footer__bottom">

		<!-- Copyright Information -->
		<div class="copyright">
			<p>&copy; <?php echo bloginfo('name'); ?> <?php echo date("Y"); ?></p>
		</div>

	</div>

</footer>

<?php wp_footer(); ?>

</body>

</html>
