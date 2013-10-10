var expander = {
	states: { collapsed: 'collapsed', expanded: 'expanded', back: 'back' },

	state: '',

	init: function(config) {
		this.state = config.state;
	},


	events: {
		onclick: function() {
			$('.expander .expander-char').click(function() {

				if( $(this).hasClass('back') ) {
					document.location.hash = '';
					$(this).removeClass('back');
					if( $('.expander-char').hasClass('expanded') )
						$(this).html('-');
					else
						$(this).html('+');
					
					return;
				}

				// else

				$(this).toggleClass('expanded');

				$('.content-title').toggleClass('expanded-card');
				$('.content-preview').toggleClass('expanded-card');

				if ($(this).hasClass('expanded'))
					$(this).html('-');
				else
					$(this).html('+');
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