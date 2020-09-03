<?php

/**
 * The template for displaying the footer. 
 *
 */
?>

<!-- Site footer -->
<footer class="site__footer">

	<!-- Footer Information -->
	<div class="footer-info">
		<div class="container">
			<div class="row">

				<!-- Footer Column 1 -->
				<div class="col-12 col-md-4">
					<?php dynamic_sidebar( 'footer-1' ); ?>
				</div>

				<!-- Footer Column 2 -->
				<div class="col-12 col-md-4">
					<?php dynamic_sidebar( 'footer-2' ); ?>
				</div>

				<!-- Footer Column 3 -->
				<div class="col-12 col-md-4">
					<?php dynamic_sidebar( 'footer-3' ); ?>
				</div>

				<!-- Copyright Information -->
				<div class="col-12 text-center">
					<div class="copyright">
						<span class="copyright-info">&copy; <?php echo bloginfo( 'name' ); ?> <?php echo date("Y"); ?></span>
					</div>
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
