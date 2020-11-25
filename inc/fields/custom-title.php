<?php

/**
 * ACF Custom title field
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

if (function_exists('acf_add_local_field_group')) {

	acf_add_local_field_group(array(
		'key' => 'group_5ec0e6b883e51',
		'title' => 'Sidinställningar',
		'fields' => array(
			array(
				'key' => 'field_5ec0e70598d26',
				'label' => 'Anpassad Titel',
				'name' => 'custom_title',
				'type' => 'text',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'maxlength' => '',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'post',
				),
			),
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'page',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'acf_after_title',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
	));
}
