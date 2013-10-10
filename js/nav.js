var nav = {

	events: {
		expandItem: function(nav_item) {
			$('.nav').hide();
			expander.events.expanderToBack();
			content.show(nav_item);
		},

		load: function() {
			this.expandItem();
		}
	},

	hide: function() {
		$('.nav, .nav-item').hide();
	},

	show: function() {
		content.hide();
		$('.nav-item').show();
		$('.nav').show();
	},

	load: function() {
		this.events.load();

		$('.nav-item, .nav').show();
	}
}