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
	/*,
	initialize: function(){
		if( !this.id ){
			this.id = this.cid;
		} 
	}
	*/
});


app.collPoints = Backbone.Collection.extend({
	model: app.PointModel,
	url: '/api/points'
});


app.PointView = Backbone.View.extend({
	el: '#points',
	//model: app.PointModel,
	collection: new app.collPoints(),
	template: Handlebars.compile( $("#point").html() ),
	//initialize: function(){
	  //this.listenTo(this.model, 'change', this.render);
		//this.model.fetch();
		//this.render();
	//},
	events: {
	  //"click #btn
		"click #btnEdit": "editModel", //
		"click #btnDel": "deleteModel",
		"click #btnSave": "saveModel",         //
		"click #btnCancel": "cancelModel"
	},
	//
	initialize: function(){
	  this.collection.fetch();
		this.listenTo(this.collection, 'add', this.addOne);
	  
		if( !this.model.get("id") ){
		  this.model.set({ id: this.model.cid });
		}
		_.bindAll(this, 'cleanup');
		this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.destroy);
	},
	cleanup: function(){
	  this.undelegateEvents();
    $(this.el).empty();
	},

	add: function(){
	  this.collection.each( 
		    //this.collection, 
				function(item){
					this.addOne(item);
				}, 
				this
		);
	},

	addOne: function(item){
	  var m = item.toJSON();
		this.$el.append( this.template( m ) );
	},

	render: function(){
		this.renderF( this );
		return this;
	},
	
	renderF: function( that ){
		var m = that.model.toJSON();
		var temp = that.template( m );
		//this.$el.html( temp );
		if( $("div #panel" + that.model.attributes['id']).length == 0 ){
			this.$el.append( temp );
		}
		else{
		  $(temp).replaceAll( $("div #panel"+that.model.attributes['id']) );
		}

		var editor = ace.edit(("editor"+that.model.attributes['id']));
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/ruby");
		editor.setReadOnly(true);
		//$(that.$el.find( ".btnEdit#btnEdit" )).on("click", {entity: that}, that.editModel );
		//$(that.$el.find( ".btnSave#btnSave" )).on("click", {entity: that}, that.saveModel );
		//$(that.$el.find( ".btnTest#btnTest" )).on("click", {entity: that}, that.test );
	},

	test: function(e){
		var that = e.data.entity;
		var id = that.model.attributes["id"];
		$( "#testModal #textarea").text( "" );
		$( "#testModal #textarea").html( "" );
		$( "#testModal #textarea").append( "START...\n" );
		var z = {parser: (ace.edit(("editor"+id)).getSession().getValue())};
		$.post( 
		    "api/points/test/"+id, 
				//{parser: (ace.edit(("editor"+id)).getSession().getValue())},
				//z,
				JSON.stringify(z),
				'json'
		)
		.done(function( data ){
			if( data.error ){
				$( "#testModal #textarea").html( "" );
				$( "#testModal #textarea").append( "<h4>" + _.escape( data.error ) + "\n</h4>" );
				$( "#testModal #textarea").append( "<p>" + _.escape( data.trace ) + "</p>" );
			}
		})
		.fail(function( data ){
		  alert( data );
		});
	},
	editModel: function(e){
/*
		that = e.data.entity;
	  that.$(".show_mode").addClass('hidden');
		//that.$("#btnEdit").addClass('hidden');
		//that.$("#btnDel").addClass('hidden');
		that.$(".btnTest#btnTest").removeClass('hidden');
		that.$(".editorAction").removeClass('hidden');
	  that.$(".edit_mode").removeClass('hidden');

		var editor = ace.edit(("editor"+that.model.attributes["id"]));
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/ruby");
		editor.setReadOnly(false);
*/
		this.$el(".show_mode").addClass('hidden');
		that.$el(".btnTest#btnTest").removeClass('hidden');
		that.$el(".editorAction").removeClass('hidden');
	  that.$el(".edit_mode").removeClass('hidden');

	},
	cancelModel: function(){
	  this.$(".show_mode").removeClass('hidden');
		this.$("#btnEdit").removeClass('hidden');
		this.$(".editorAction").addClass('hidden');
		this.$("#btnDel").removeClass('hidden');
	  this.$(".edit_mode").addClass('hidden');
		this.$(".btnTest#btnTest").addClass('hidden');
	},
	deleteModel: function(){
		window.alert("!");
	},
	saveModel: function(e){
	  that = e.data.entity;
		id = that.model.get("id");
	  //go to 
		that.model.set({
			label: that.$("#panel"+id+" form #label").val(),
			point: that.$("#panel"+id+" form #point").val(),
			code: that.$( "#panel"+id+" form #code").val(),
			login: that.$("#panel"+id+" form #login").val(),
			pwd: that.$(  "#panel"+id+" form #pwd").val(),
			parser: ace.edit(("editor"+that.model.attributes["id"])).getSession().getValue()
		});
	 
	  // Else id = -1 then it's new record
	  if( id == that.model.cid ){
			Backbone.sync( "create", that.model );
		}
		// Update exists model
		else{
			that.model.save();
		};
		// Change mode
		that.cancelModel();
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
	//collection: new app.collPoints(),
	//listView: [],
	view: new app.PointView(),
	template: Handlebars.compile( $("#pointsContent").html() ),
	initialize: function(){
	  //this.listenTo(this.collection, 'add', this.onAdd/*this.render*/);
		//this.collection.on( "add", this.onAdd, this );
		this.$el.append( this.template() );
	  //this.collection.fetch();
		this.render();
	},
	/*render: function(){
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
	  this.collection.reset();
		//_.each( this.listView, function(item){
		//	item.remove();
		//});
		this.collection.fetch();
		this.render();
	}*/

});
$(document).ready(function() {
	app.test_view = new app.PointsView(/*{collection: app.test_collRows}*/);
});
