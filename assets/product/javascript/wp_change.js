var app = app || {};

app.WPModel = Backbone.Model.extend({
});

app.collWP = Backbone.Collection.extend({
	model: app.WPModel,
	url: "/api/wp"
});

app.WPView = Backbone.View.extend({
	el: "#wps-menu",
	template: Handlebars.compile( $("#wp").html() ),
	initialize: function(){
	  this.collection.on("sync", this.setItems, this );
		this.collection.fetch();
	},
	setItems: function(collection){
	  //this.$el.find("option").remove().end();
	  console.log( this.$el );
		this.$el.find(".wp-item-new").remove().end();
		_.each( collection.models, this.setItem, this );
	},
	setItem: function(item){
		console.log( this.template( item.toJSON() ) );
	  this.$el.append( this.template( item.toJSON() ) );
	}
});

function doPost( url ) {
	$.post( url )
		.done( function(data){
			location.reload();
		});
};

$(document).ready(function() {
	try{
		console.log("q");
		app.collwp = new app.collWP();

		// get list of wp
		$("#wps").on("click", function(){
			app.wp = new app.WPView({ collection: app.collwp });
		});
	}
	catch(e){
		console.log( e.message );
	}
});
