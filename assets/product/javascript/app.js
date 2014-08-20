var app = app || {};

// history.start() must be executed after all modules have been registered which,
// depending on the lumbar config, might not be at this time.
$(document).ready(function() {
  //RootView.getInstance(document.body);
  Backbone.history.start();
});

// Set view
app.viewApp = Thorax.View.extend({
	i: 0,
	model: app.modelRow,
	tagDest: "body",
  greeting: "Hello",
  template: Handlebars.compile( 
		($("#tables").html()) 
	),
	initialize: function() {
		this.collection = new app.collRows();
    this.listenTo( this.collection, "change", this.show/*this.render*/);
    this.listenTo( this.collection, "add", this.show/*this.render*/);
    this.listenTo( this.collection, "fetch", this.show/*this.render*/);
  },
	show: function(){
		window.alert( i++ );
	}
});

app.modelRow = Backbone.Model.extend({});

app.collRows = Backbone.Collection.extend({
	model: app.modelRow,
  localStorage: new Store("rows"),//Backbone.LocalStorage("rows"),	
	url: '/api/rows'
});

//viewApp.appendTo('body');
$(function(){
  app.test_collRows = new app.collRows();
	app.test_viewApp = new app.viewApp();
	app.test_collRows.fetch();
	app.test_viewApp.appendTo( app.test_viewApp.tagDest );
	//viewApp.appendTo("body");
});
