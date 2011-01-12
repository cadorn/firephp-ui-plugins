
var PLUGIN = require('plugin/plugin');
var PAGE = require('plugin/page');
var CONSOLE = require('plugin/console');
var JQUERY = require('jquery/jquery').jQuery;

exports.main = function() {

    PLUGIN.addCss("style.css");

    // "content" is the root HTML element (body) to put markup into
    JQUERY("#content").html(
        [
            '<div class="links">',
            '<a href="#" id="log-data-link">Log data from "Data" field in page</a>',
            '<a href="#" id="match-list-link">Log items from list in page via XPath</a>',
            '</div>',
            '<div class="notes">Open <i>Firebug Console</i> to see messages.</div>'
        ].join("\n")
    );

    JQUERY("#log-data-link").click(function() {

        PAGE.getWindow(function(window) {
            var element = getOurDocument(window).getElementById("data");
            if(!element) {
                CONSOLE.info("Cannot locate element with ID 'data'. Make sure the plugin test page is loaded.");
                return;
            }
            CONSOLE.log(["data", element.value]);
        });

    }, false);

    JQUERY("#match-list-link").click(function() {

        PAGE.getWindow(function(window) {

            var document = getOurDocument(window);

            var items = [];
            // See: https://developer.mozilla.org/en/Introduction_to_using_XPath_in_JavaScript
            var xpathResult = document.evaluate("//ul[@id='list']/li", document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
            try {
                var node = xpathResult.iterateNext();  
                while (node) {  
                    items.push(node.textContent);
                    node = xpathResult.iterateNext();  
                }   
            } catch (e) {  
                CONSOLE.warn("Document tree modified during iteration: " + e);
            }

            if(items.length==0) {
                CONSOLE.info("Cannot locate list items. Make sure the plugin test page is loaded.");
                return;
            }

            CONSOLE.log(["items", items]);
        });

    }, false);
}

function getOurDocument(window) {
    // when running the plugin via the test iframes we need to get the correct document
    // we try and get the data element to find the correct document
    var element = window.document.getElementById("data");
    if(!element) {
        // when running the plugin via the test iframes we need to get the element from the iframe instead
        element = window.document.getElementById("examples-frame");
        if(element) {
            element = element.contentWindow.document.getElementById("content-frame");
        } else {
            element = window.document.getElementById("content-frame");
        }
        if(element) {
            if(element.contentWindow.document.getElementById("data")) {
                return element.contentWindow.document;
            }
        }
    }
    return window.document;
}
