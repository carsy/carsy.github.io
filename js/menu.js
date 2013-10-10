var menu = {
	events: {
		onclick: function() {
			$('.menu-item').click(function(e) {
				var nav_item = $(this).attr('class').split(' ')[1].split('-')[1];
				window.location.hash = '#' + nav_item;

				nav.events.expandItem(nav_item);
			});
		},

		onhover: function() {
			$('.menu-item').hover(function() {
				if( $('.expander div').hasClass('expanded') )
					return;

				var nav_item = $('.nav-' + $(this).attr('class').split(' ')[1].split('-')[1]);

				$('.content-title', nav_item).toggleClass('expanded-card');
				$('.content-preview', nav_item).toggleClass('expanded-card');
			});
		},

		load: function() {
			this.onclick();
			this.onhover();
		}
	},

	load: function() {
		this.events.load();
	}
}