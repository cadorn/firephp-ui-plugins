UI Plugins for FirePHP
======================

This project contains User Interface (UI) plugins for FirePHP clients that support the
[Insight UI Plugin System](https://github.com/insight/sandboxed-ui-plugins). This plugin system is being incubated as part of
[FirePHP Companion](http://www.christophdorn.com/Tools/#FirePHP Companion) which is the first client implementation of the
[Insight](http://www.christophdorn.com/Research/#Insight) system.

All documentation and code contained in this project is to be viewed in the context of using
[FirePHP 1.0](http://reference.developercompanion.com/#/Tools/FirePHPCompanion/Introduction/) with
[FirePHP Companion](http://www.christophdorn.com/Tools/#FirePHP Companion). Long-term, as further clients that implement
the _Insight_ system become available, the requirement for _FirePHP Companion_ will be relaxed and ultimately removed.

For information on the _Insight Plugin System_ specifically see: [https://github.com/insight/sandboxed-ui-plugins](https://github.com/insight/sandboxed-ui-plugins)

The information below is simplified and streamlined for FirePHP users to get started with minimal effort.

**NOTE:** _FirePHP UI Plugins_ are fully supported by the **free** _FirePHP Companion LITE_ edition. The only difference to the paid
_FirePHP Companion_ edition is the requirement to restart the browser for plugin code changes to take effect.


Overview
========

_FirePHP UI Plugins_ are specialized [CommonJS](http://www.commonjs.org/) programs that reside with your PHP code on the server and get sent to
the _FirePHP Companion_ client via _FirePHP_. This means these plugins stay and move with the rest of the code of your application
and any [authorized](http://reference.developercompanion.com/#/Tools/FirePHPCompanion/Workflow/#Authorizing Insight) user with
_FirePHP Companion_ installed will have automatic access to the plugins.

You can choose from a variety of plugins for common PHP tasks, frameworks and libraries included in this project or you can write and share your own.

The FirePHP plugin system is just getting off the ground and will grow in features based on feedback and requirements. Be sure
to [voice your needs](http://reference.developercompanion.com/#/Tools/FirePHPCompanion/OpenSource/) as you play with it.


Requirements
============

 * [FirePHP 1.0](http://www.christophdorn.com/Blog/2010/11/29/firephp-1-0-in-5-steps/)
 * [FirePHP Companion LITE](http://www.christophdorn.com/Tools/#FirePHP Companion LITE) (or the paid version to make writing plugins easier)


Example
=======

The following steps will install an example plugin that illustrates the basic features of what a plugin can do.

**Step 1:** Download or clone: [https://github.com/firephp/ui-plugins](https://github.com/firephp/ui-plugins)

**Step 2:** Register and show plugin using the [Insight API](http://reference.developercompanion.com/#/Tools/FirePHPCompanion/API/).

    $plugin = FirePHP::to("plugin")->plugin('BasicExample');
    $plugin->register(array(
        'container' => 'page-top',
        'class' => 'FirePHP_UIPlugins_ExampleBasic_Plugin',
        'file' => '<ABSOLUTE_PATH_TO>/ui-plugins/packages/example-basic/lib/Plugin.php',
        'forceReload' => true   // Force plugin to always reload during development
    ));
    $plugin->show();

**NOTE:** Forced reloading requires the paid edition of [FirePHP Companion](http://www.christophdorn.com/Tools/#FirePHP Companion). To reload a plugin,
(after making changes to it's code) when using the free _FirePHP Companion LITE_ edition, restart the browser.

To send a message to this plugin from anywhere in your application use:

    FirePHP::to('plugin')->plugin('BasicExample')->sendSimpleMessage($data);

**NOTE:** Messages will only be delivered to the plugin if it is currently showing. Guaranteed message delivery irrespective of the state of the plugin
in the UI is planned.

See [here](https://github.com/firephp/ui-plugins/blob/master/packages/example-basic/packages/page-top/lib/main.js) for an example of how to listen to messages.


Anatomy of a Plugin
===================

A _FirePHP UI Plugin_ is a group of HTML/CSS/JavaScript files that follow the [CommonJS](http://www.commonjs.org/)
[package format](http://wiki.commonjs.org/wiki/Packages/1.0) and some additional conventions.

    <package>/            -> The Plugin Package
      lib/                -> PHP Files that interact with FirePHP & Application
        *.php
      packages/           -> Plugins for specific UI Containers
        page-top/         -> A plugin for the 'page-top' UI Container (shows above page in browser)
          lib/            -> CommonJS JavaScript modules for the plugin
            *.js
          resources/      -> Resources for the module (e.g. css and png files)
            *.css
            *.png
          package.json    -> The Package Descriptor for the Plugin

**NOTE:** Only the file types/extensions listed above are supported for the various directories. If you need
support for an addition file type please post to the [mailing list](http://reference.developercompanion.com/#/Tools/FirePHPCompanion/OpenSource/).

**NOTE:** Support for _resources/*.htm_ files for use with template libraries and injection in the plugin will be added soon.

When a plugin is loaded it's _main()_ method in _lib/main.js_ is called. The plugin must subsequently inject it's UI into the _#content_ HTML element.


Writing your Own
================

You can write your own _FirePHP UI Plugins_ and share them with others or just use them for your own application internally.
To share them with others you can host them yourself or use any code sharing site such as github. If a plugin is of general value
it may be considered for inclusion in this project according to the following rules:

 * Must use the _Insight API_ as implemented in the [FirePHP project](http://reference.developercompanion.com/#/Tools/FirePHPCompanion/API/) for all server components.
 * Must be of use with PHP applications, frameworks and libraries
 * Must have a pleasant look and feel ideally consistent with other plugins (specific guidelines will be established in time)
 * Must be licensed as MIT
 * May not include advertising or any kind of branding

At this time, the best way to write _FirePHP UI Plugins_ is by using the paid edition of [FirePHP Companion](http://www.christophdorn.com/Tools/#FirePHP Companion).
It allows for instant reloading of plugins whenever code changes are made. Keep the following in mind when developing plugins with _FirePHP Companion_:

 * Once a plugin is written anyone can run it free of charge using _FirePHP Companion LITE_. Other clients and browsers will be supported in time.
 * Open the _Firefox Error Console_ to see some JavaScript errors and the _Firebug Console_ to see others. This will be much improved in future.
 * Start with a basic working plugin and make incremental changes while constantly testing each change.
 * Keep in mind the plugin system is new and missing API features that you may need. Be vocal on the [mailing list](http://reference.developercompanion.com/#/Tools/FirePHPCompanion/OpenSource/).

This documentation will be much improved in time. For now some pointers:

 * The _Insight Plugin API_ used by the plugins to communicate with the browser and FirePHP is published here: [https://github.com/insight/plugin-api](https://github.com/insight/plugin-api)
 * You can add your own _CommonJS modules_ in the _lib_ directory (in addition to _main.js_) and load them into other modules using _require('./<name>')_ (no _.js_ extension).
 * Common libraries that plugins may load and the client will automatically provide can be found here: [https://github.com/insight/plugin-libraries](https://github.com/insight/plugin-libraries)
 * Relative _@import_ instructions may be used in _CSS_ files.

If you need support in any way feel free to post on the [mailing list](http://reference.developercompanion.com/#/Tools/FirePHPCompanion/OpenSource/).


Existing Plugins
================

The FirePHP plugin system is just getting off the ground so there are not many existing plugins yet. If you are interested in contributing to
writing plugins for the community to use please introduce yourself on the [mailing list](http://reference.developercompanion.com/#/Tools/FirePHPCompanion/OpenSource/).

 * [Example: Basic](https://github.com/firephp/ui-plugins/tree/master/packages/example-basic/)


Support & Feedback
==================

See [FirePHP OpenSource](http://reference.developercompanion.com/#/Tools/FirePHPCompanion/OpenSource/) for mailing list.


Author
======

This project is a part of the [FirePHP](http://www.firephp.org/) project maintained by
[Christoph Dorn](http://www.christophdorn.com/).


Documentation License
=====================

[Creative Commons Attribution-NonCommercial-ShareAlike 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/)

Copyright (c) 2010 [Christoph Dorn](http://www.christophdorn.com/)


Code License
============

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2010 [Christoph Dorn](http://www.christophdorn.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.