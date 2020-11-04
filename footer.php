<?php

/**
 * The template for displaying the footer. 
 *
 */
?>

<!-- Site footer -->
<footer class="site__footer">
		<div class="container-wide">
			<div class="columns">

				<!-- Footer Column 1 -->
				<div class="col-12 col-sm-6 col-md-4">
					<?php dynamic_sidebar( 'footer-1' ); ?>
				</div>

				<!-- Footer Column 2 -->
				<div class="col-12 col-sm-6 col-md-4">
					<?php dynamic_sidebar( 'footer-2' ); ?>
				</div>

				<!-- Footer Column 3 -->
				<div class="col-12 col-sm-6 col-md-4">
					<?php dynamic_sidebar( 'footer-3' ); ?>
				</div>

				<!-- Copyright Information -->
				<div class="col-12 text-center">
					<div class="copyright">
						<p>&copy; <?php echo bloginfo( 'name' ); ?> <?php echo date("Y"); ?></p>
					</div>
				</div>

			</div>
		</div>

</footer>
</div>
</div>
<?php wp_footer(); ?>

</body>

</html>
