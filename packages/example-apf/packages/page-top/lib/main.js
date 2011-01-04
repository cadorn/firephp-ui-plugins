
var PLUGIN = require('plugin/plugin');
var CONSOLE = require('plugin/console');
var JQUERY = require('jquery/jquery').jQuery;

exports.main = function() {

    PLUGIN.addCss("style.css");

    // "content" is the root HTML element (body) to put markup into
    JQUERY("#content").html(
        [
            'Hello World from APF'
        ].join("\n")
    );

}
