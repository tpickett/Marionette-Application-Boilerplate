Boilerplate.module("ExampleApp.New", function(New, Boilerplate, Backbone, Marionette, $, _){
    
	/*
	*	Public Variables
	*-----------------------------------------------------------*/
    New.Controller = {
		newBoilerplateEntity: function(boilerplateData){
			var modal = new Boilerplate.Entities.Example();
			console.log("New Example Instantiated!!");
			//modal.save(boilerplateData)
		}
	}


	/*
	*	Request Handlers
	*-----------------------------------------------------------*/
	Boilerplate.reqres.setHandler("mBoilerplate:new", function(boilerplateData){
		return New.Controller.newBoilerplateEntity(boilerplateData);
	});

});