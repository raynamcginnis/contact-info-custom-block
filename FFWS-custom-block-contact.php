<?php
/** 
 * Plugin Name: FFWS Custom Block Contact Information
 * Author: Firefly Web Studio
 * Author URI: https://www.fireflywebstudio.com
 * Description: FFWS Custom Block for Contact Information
 */

 /** registers function in js */
 function ffws_custom_block_script_register() {
        wp_enqueue_script('ffws-custom-block', plugins_url('ffws-block.js', __FILE__), array('wp-blocks', 'wp-i18n', 'wp-editor'), true, false
        );
 }
 add_action('enqueue_block_editor_assets', 'ffws_custom_block_script_register' );

 function custom_block_styles() {
 
    // enqueue style
    wp_enqueue_style( 'ffws-block-styles', plugin_dir_url(__FILE__). 'ffws-block.css' );                       
   }
   
   add_action( 'wp_enqueue_scripts', 'custom_block_styles');

?>