//define(["app", "apps/config/storage/localstorage"], function(BoilerPlate){
define(["app"], function(BoilerPlate){
  BoilerPlate.module('Entities', function(Entities, BoilerPlate, Backbone, Marionette, $, _){
      var hostname = document.location.hostname;
    /*
    * Backbone models
    *-----------------------------------------------------------*/
    Entities.Example =  Backbone.Model.extend({
      // urlRoot: "http://api."+hostname+"/",
      // defaults: {
      //  id: null,
      // }
    });
      
    /*
    * Backbone Collections
    *-----------------------------------------------------------*/
    Entities.Collection = Backbone.Collection.extend({
      // url: "http://api."+hostname+"/",
       model: Entities.Example
      // parse: function (response) {
     //        return response.yourAPIresponse;
     //    },
     //
    });



    /*
    * Private Variables
    *-----------------------------------------------------------*/
    var clients;

    var API = {

      getBoilerPlateEntities: function(){
        var collection = new Entities.Collection;
        var defer = $.Deferred();
        //collection.url = "http://api."+hostname+"/items",
        collection.url = "http://localhost/backboneblackhawk/api/public/index.php/minions/keywords/6",
        collection.fetch({
          success: function(data){
            defer.resolve(data);
          }
        });
        return defer.promise();
      },
      editBoilerPlateEntity:function(BoilerPlateData){
        modal.save(BoilerPlateData);
      },

    };



    /*
    * Request Handlers
    *-----------------------------------------------------------*/
    BoilerPlate.reqres.setHandler("mBoilerPlate:collection", function(){
      return API.getBoilerPlateEntities();
    });


    BoilerPlate.reqres.setHandler("mBoilerPlate:edit", function(BoilerPlateData){
      return API.editBoilerPlateEntity(BoilerPlateData);
    });
  });

  return ;
});