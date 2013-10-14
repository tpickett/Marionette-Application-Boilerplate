//Getting in correct branch
requirejs.config({
	baseURL: "assets/js",
	paths:{
		marionette: "vendor/backbone.marionette",
		backbone: "vendor/backbone",
		jquery: "vendor/jquery",
		underscore: "vendor/underscore",
		"bootstrap": "vendor/bootstrap"
	},
	shim:{
		underscore:{
			exports: "_"
		},
		backbone: {
			deps: ['jquery','underscore'],
			exports: "Backbone"
		},
		marionette: {
			deps: ['backbone'],
			exports: "Marionette"
		},
		"bootstrap": {
			deps: ['jquery']
		},
		app: {
			deps:['marionette', 'bootstrap'],
			exports: "Boilerplate"
		}
	}
});
require(["app"], function(Boilerplate){
	Boilerplate.start();
});