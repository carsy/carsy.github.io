var menu = {
	events: {
		onclick: function() {
			$('.menu-item').click(function(e) {
				var nav_item = $(this).attr('class').split(' ')[1].split('-')[1];

				if( $(this).hasClass('expanded') ) {
					window.location.hash = '';
					expander.events.backToExpander();
					$(this).removeClass('expanded');

					e.preventDefault();
					return;
				}

				$('.menu-item.expanded').removeClass('expanded');
				$(this).addClass('expanded');


				nav.events.expandItem(nav_item);
			});
		},

		onhover: function() {
			$('.menu-item').hover(function() {
				if( $('.expander .expanded-char').hasClass('expanded') )
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