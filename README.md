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

For information on the _Insight Plugin System_ specifically see: https://github.com/insight/sandboxed-ui-plugins

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


Example
=======

The following steps will install an example plugin that illustrates the basic features of what a plugin can do.

**Step 1:** Download or clone: https://github.com/firephp/ui-plugins

**Step 2:** Register and show plugin using the [Insight API](http://reference.developercompanion.com/#/Tools/FirePHPCompanion/API/).



Anatomy of a Plugin
===================

A _FirePHP Plugin_ is a group of HTML/CSS/JavaScript files that follow the [CommonJS](http://www.commonjs.org/)
[http://wiki.commonjs.org/wiki/Packages/1.0](package format).







Support & Feedback
==================

See [FirePHP OpenSource](http://reference.developercompanion.com/#/Tools/FirePHPCompanion/OpenSource/)


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