
var PLUGIN = require('plugin/plugin');
var CONSOLE = require('plugin/console');
var EXTJS = require("extjs/extjs");

exports.main = function() {
    
    EXTJS.init();

    Ext.getDom("content").innerHTML = '<div id="button"></div>';
 
    var button = new Ext.Button({
        text: "Click me!",
        handler: function() {
            CONSOLE.log("Button clicked!");
        }
    });
    
    button.render("button");
    
}