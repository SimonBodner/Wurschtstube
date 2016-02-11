var electionRouter = new Backbone.Router({
	routes: {
		":accessToken/choices": 	"choice"
	},

	choice: function(accessToken) {
		console.log(accessToken);
	},
	
	start: function() {
		Backbone.history.start();
	}

});

