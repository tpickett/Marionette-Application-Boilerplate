Boilerplate.module("Entities", function(Entities, Boilerplate, Backbone, Marionette, $, _){

	var hostname = document.location.hostname;
    /*
	*	Backbone models
	*-----------------------------------------------------------*/
	Entities.Example =  Backbone.Model.extend({
		// urlRoot: "http://api."+hostname+"/",
		// defaults: {
		// 	id: null,
		// }
	});
    
	/*
	*	Backbone Collections
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
	*	Private Variables
	*-----------------------------------------------------------*/
	var clients;

	var API = {

		getBoilerplateEntities: function(){
			var collection = new Entities.Collection;
			var defer = $.Deferred();
			collection.url = "http://api."+hostname+"/items",
			collection.fetch({
				success: function(data){
					defer.resolve(data);
				}
			});
			return defer.promise();
		},
		editBoilerplateEntity:function(boilerplateData){
			modal.save(boilerplateData);
		},
	
	};



	/*
	*	Request Handlers
	*-----------------------------------------------------------*/
	Boilerplate.reqres.setHandler("mBoilerplate:collection", function(){
		return API.getBoilerplateEntities();
	});


	Boilerplate.reqres.setHandler("mBoilerplate:edit", function(boilerplateData){
		return API.editBoilerplateEntity(boilerplateData);
	});


});