
$(document).ready(function(){
	var nav = {
		init: function(config) {
		},

		events: {
			navItemHover: function() {
				$('.item-content').mouseover(function() {
					console.log('mouseover')
				});
				$('.item-content').mouseout(function() {
					console.log('mouseout')
				});
			},

			loadEvents: function() {
				this.navItemHover();
			}
		}
	}

	nav.events.loadEvents();

});