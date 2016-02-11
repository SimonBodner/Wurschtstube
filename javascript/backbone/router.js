var electionRouter = Backbone.Router.extend({
	routes: {
		":accessToken/choices": 	"choice"
	},

	choice: function(accessToken) {
		console.log(accessToken);
	}

});

