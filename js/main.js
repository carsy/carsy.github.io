
$(document).ready(function(){
	var nav = {
		init: function(config) {
		},

		events: {
			navItemHover: function() {
				$('.nav-item').mouseover(function() {
					$(this).slideUp();
				});
			},

			loadEvents: function() {
				this.navItemHover();
			}
		}
	}

	// nav.events.loadEvents();

});