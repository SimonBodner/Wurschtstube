var electionRouter = new (Backbone.Router.extend({
	routes: {
		":accessToken/choices": 	"choice"
	},

	choice: function(accessToken) {

		console.log(accessToken);
		that = this;
		this.user.fetch({data:{access_token: accessToken}});
		this.election.fetch({
			data: {access_token: accessToken},
			success: function(model, response, options) {
				var electionView = new ElectionView({model: model});
				electionView.render();
				$("body").append(electionView.el);

				var userView = new UserView({model: that.user});
				userView.render();
				$(electionView.el).after(userView.el);


				var optionList = this.options;
				var optionListView = new OptionListView({
					collection: optionList
				});


				optionList.fetch();
				optionListView.render();
				$("body").append(optionListView.el);

			}
		});

	},

	start: function() {
		Backbone.history.start();
	},

	initialize: function() {
		this.user = new userModel();
		this.election = new electionModel();
		this.options = new OptionCollection();
		window.options = this.options;
	}

}));

