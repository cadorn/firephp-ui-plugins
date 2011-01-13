<?php

$plugin = FirePHP::to("plugin")->plugin('ExampleExtJS');
$plugin->register(array(
    'class' => 'FirePHP_UIPlugins_ExampleExtJS_Plugin',
    'file' => dirname(dirname(dirname(__FILE__))) . '/lib/Plugin.php',
    'forceReload' => true
));
$plugin->show();
