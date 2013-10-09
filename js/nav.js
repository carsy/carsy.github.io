var nav = {
	menuEvents: {
		menuHover: function() {
			$('.menu-item').hover(function() {
				if( $('.expander div').hasClass('expanded') )
					return;

				var nav_item = $('.nav-' + $(this).attr('class').split(' ')[1].split('-')[1]);

				$('.content-title', nav_item).toggleClass('expanded-card');
				$('.content-preview', nav_item).toggleClass('expanded-card');
			});
		},

		menuClick: function() {
			$('.menu-item').click(function(e) {
				var nav_item = $(this).attr('class').split(' ')[1].split('-')[1];
				window.location.hash = '#' + nav_item;

				nav.navEvents.expandItem(nav_item);
			});
		},

		load: function() {
			this.menuHover();
			this.menuClick();
		}
	},

	navEvents: {
		expanderClick: function() {
			$('.expander div').click(function() {
				var expander = $(this);

				expander.toggleClass('expanded');

				$('.content-preview').toggleClass('expanded-card');

				if (expander.hasClass('expanded'))
					expander.html('-');
				else
					expander.html('+');
			});
		},

		expandItem: function(nav_item) {
			$('.nav').hide();
			content.show(nav_item);
		},

		load: function() {
			this.expanderClick();
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
		this.menuEvents.load();
		this.navEvents.load();

		$('.nav-item, .nav').show();
	}
}