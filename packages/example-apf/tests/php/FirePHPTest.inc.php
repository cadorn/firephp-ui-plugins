<?php

$plugin = FirePHP::to("plugin")->plugin('ExampleApf');
$plugin->register(array(
    'class' => 'FirePHP_UIPlugins_ExampleApf_Plugin',
    'file' => dirname(dirname(dirname(__FILE__))) . '/lib/Plugin.php',
    'forceReload' => true
));
$plugin->show();
