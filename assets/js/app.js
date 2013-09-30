var Boilerplate = new Marionette.Application();

/*
*	Marionette Application Regions
*-----------------------------------------------------------*/
Boilerplate.addRegions({
	sidebarRegion: "#sidebar_region",
	contentRegion: "#content_region",
	modal: ModalRegion
});



/*
*	Marionette Application Routing
*-----------------------------------------------------------*/
Boilerplate.navigate = function(route, options) {
	options || (options = {});
	Backbone.history.navigate(route, options);
}

Boilerplate.getCurrentRoute = function() {
	return Backbone.history.fragment;
}

/*
* Application Initialization
*-----------------------------------------------------------*/
Boilerplate.on("initialize:after", function(){
	//instantiate
	
	if (Backbone.history) {
		Backbone.history.start();
	}
});

