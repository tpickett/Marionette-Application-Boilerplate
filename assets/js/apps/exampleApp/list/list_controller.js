define(["app", "apps/exampleApp/list/list_view"], function(Boilerplate, View){
	Boilerplate.module("ExampleApp.List", function(List, Boilerplate, Backbone, Marionette, $, _){
		List.Controller = {
			listExamples: function(){
				 //var collection = Boilerplate.request("mBoilerplate:collection");
				// require(["entities/items"], function(){
				//   var fetchingContacts = BoilerPlate.request("mBoilerPlate:collection");
				//   $.when(fetchingContacts).done(function(contacts){
				//     console.log(contacts);
				//   });
				// });
				

				/*
				*	Define Layout for sidebar
				*-----------------------------------------------------------*/
				var ListLayout = new View.Layout();
				//var sidebarListView = new List.SidebarView({collection:collection});
				var sidebarButtonsView = new View.SidebarButtonPanel();

				/*
				*	Create triggers for sub-regions in sidebar
				*-----------------------------------------------------------*/
		  //       sidebarListView.on("itemview:example:delete", function(childView, model){
		  //       	model.destroy();
		  //       });

		  //       sidebarListView.on("itemview:example:show", function(childView, model){
		  //       	Boilerplate.ExampleApp.Single.Controller.showSingle(model);
		  //       });

		        /*
				*	Add sub-regions to sidebar layout
				*-----------------------------------------------------------*/
		        ListLayout.on("show", function(){
		        	ListLayout.SidebarButtonPanel.show(sidebarButtonsView);
		        	//ListLayout.SidebarListRegion.show(sidebarListView);
		        });

		        /*
				*	Create triggers for sub-regions in single client area
				*-----------------------------------------------------------*/


				/*
				*	Add sub-regions to single client layout
				*-----------------------------------------------------------*/


				/*
				*	Create layout in DOM
				*-----------------------------------------------------------*/
	        	Boilerplate.sidebarRegion.show(ListLayout);
			}
		}
	});

	return Boilerplate.ExampleApp.List.Controller;
});