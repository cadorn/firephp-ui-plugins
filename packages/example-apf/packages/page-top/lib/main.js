
var PLUGIN = require('plugin/plugin');
var CONSOLE = require('plugin/console');
var JQUERY = require('jquery/jquery').jQuery;

exports.main = function() {

    PLUGIN.addCss("style.css");

    JQUERY("#content").html("This plugin is non-functional at this time.");

/*

    // augment namespace
    JQUERY("html").attr("xmlns:a", "http://ajax.org/2005/aml");

    // set UI content
    JQUERY("#content").html(
        [
            '<a:skin src="aristo/skins.xml" media-path="aristo/images/" icon-path="aristo/icons/" />',
            '<a:button id="test-button">Click me!</a:button>'
        ].join("\n")
    );

    // load apf
    PLUGIN.loadResourceScript("apf/apf-release.js", function() {
        
console.log({"html": JQUERY("html")});        

    });
*/

}
