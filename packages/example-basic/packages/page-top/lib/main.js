
var PLUGIN = require('plugin/plugin');
var CONSOLE = require('plugin/console');
var BROWSER = require('plugin/browser');
var JQUERY = require('jquery/jquery').jQuery;

exports.main = function() {

    PLUGIN.addCss("style.css");

    CONSOLE.log("Hello World from Basic Example: " + new Date());

    // "content" is the root HTML element (body) to put markup into
    JQUERY("#content").html(
        [
            '<div class="links">',
            '<a href="#" id="ping-server-link">Ping Server</a>',
            '<a href="#" id="toggle-height-link">Toggle Height</a>',
            '<a href="#" id="new-tab-link">Open New Tab</a>',
            '<a href="#" id="new-window-link">Open New Window</a>',
            '<a href="#" id="set-url-link">Set Page URL</a>',
            '</div>',
            '<div class="icon"><img src="' + PLUGIN.getImageUrl("firephp.png") + '"/></div>',
            '<div class="notes">Open <i>Firebug Console</i> to see messages.</div>'
        ].join("\n")
    );

    JQUERY("#ping-server-link").click(function() {
        CONSOLE.log(["send", {
            "said": "Hello World from Basic Example: " + new Date()
        }]);
        PLUGIN.sendSimpleMessage({
            "said": "Hello World from Basic Example: " + new Date()
        });
        CONSOLE.log(["send", {
            "respond": true
        }]);
        PLUGIN.sendSimpleMessage({
            "respond": true
        }, function(response) {
            CONSOLE.log(["response", response.data]);
        });
    }, false);

    // listen for messages from server
    PLUGIN.addListener("message", function(message) {
        if(message.type=="simple") {
            CONSOLE.log(["received", message.data]);
        }
    });

    JQUERY("#toggle-height-link").click(function() {
        PLUGIN.getHeight(function(height) {
            if(height==50) {
                PLUGIN.setHeight(100);
            } else {
                PLUGIN.setHeight(50);
            }
        });
    }, false);

    JQUERY("#new-tab-link").click(function() {
        BROWSER.newTab("http://www.firephp.org/");
    }, false);

    JQUERY("#new-window-link").click(function() {
        BROWSER.newWindow("http://www.firephp.org/");
    }, false);

    JQUERY("#set-url-link").click(function() {
        BROWSER.setUrl("http://www.firephp.org/");
    }, false);

}
