Boilerplate.module("ExampleApp", function(ExampleApp, Boilerplate, Backbone, Marionette, $, _){
    
    ExampleApp.Router = Backbone.Marionette.AppRouter.extend({
      appRoutes:{
        "": "listExamples",
        // "/:id": "showExample"
      }
    });

    var API = {
    	listExamples: function(){
    		ExampleApp.List.Controller.listExamples();
    	},

    	// showExample: function(id){
    	// 	ExampleApp.Show.Controller.showExample(id);
    	// }
    };


    Boilerplate.addInitializer(function(){
    	new ExampleApp.Router({
    		controller: API
    	});
    });

});