var OptionView = Backbone.View.extend({
	tagName: "li",
	className: "option",

	initialize: function() {
		this.listenTo (this.model, "change", this.render);
	},

	render: function() {
		this.$el.html(this.model.get("title"));
	}
});




var OptionListView = Backbone.View.extend({
	tagName: "ul",
	className: "optionList",

	template: "<li><button>Vorschlag eintragen</button></li>",

	events: {
		"click button" : "addOption"
	},

	initialize: function() {
		this.listenTo (this.collection, "add", this.addOne);
	},

	addOne: function(itemToAdd) {
		var optView = new OptionView({model: itemToAdd});
		optView.render();
		this.$el.find("button").parent().before(optView.el);
	},

	render: function() {
		this.$el.html(this.template);
		this.collection.forEach(this.addOne, this);
	},

	addOption: function() {
		alert("New Option");
		this.collection.create({
			title: "Neues Model",
			link: "www.google.at"
		});
	}
});

