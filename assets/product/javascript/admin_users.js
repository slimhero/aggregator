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

app.UserModel = Backbone.Model.extend({
	defaults: {
		id:-1,
		lastname: "",
		secondname: "",
		name: "",
		login: "",
		operdate: null,
		state: "",
		stateid: -1
	},
	url: function(){
		return "/api/users/"+ this.id; 
	}
});

app.collUsers = Backbone.Collection.extend({
	model: app.UserModel,
	url: "/api/users"
});

app.UsersView = Backbone.View.extend({
	el: '#usersList',
	template: Handlebars.compile( $("#idUserItem").html() ),
	model: app.UserModel,
	//collection: new app.collUsers(),
	initialize: function(){
		/*
		app.users = new app.collUsers();
		app.users.fetch();
  	app.users.on( "add", this.setUsersData, this );
		*/
		this.collection.on("sync", this.setUsersData, this );
		this.collection.fetch();

		$("#btnSaveUser").bind("click", {that: this} ,this.saveNewUser);
		//$el.find('#btnSaveUser').on("click", this.saveNewUser );
	},
	events: {
		"click #btnSaveUser": "saveNewUser"
	},
	// Add items
	setUsersData: function(items){
	  console.log("asd");
	  if( !Array.isArray( items ) ){
			//items.each( this.setUserData, this );
			//items.models.each( this.setUserData, this );
	  	_.each( items.models, this.setUserData, this );
		};
	},
	// Add item
	setUserData: function(item){
		console.log( "xxx" );
		console.log( this.template( item.toJSON() ) );
		console.log( "yyy" );
		console.log( item.toJSON() );

		this.$el.append( this.template( item.toJSON() ) );
	},
	// Save user
	saveNewUser: function( e ){
		var strError = "";
		if( $("#first-name").val() == "" ){
			strError = "First name is not filled!";
		}
		else if( $("#second-name").val() == "" ){
			strError = "Second name is not filled!";
		}
		else if( $("#last-name").val() == "" ){
			strError = "Last name is not filled!";
		}
		else if( $("#login").val() == "" ){
			strError = "Login is not filled!";
		}
		/*else if( $("#pwd").val() == "" ){
			strError = "Password is not filled!";
		}*/
		;
		// Check error
		if( strError != "" ){
			window.alert( "ERROR: " + strError );
		}
		else{
		  // Create new user
			var user = new app.UserModel({
					lastname: $("#last-name").val(),
					secondname: $("#second-name").val(),
					name: $("#first-name").val(),
					login: $("#login").val()
			});
			// Save model
			if( user.id == -1 ){
				Backbone.sync( "create", user, { 
					success: function(model,response){
						e.data.that.addUser( e.data.that, new app.UserModel( model[0] ) );
					},
					error: function( model, response ){
						window.alert( response );
					}
				});
			}else{
				user.save();
				e.data.that.addUser( e.data.that, user );
			}
		}
	},
	clearForm: function(){
		// Clear data
		$("#first-name").val("");
		$("#second-name").val( "" );
		$("#last-name").val( "" );
		$("#login").val( "" );
		$("#pwd").val( "" );	
	},
	addUser: function( that, model ){
			// Add model to collection 
			that.collection.add( model );
			// To page
			that.setUserData( model );
			// Close modal window
			$("#addUser").modal( 'hide' );
			// Clear data
			that.clearForm();
	}
});

app.DataListView = Backbone.View.extend({
	//model: new app.DataModel(),
	el: '#results',
	//model: new app.RADataModel(),
	//collection: new app.collRAData(),
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
		$("#filterNew").bind("change",{that:this}, this.setNew );
		$("#filterMy").bind("change", {that: this}, this.setMy );
		$("#filterArchive").bind("change", {that: this}, this.setArchive );
		this.render();
	},
	// Set collection for view
	setCollection: function( items ){
		// From old version
		// Code:
		//app.collFiltered = items;
		// New:
		$("#filterNew").parent().addClass("active");	
		app.collFiltered = new app.collRAData( items.where({stateid: 1}) );
		//console.log("setCollection");
		
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
	clear: function(){
		// Clear data
		app.collFiltered = [];
		app.dataList.remove();
		app.dataList.render();
		delete app.collFiltered;
	},
	// Only new data
	setNew: function(e){
		console.log( "setNew" );

		// Close #filterPlace
		// when button has been clicked
		if( $(".in#filterPlace").length > 0 ){
			$("button[data-target='#filterPlace']").click();
		}
		
		var that = e.data.that;
		that.clear();

		app.collFiltered = app.collData.where( {stateid: 1} );
		// Show filtered data
		app.dataList = new app.DataListView({ collection: app.collFiltered });
		app.dataList.onFilter( app.dataList.collection );
	},
	// only My data
	setMy: function(e){
		console.log( "setMy" );
		
		// Close #filterPlace
		// when button has been clicked
		if( $(".in#filterPlace").length > 0 ){
			$("button[data-target='#filterPlace']").click();
		}

		var that = e.data.that;
		that.clear();

		console.log( "app.user.id=" + app.user.id );
		app.collFiltered = app.collData.where( {userid: app.user.id, stateid: 2} );
		// Show filtered data
		app.dataList = new app.DataListView({ collection: app.collFiltered });
		app.dataList.onFilter( app.dataList.collection );
	},

	// only Archive data
	setArchive: function(e){
		console.log( "setArchive" );
		
		// Close #filterPlace
		// when button has been clicked
		if( $(".in#filterPlace").length > 0 ){
			$("button[data-target='#filterPlace']").click();
		}

		var that = e.data.that;
		that.clear();

		console.log( "app.user.id=" + String(app.user.id) );
		console.log( app.collData.where( {userid: app.user.id, stateid: 4} ) );

		app.collFiltered = app.collData.where( {userid: app.user.id, stateid: 4} );
		// Show filtered data
		app.dataList = new app.DataListView({ collection: app.collFiltered });
		app.dataList.onFilter( app.dataList.collection );
	},

	setFilter: function(){
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
	  app.usersColl = new app.collUsers();
		app.users = new app.UsersView({collection: app.usersColl});
		//$("#filterNew").change();
		//$("#filterNew").addClass("active");
	}
	catch(e){
		console.log( e.message );
	}
});
