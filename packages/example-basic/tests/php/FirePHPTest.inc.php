<?php

$plugin = FirePHP::to("plugin")->plugin('BasicExample');
$plugin->register(array(
    'container' => 'page-top',
    'class' => 'FirePHP_UIPlugins_ExampleBasic_Plugin',
    'file' => dirname(dirname(dirname(__FILE__))) . '/lib/Plugin.php',
    'forceReload' => true
));
$plugin->show();
