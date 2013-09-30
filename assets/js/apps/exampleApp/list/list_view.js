Boilerplate.module("ExampleApp.List", function(List, Boilerplate, Backbone, Marionette, $, _){
	/*
	* Marionette Application List Views
	*-----------------------------------------------------------*/	
	List.Layout = Marionette.Layout.extend({
		template: "#example-list-layout",
		regions:{
			SidebarButtonPanel: "#sidebar-button-panel-region",
			SidebarListRegion: "#sidebar-list-region"
		}
	});


	/*
	* Marionette Application ItemViews
	*-----------------------------------------------------------*/
	List.SidebarView = Marionette.ItemView.extend({
		template: "#example-sidebar-template",
		className: "list-group-item",
		tagName: "li",
		events:{
			"mouseenter": "highlight",
			"mouseleave": "highlight",
			"click span.js-delete": "delete",
			"click span.js-edit": "edit",
			"click a.js-view": "showExample"
			// "click a.js-show": "showClicked"
		},
		showExample: function(e){
			e.stopPropagation();
			e.preventDefault();
			//alert("This click handler will instantiate the "+this.model.attributes.Name+" Single View.");
			this.trigger("mBoilerplate:show", this.model);
		},
		highlight: function(e){
			e.preventDefault();
			this.$el.toggleClass('alert-info');
		},
		edit: function(e){
			e.stopPropagation();
			var view = new List.ModalEditWindow({model: this.model});
			var $modalEl = $("#modal");
	        view.render();
	        $modalEl.html(view.el);
	        $modalEl.modal();
		},
		delete: function(e){
			e.stopPropagation();
			this.trigger("mBoilerplate:delete", this.model);
		},
		remove: function(){
			this.$el.fadeOut(function(){
				$(this).remove();
			});
		}
	});

	List.SidebarButtonPanel = Marionette.ItemView.extend({
		template: "#example-sidebar-list-panel",
		events:{
			"click button.js-new": "newModel",
		},
		newModel: function(){
			//alert("New Client Button Clicked!");
			var view = new List.ModalNewWindow();
			var $modalEl = $("#modal");
	        view.render();
	        $modalEl.html(view.el);
	        $modalEl.modal();
		}
	});

	List.ModalNewWindow = Backbone.Marionette.ItemView.extend({
	  template: "#modal-new-window",
	  events:{
	  	"click .js-save":"newModel"
	  },
	  newModel: function(e){
	  	e.preventDefault();

	  	var data = Backbone.Syphon.serialize(this);
	  	var model = Boilerplate.request("mBoilerplate:new", data);
	    //model.set(data);
	    //this.model.save();
	  }
	});


	/*
	* Marionette CompositeView
	*-----------------------------------------------------------*/
	List.CompositeViewExample  = Marionette.CompositeView.extend({
		itemView: List.SidebarClientsView,
		template: "#example-sidebar-list-group",
		tagName: "div",
		className: "panel",
		itemViewContainer: "ul",

		// onItemviewContactDelete:function(){
		// 	this.$el.fadeOut(1000, function(){
		// 		$(this).fadeIn(1000);
		// 	})
		// }
	});    
});