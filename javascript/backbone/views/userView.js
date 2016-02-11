var UserView = Backbone.View.extend({
	tagName: "p",
	className: "user",
	
	initialize: function() {
		this.listenTo (this.model, "change", "render");
	},
	
	render: function() {
		this.$el.html(this.model.get("first_name"));
	}
});