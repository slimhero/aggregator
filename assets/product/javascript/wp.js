var app = app || {};

// history.start() must be executed after all modules have been registered which,
// depending on the lumbar config, might not be at this time.
$(document).ready(function() {
  Backbone.history.start();
});

app.WPModel = Backbone.Model.extend({
});

app.collWP = Backbone.Collection.extend({
	model: app.WPModel,
	url: "/api/wp"
});

app.WPView = Backbone.View.extend({
	el: '#wpwidget',
	model: app.WPModel,
	//collection: new app.collWP(),
	template: Handlebars.compile( $("#wpitem").html() ),
	count: 0,
	initialize: function(){
	  this.collection.on( "sync", this.setItems, this );
		this.collection.fetch();
	},
	setItems: function(collection){
	  _.each( collection.models, this.setItem, this );
	},
	setItem: function(item){
		console.log( item );
		this.$el.find("#wplist").append( this.template( item.toJSON() ) );
    this.count = this.count + 1;
		if( this.count = 1 ){
			$(document).on('click', '.dropdown-menu li a', function () {
    		console.log("Selected Option:"+$(this).text());
				$("#wpChoosenLabel").text( $(this).text() );
				$("#wpChoosenLabel").attr( "value", $(this).attr( "data" ) );
				$("#wpwidget form").attr( "action", '/api/setwp/' + $(this).attr( "data" ) )
			});
		};
	}
});

$(document).ready(function() {
	try{
		console.log("q");
		app.wp = new app.collWP();
		app.wpview = new app.WPView({collection: app.wp});
	}
	catch(e){
		console.log( e.message );
	}
});
