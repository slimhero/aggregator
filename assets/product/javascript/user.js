var app = app || {};

// history.start() must be executed after all modules have been registered which,
// depending on the lumbar config, might not be at this time.
$(document).ready(function() {
  Backbone.history.start();
});

app.StateModel = Backbone.Model.extend({
	url: function(){
		return "/api/state/"+ this.id; 
	}
});

app.collState = Backbone.Collection.extend({
	model: app.StateModel,
	url: "/api/state"
});

app.PointModel = Backbone.Model.extend({
	url: function(){
		return "/api/pointsmin/"+ this.id; 
	}
});

app.collPoints = Backbone.Collection.extend({
	model: app.PointModel,
	url: "/api/pointsmin/"
});

app.RADataModel = Backbone.Model.extend({
  defaults: {
		id: -1,
		msgid: 1, 
		room: 1,
		square: "",
		price: "",
		phone: "",
		subway: "",
		others: "",
		link: "",
		page: "",
		operdate: "",
		user: "", 
		state: 0	

	},
	url: function(){
		return "/api/data/" + this.id;
	}
});

app.collRAData = Backbone.Collection.extend({
	model: app.RADataModel,
	url: "/api/data",
	initialize: function(){
	  this.on("change:state", this.changeState, this );
	},
	changeState: function( model, val, options ){
	  console.log( "changeState" );
		console.log( model );
		console.log( val );
		console.log( options );
	}
});

app.RADataView = Backbone.View.extend({
	el: '#results',
	//model: new app.RADataModel(),
	model: app.RADataModel,
	template: Handlebars.compile( $("#dataResult").html() ),
	stateTemplate: Handlebars.compile( $("#stateList").html() ),
	appendToPage: function(){
		this.$el.append( this.template( this.model.toJSON() ) );
	  this.prepareData();
	},
	prepareData: function(){
		//this.$el.append( this.template( this.model.toJSON() ) );
		//this.refresh();
		
		var stateCollection = app.states;
		if( stateCollection.length > 0 ){
			stateCollection.each( function(i){
				this.$el.find("#" + this.model.id + " #states").append( this.stateTemplate( i.toJSON() ) );
				var z = "#" + this.model.id + " .stateMenu[data='" + i.get("id") + "']";
				//Unbind 
				this.$el.find( z ).unbind();  
				//Bind
				this.$el.find( z ).bind( 
					'click',
					{
						el: this.$el.find("#"+this.model.id+" .btn-group>.btn#changedState" ),
					},
					function(e){
						if( e.data.el ){
							e.data.el.attr("data", $(e.currentTarget).attr("data") );
							e.data.el.text( $(e.currentTarget).text() );
						}
					}
				);
			}, this);
		}
		$( "#"+this.model.id+ " #btnSaveChangedState" ).bind(
			"click",
			{
				that: this
			}, 
			this.saveChangedState 
		);
		
	},
	saveChangedState: function( e ){
		if( e.data.that ){
		  var that = e.data.that;
			var m = that.model;//.set({state})
			var el = that.$el.find("#"+that.model.id+" .btn-group>.btn#changedState" );
			var data = el.attr("data");
			var label = el.text();
			that.model.set({stateid: data, state: label });
		  that.model.save( undefined, {url: ("/api/data/state/" + that.model.id)} );
			
			that.refresh( that.model, that.template );
			that.prepareData();
		}
	},
	refresh: function( model, template ){
		//this.$el.append( this.template( this.model.toJSON() ) );
		var htmlCode = $( template( model.toJSON() ) ).html();
	  $("section#" + model.id ).html( htmlCode );	
	}
});

app.DataListView = Backbone.View.extend({
	//model: new app.DataModel(),
	el: '#results',
	//model: new app.RADataModel(),
	collection: new app.collRAData(),
	initialize: function(){
		this.onAddAll( this.collection );
	},
	onAddAll: function( items ){
	  if( !Array.isArray( items ) ){
			items.each( this.onAddOne, this );
		};
	},
	onFilter: function( items ){
		_.each( items, this.onAddOne );
	},
	onAddOne: function( item ){
		var v = new app.RADataView({
			model: item, 
			stateCollection: app.states//, 
			//collection: app.collData
		});
		v.appendToPage();
	},
	remove: function(){
		$( this.$el ).empty();
	}
});

app.FilterModel = Backbone.Model.extend({});

app.FullView = Backbone.View.extend({
  el: "#filterPlace",
	model: app.FilterModel,
  initialize: function(){
	  app.states =  new app.collState();
		app.states.fetch();
  	app.states.on( "add", this.setStateToFilter, this ); 

		app.points =  new app.collPoints();
		app.points.fetch();
		app.points.on( "add", this.setPointToFilter, this ); 

		app.collData = new app.collRAData();
		app.collData.on( "sync", this.setCollection, app.collData );
		app.collData.fetch();
	
		$("#btnFilter").bind("click", {that: this }, this.setFilter);
		$("#btnRefresh").bind("click", {that: this }, this.setData);
		this.render();
	},
	setCollection: function( items ){
		app.collFiltered = items;
		console.log("setCollection");
		app.dataList = new app.DataListView({ collection: app.collFiltered });
	},
	setData: function(e){
	  if( e.data.that ){
			var that = e.data.that;
			that.clearFilter();
		}
		else{
	  	this.clearFilter();
		}
		app.collData.fetch();
	},
	clearFilter: function(){
		$("#filterState").val( "Все" );
		$("#filterSource").val( "Все" );
	},
	setFilter: function(){
	  console.log("setFilter");
		// Clear data
		app.collFiltered = [];
		app.dataList.remove();
		app.dataList.render();
		delete app.collFiltered;
		
		var f = {};
		var key;
		var val;
		// Check filter
		if( $("#filterState>option:selected").attr("key") != 0 ){
			val = $("#filterState>option:selected").val();
			key = $("#filterState>option:selected").attr("name");
			f[key]=val;//parseInt(val);
		}
		else{
			key = $("#filterState>option:selected").attr("name");
			delete f[key];
		}
		if( $("#filterSource>option:selected").attr("key") != 0 ){
			val = $("#filterSource>option:selected").val();
			key = $("#filterSource>option:selected").attr("name");
			f[key]=val;//parseInt(val);
		}
		else{
			key = $("#filterSource>option:selected").attr("name");
			delete f[key];
		}

		if( _.isEqual(f,{}) ){
			app.dataList = new app.DataListView({ collection: app.collData });
		}
		else {
			app.collFiltered = app.collData.where( f );
			// Show filtered data
			app.dataList = new app.DataListView({ collection: app.collFiltered });
			app.dataList.onFilter( app.dataList.collection );
		}
	},
	setStateToFilter: function( item ){
		$("#filterState").append( 
		  "<option key='"+ item.id + "' name='state'>" + item.get("name") + "</option>"
		);
	},
	setPointToFilter: function( item ){
		$("#filterSource").append( 
		  "<option key='"+ item.id + "' name='source'>" + item.get("label") + "</option>"
		);
	}
});


$(document).ready(function() {
	try{
		console.log("q");
		app.full = new app.FullView();
	}
	catch(e){
		console.log( e.message );
	}
});
