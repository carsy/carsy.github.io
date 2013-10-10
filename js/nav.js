var nav = {

	events: {
		expandItem: function(nav_item) {
			$('.nav').hide();

			$('.menu-item.expanded').removeClass('expanded');
			$('.item-' + nav_item).addClass('expanded');

			content.show(nav_item);
			expander.events.expanderToBack();
		},

		load: function() {
		}
	},

	hide: function(callback) {
		$('.nav, .nav-item').hide();

		if( callback )
			callback();
	},

	show: function(callback) {
		$('.nav-item').show();
		$('.nav').show();

		if( callback )
			callback();
	},

	load: function() {
		this.events.load();

		$('.nav-item, .nav').show();
	}
}