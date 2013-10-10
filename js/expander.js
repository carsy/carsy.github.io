var expander = {
	states: { collaped: 'collapsed', expanded: 'expanded', back: 'back' },

	init: function(config) {
		this.state = config.state;
	},

	state: '',

	events: {
		onclick: function() {
			$('.expander .expander-char').click(function() {
				var expander = $(this);

				if( expander.hasClass('back') ) {
					document.location.hash = '';
					expander.removeClass('back');
					expander.html('+');
					return;
				}
				
				// else

				expander.toggleClass('expanded');

				$('.content-preview').toggleClass('expanded-card');

				if (expander.hasClass('expanded'))
					expander.html('-');
				else
					expander.html('+');
			});
		},

		expanderToBack: function() {
			$('.expander .expander-char').addClass('back').html('←');
		},

		backToExpander: function() {
			$('.expander .expander-char').removeClass('back').html('+');
		}
		
	},

	load: function() {
		this.state = this.states.collapsed; // default
		this.events.onclick();
	}
}