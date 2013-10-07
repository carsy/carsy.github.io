
$(document).ready(function(){
	var nav = {
		init: function(config) {
		},

		eventHandlers: {
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

			menuHover: function() {
				$('.menu-item').hover(function() {
					if( $('.expander div').hasClass('expanded') )
						return;

					var nav_item = $('#' + $(this).attr('class').split(' ')[1]);

					$('.content-title', nav_item).toggleClass('expanded-card');
					$('.content-preview', nav_item).toggleClass('expanded-card');
				});
			},

			load: function() {
				this.expanderClick();
				this.menuHover();
			}
		}
	}

	nav.eventHandlers.load();

});