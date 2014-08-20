//$(document).ready(function() {

var app = app || {};

app.PointView = Backbone.View.extend({
	el: 'tbody',
	model: app.PointModel,
	template: Handlebars.compile( $("#rows").html() ),
	initialize: function(){
		this.model.fetch();
		//this.render();
	},
	render: function(){
		var model = this.model.toJSON();
		var temp = this.template( model );
		this.$el.html( temp );
		return this;
	}
});

app.PointsView = Backbone.View.extend({
	el: 'body',
	model: app.PointModel,
	template: Handlebars.compile( $("#table").html() ),
	initialize: function(){
		this.render();
	},
	render: function(){
	  this.collection.fetch();
		this.$el.html( this.template() );
		this.collection.each( function(point){
		  console.log("test");
			console.log(point);
			var pointView = new app.PointView({model: point});
			this.$el.append( pointView.render() );
		}	,this);
		return this;
	}
});

//});


