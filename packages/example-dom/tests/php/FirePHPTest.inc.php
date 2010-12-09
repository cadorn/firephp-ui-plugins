<?php

$plugin = FirePHP::to("plugin")->plugin('BasicDom');
$plugin->register(array(
    'class' => 'FirePHP_UIPlugins_ExampleDom_Plugin',
    'file' => dirname(dirname(dirname(__FILE__))) . '/lib/Plugin.php',
    'forceReload' => true
));
$plugin->show();

?>

<div>
Data: <input id="data" type="text" value="Test Value"/>
</div>

<ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<hr>
