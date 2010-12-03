
var PLUGIN = require('plugin/plugin');
var INSIGHT = require('plugin/insight');
var CONSOLE = require('plugin/console');
var EVENTS = require('plugin/events');
var JQUERY = require('jquery/jquery').jQuery;

exports.main = function() {

    PLUGIN.addCss("style.css");

    CONSOLE.log("Hello World from Basic Example: " + new Date());

    // "content" is the root HTML element (body) to put markup into
    JQUERY("#content").html(
        [
            '<div class="links"><a href="#" id="ping-server-link">Ping Server</a></div>',
            '<div class="links"><a href="#" id="toggle-height-link">Toggle Height</a></div>',
            '<div class="notes">Open <i>Firebug Console</i> to see messages.</div>'
        ].join("\n")
    );

    document.getElementById("ping-server-link").addEventListener("click", function() {
        CONSOLE.log(["send", {
            "said": "Hello World from Basic Example: " + new Date()
        }]);
        INSIGHT.to("plugin").plugin().sendSimpleMessage({
            "said": "Hello World from Basic Example: " + new Date()
        });
    }, false);

    document.getElementById("toggle-height-link").addEventListener("click", function() {
        PLUGIN.getHeight(function(height) {
            if(height==50) {
                PLUGIN.setHeight(100);
            } else {
                PLUGIN.setHeight(50);
            }
        });
    }, false);

    // listen for messages from server
    EVENTS.addListener("message", function(message) {
        CONSOLE.log(["received", message.data]);
    });

}
