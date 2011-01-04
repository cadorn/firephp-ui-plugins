<?php

$plugin = FirePHP::to("plugin")->plugin('ExampleDojo');
$plugin->register(array(
    'class' => 'FirePHP_UIPlugins_ExampleDojo_Plugin',
    'file' => dirname(dirname(dirname(__FILE__))) . '/lib/Plugin.php',
    'forceReload' => true
));
$plugin->show();
