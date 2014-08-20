var app = app || {};

app.PointModel = Backbone.Model.extend({
  defaults: {
		id: null
	},
	url: function(){
	  return "/api/points/" + this.id;
	}
});

app.collPoints = Backbone.Collection.extend({
	model: app.PointModel,
	url: '/api/points'/*,
	initialize: function(){
		this.model = new app.PointModel();
		return this;
	}*/
});
