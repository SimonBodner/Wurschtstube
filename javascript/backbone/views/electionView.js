var ElectionView = Backbone.View.extend({
	tagName: "h1",
	className: "election",
	
	render: function() {
		this.$el.html(this.model.get("date"));
	}
});