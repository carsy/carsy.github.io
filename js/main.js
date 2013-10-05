
$(document).ready(function(){
	var nav = {
		init: function(config) {
		},

		eventHandlers: {
			expanderClick: function() {
				$('.expander div').click(function() {
					var expander = $(this);

					expander.toggleClass('expanded');

					$('.content-title, .content-preview').toggleClass('expanded-card');

					if (expander.hasClass('expanded'))
						expander.html('-');
					else
						expander.html('+');
				});
			},

			expandOnHover: function() {

			},

			load: function() {
				this.expanderClick();
			}
		}
	}

	nav.eventHandlers.load();

});