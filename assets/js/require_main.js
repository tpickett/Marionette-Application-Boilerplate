requirejs.config({
  baseUrl: "assets/js",
  paths: {
    backbone: "vendor/backbone",
    jquery: "vendor/jquery",
    "jquery-ui": "vendor/jquery-ui",
    json2: "vendor/json2",
    localstorage: "vendor/backbone.localstorage",
    marionette: "vendor/backbone.marionette",
    /*
    //underscore template loader
    */
    tpl: "vendor/tpl",
    /*
    //handlebars template loader
    hbs: "vendor/hbs",
    handlebars: "vendor/Handlebars.js",
    */
    underscore: "vendor/underscore"
  },

  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore", "json2"],
      exports: "Backbone"
    },
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    },
    "jquery-ui": ["jquery"],
    localstorage: ["backbone"]
  }
});

require(["app"], function(BoilerPlate){
  BoilerPlate.start();
});