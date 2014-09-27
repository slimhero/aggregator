var app = app || {};

// history.start() must be executed after all modules have been registered which,
// depending on the lumbar config, might not be at this time.
$(document).ready(function() {
  Backbone.history.start();
});

app.PointModel = Backbone.Model.extend({
  defaults: {
		id: null,
		point: null,
		label: "New",
		code: "New(it must be changed)",
		login: null,
		pwd: null
	},
	url: function(){
	  return ("/api/points/" + this.id);
	}
});

app.PointTimeModel = Backbone.Model.extend({
	defaults:{
		id: 1,
		timeplan: "10:00",
		type: 1
	},
	url: function(){
		return ("/api/time/" + this.id);
	}
});

app.JournalModel = Backbone.Model.extend({
	url: function(){
		return ("/api/journal/" + this.id);
	}
});

app.collPoints = Backbone.Collection.extend({
	model: app.PointModel,
	url: '/api/points',
	//reset: true,
	initialize: function(){
	  this.bind("add", this.addOne, this);
		this.bind("remove", this.removeOne, this );
		this.bind("reset", this.resetOne, this );
	},
	addOne: function( model, collection, options){
	  console.log( "add " );
	  console.log( model );
	},
	removeOne: function( model, collection, options){
		console.log( "remove " );	
		console.log( model );	
	},
  resetOne: function( model, collection, options ){
		console.log( "reset "  );
		console.log( model );
	}
});

app.collJournal = Backbone.Collection.extend({
	model: app.JournalModel,
	url: '/api/journal'
});


app.PointView = Backbone.View.extend({
	el: '#accordion2',
	//model: app.PointModel,
	template: Handlebars.compile( $("#point").html() ),
	//initialize: function(){
	  //this.listenTo(this.model, 'change', this.render);
		//this.model.fetch();
		//this.render();
	//},
	events: {
		//'click .btnEdit': 'editModel',
		'click #btnDel': 'deleteModel'//,
		//"click #btnSave": "saveModel",
		//"click #btnCancel": "cancelModel"
	},
	//
	initialize: function(){
	  if( !this.model.get('id') ){
		  this.model.set({ id: this.model.cid })
		}
		//_.bindAll(this, 'cleanup');
		//this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.destroy);
    //this.listenTo(this.collection, 'reset', this.destroy);
	  this.model.on('destroy', this.remove, this ); 
	},

	render: function(){
		this.renderF( this );
		return this;
	},
	
	renderF: function( that ){
		var m = that.model.toJSON();
		var temp = that.template( m );
		var id = that.model.attributes['id'];
		that.id = "#panel" + id;
		that.btnEdit = that.id + " .btnEdit#btnEdit";
		that.btnSave = that.id + " .btnSave#btnSave";
		that.btnTest = that.id + " .btnTest#btnTest";
		that.btnDel  = that.id + " .btnDel#btnDel";
		that.btnCancel = that.id + " .btn#btnCancel";
		that.show_mode = that.id + " .show_mode";
		that.edit_mode = that.id + " .edit_mode";
		that.editorAction = that.id + " .editorAction";
		that.editor = "editor" + id;
		that.label = that.id + " form #label";
	  that.point = that.id + " form #point";
		that.code = that.id + " form #code";
	  that.login = that.id + " form #login";
		that.pwd = that.id + " form #pwd";

		if( $( that.id ).length == 0 ){
			that.$el.append( temp );
		}
		else{
		  $(temp).replaceAll( $( that.id ) );
		}

		that.setEditorProp( that.editor, true );

		$(that.$el.find( that.btnEdit )).on("click", {entity: that}, that.editModel );
		$(that.$el.find( that.btnSave )).on("click", {entity: that}, that.saveModel );
		$(that.$el.find( that.btnTest )).on("click", {entity: that}, that.test );
		$(that.$el.find( that.btnCancel )).on("click", {entity: that}, that.cancelModel );
	},

	test: function(e){
		var that = e.data.entity;
		var id = that.model.attributes["id"];
		$( "#testModal #textarea").text( "" );
		$( "#testModal #textarea").html( "" );
		$( "#testModal #textarea").append( "START...\n" );
		var z = {
		 		parser: (ace.edit(("editor"+id)).getSession().getValue()),
				code: that.$el.find( that.code ).val(),
				label: that.$el.find( that.label ).val()
		};
		$.post( 
		    "api/points/test/"+id, 
				JSON.stringify(z),
				'json'
		)
		.done(function( data ){
			if( data.message ){
				$( "#testModal #textarea").html( "" );
				$( "#testModal #textarea").append( "<h4>" + _.escape( data.message ) + "\n</h4>" );
				if( $.isArray( data.trace ) ){
				  _.each( data.trace, function(item){
				  	$( "#testModal #textarea").append( "<p>" + _.escape( item ) + "</p>" );
					});
				}
				else{
				  $( "#testModal #textarea").append( "<p>" + _.escape( data.trace ) + "</p>" );
			  }
			}
		})
		.fail(function( data ){
			$( "#testModal #textarea").html( "" );
			$( "#testModal #textarea").append( "<h4>" + data.status +" - " + data.statusText + "</h4>" );
			var err = data.responseText ;
      var header = $( err ).find("div#header");
			$( "#testModal #textarea").append( header.html() );
			var trace = $( err ).find("div#backtrace");
			$( "#testModal #textarea").append( trace.html() );
			alert( data );
			
		});
	},
	editModel: function(e){	
		that = e.data.entity;
	  that.$( that.show_mode).addClass('hidden');
		that.$( that.btnTest ).removeClass('hidden');
		that.$( that.editorAction).removeClass('hidden');
	  that.$( that.edit_mode).removeClass('hidden');
		that.setEditorProp( that.editor, false );
	},

  setEditorProp: function( selector, boolReadOnly ){
		var editor = ace.edit( selector );
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/ruby");
		editor.setReadOnly( boolReadOnly );
	},
	
	cancelModel: function(e){
		var that = e.data.entity;
	  that.$( that.show_mode ).removeClass('hidden');
		that.$( that.btnEdit ).removeClass('hidden');
		that.$( that.editorAction ).addClass('hidden');
		that.$( that.btnDel ).removeClass('hidden');
	  that.$( that.edit_mode ).addClass('hidden');
		that.$( that.btnTest ).addClass('hidden');
	},
	deleteModel: function(){
		window.alert("!");
	},
	saveModel: function(e){
	  var that = e.data.entity;
		that.model.set({
			label: that.$( that.label ).val(),
			point: that.$( that.point ).val(),
			code: that.$( that.code ).val(),
			login: that.$( that.login ).val(),
			pwd: that.$( that.pwd ).val(),
			parser: ace.edit( that.editor ).getSession().getValue()
		});
	 
	  // Else id = -1 then it's new record
	  if( that.model.id == that.model.cid ){
			Backbone.sync( "create", that.model );
		}
		// Update exists model
		else{
			that.model.save();
		};
		// Change mode
		that.cancelModel( {data: {entity: that}} );
		// Rewrite
		that.renderF( that );
	},
	destroy: function(){
  	this.remove();
  	this.unbind();
	}
});


app.PointsView = Backbone.View.extend({
	el: '#points',
	model: new app.PointModel(),
	collection: new app.collPoints(),
	//listView: [],
	template: Handlebars.compile( $("#pointsContent").html() ),
	initialize: function(){
	  //this.listenTo(this.collection, 'add', this.onAdd/*this.render*/);
		this.collection.on( "add", this.onAdd, this );
		this.collection.on( "remove", this.render, this );
		this.collection.on( "reset", this.render, this );
		this.$el.append( this.template() );
	  this.collection.fetch();
		this.render();
	},
	render: function(){
		//this.$el.append( this.template() );
		this.collection.each( function(point){
		  var that = this;
			that.renderPoint( point );
		}	,this);
		return this;
	},
	onAdd: function(item){
		this.renderPoint( item );
	},
	renderPoint: function( item ){
			var pointView = new app.PointView({model: item});
			this.$el.append( pointView.render().el );
			//this.listView.push( pointView );
	},
	events: {
		"click #btnRefresh":"refreshCollection",
		"click #btnAddOne":"addNewModel"
	},
	addNewModel: function(){
		this.collection.add({});
	},
	refreshCollection: function(){
	  this.collection.reset();//remove();//reset();
		//_.each( this.listView, function(item){
		//	item.remove();
		//});
		this.collection.fetch();
		this.render();
	}

});

app.PointTimeView = Backbone.View.extend({
	el: "#pointtime",
	template: Handlebars.compile( $("#pointTime").html() ),
	model: new app.PointTimeModel(),
	events: {
		"click .btnTimeEdit" : "onEdit"
	},
	initialize: function(){
		this.model.on( "sync", this.addOne, this );
		this.model.fetch();
		this.render();
	},
	addOne: function( item ){
		this.$el.append( this.template( this.model.toJSON() ) );
	},
	onEdit: function(e){
	  e.preventDefault();
	  if( e.currentTarget.textContent == "Edit" ){
	  	e.currentTarget.textContent = "Save";
		  this.$el.find( "#timePlan" ).removeClass( "hidden" );
		  this.$el.find( "#timePlan" ).val( this.$el.find("#timeReadOnly").text() );
		  this.$el.find( "#timeReadOnly" ).addClass( "hidden" );
		}
		else{
	  	e.currentTarget.textContent = "Edit";
		  this.$el.find( "#timePlan" ).addClass( "hidden" );
		  this.$el.find( "#timeReadOnly" ).removeClass( "hidden" );
		  
		  var t = this.$el.find( "#timePlan" ).val();
		  this.$el.find( "#timeReadOnly" ).text( t );
		  this.model.set({timeplan: t});
			this.model.save();
		}; 
	}
});

app.JournalView = Backbone.View.extend({
	el: "#journalList",
	collection: new app.collJournal(),
	template: Handlebars.compile( $("#idJournalItem").html() ),
	initialize: function(){
		this.collection.on( "sync", this.addList, this );
		this.collection.fetch();
		this.render();
	},
	addList: function( list ){
	  list.each( this.addOne, this );
	},
	addOne: function( item ){
		this.$el.append( this.template( item.toJSON() ) );
	},
	Refresh: function(){
		this.collection.reset();
		this.render();
	}
});

$(document).ready(function() {
  //'use strict';
	app.listPoint = new app.PointsView();
	app.pointTime = new app.PointTimeView();
	app.listJournal = new app.JournalView();
	//$("#tabBtnJournal").on("click", app.listJournal.Refresh);
});
