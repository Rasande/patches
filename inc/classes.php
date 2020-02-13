<?php
/**
 * Change WordPress classes to boostraps
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

add_filter( 'get_custom_logo', 'rasande_change_logo_class' );

if ( ! function_exists( 'rasande_change_logo_class' ) ) {

	function rasande_change_logo_class( $html ) {

		$html = str_replace( 'class="custom-logo"', 'class="img-fluid"', $html );
		$html = str_replace( 'class="custom-logo-link"', 'class="navbar-brand custom-logo-link"', $html );
		$html = str_replace( 'alt=""', 'title="Home" alt="logo"', $html );

		return $html;
	}
}
