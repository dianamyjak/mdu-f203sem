<?php
/**
* Plugin Name: Scroll To Top Button Plugin
* Plugin URI: https://www.cederdorff.com/
* Description: This is a plugin adding a scroll to the top bottom to your website.
* Version: 1.0.0
* Author: Rasmus Cederdorff
* Author URI: http://cederdorff.com/
**/

function wp_js_plugin() {
	wp_enqueue_script('wp-plugin-script', plugin_dir_url( __FILE__ ). '/script.js', array(), time());
    wp_enqueue_style( 'wp-plugin-css',  plugin_dir_url( __FILE__ ) . '/style.css', array(), time());    
}

/**
 * Trigger the block registration on init.
 */
add_action( 'init', 'wp_js_plugin' );