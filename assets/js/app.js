//define(["marionette", "apps/config/marionette/regions/dialog"], function(Marionette){
define(["marionette"], function(Marionette){
  var BoilerPlate = new Marionette.Application();

  /*
  * Marionette Application Regions
  *-----------------------------------------------------------*/
  BoilerPlate.addRegions({
    sidebarRegion: "#sidebar_region",
    contentRegion: "#content_region",
    //modal: ModalRegion
  });



  /*
  * Marionette Application Routing
  *-----------------------------------------------------------*/
  BoilerPlate.navigate = function(route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
  }

  BoilerPlate.getCurrentRoute = function() {
    return Backbone.history.fragment;
  }

  /*
  * Application Initialization
  *-----------------------------------------------------------*/
  BoilerPlate.on("initialize:after", function(){
    //instantiate
require(["app", "entities/entity"], function(ContactManager){
    var fetchingContacts = BoilerPlate.request("mBoilerPlate:collection");
    $.when(fetchingContacts).done(function(contacts){
      console.log(contacts);
    });
});

    if (Backbone.history) {
      Backbone.history.start();
    }
  });

  return BoilerPlate;
});