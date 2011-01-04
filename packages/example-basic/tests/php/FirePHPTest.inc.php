<?php

$plugin = FirePHP::to("plugin")->plugin('ExampleBasic');
$plugin->register(array(
    'class' => 'FirePHP_UIPlugins_ExampleBasic_Plugin',
    'file' => dirname(dirname(dirname(__FILE__))) . '/lib/Plugin.php',
    'forceReload' => true
));
$plugin->show();
