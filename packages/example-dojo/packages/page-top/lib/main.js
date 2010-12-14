
var PLUGIN = require('plugin/plugin');
var CONSOLE = require('plugin/console');
var DOJO = require("dojo/dojo");

exports.main = function() {

    DOJO.init({
        afterOnLoad: true,
        parseOnLoad: false,
        isDebug: false,
        locale: "en-us",
        baseUrl: PLUGIN.getResourceUrl("dojo/insight-plugin/dojo/")
    });

    // use dojo claro theme
    PLUGIN.addCss("dojo/insight-plugin/dijit/themes/claro/claro.css");
    dojo.query("body")[0].setAttribute("class", "claro");

    // load custom dojo
    PLUGIN.loadResourceScript("dojo/insight-plugin/insight-plugin.js", function() {

        // declare modules we need
        dojo.require("dijit.form.Button");

        // set UI content
        dojo.query("#content")[0].innerHTML = '<button id="mybutton" type="button"></button>';

        // parse UI content
//        dojo.parser.parse();

        // markup UI content
        dojo.addOnLoad(function() {
            var button = new dijit.form.Button({
                label: "Click me!",
                onClick: function() {
                    CONSOLE.log("Button clicked!");
                }
            },
            "mybutton");
        });
    });
}