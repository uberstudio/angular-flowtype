angular-flowtype
================

AngularJS directive for Flowtype.JS

I love using Flowtype.JS and realized there's no out-of-the-box directive out there, pretty easy but thought I'd through it out there anyway.

Installation (via Bower):
-------------------------

        $ bower install angular-flowtype

Usage:
------

 * Download and include angular-flowtype.js (and jQuery + Flowtype.JS, of course)

        <script type='text/javascript' src='path/to/jquery.min.js'></script>
        <script type='text/javascript' src='path/to/flowtype.min.js'></script>
        <script type='text/javascript' src='path/to/angular-flowtype.js'></script>

 * Add 'ngFlowtype' to your app's dependencies

        angular.module('myApp', ['ngFlowtype']);

 * Use the directive as an attribute, specify optional settings.

        <div flowtype min-font="1" max-font="9999" font-ratio="35" line-ratio="1.45" minimum="1" maximum="9999"></div>
