/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

$(function () {
	'use strict';

	// kick things off by creating the `App`
	new app.AppView();
});


/* 
In the …/js/views/app-view.js of Backbone.js TodoMVC Example. 
When all todos are completed, !remaining === true(line74), 
but how come this.allCheckbox.checked === false(line123) 
when .toggle-all is clicked?
*/