var content = {

	show: function(nav_item, callback) {
		$('.content-item:not(.content-' + nav_item + ')').hide();
		$('.content-' + nav_item).show();
		$('.content').show();

		if ( callback ) 
			callback();
	},

	hide: function(callback) {
		$('.content').hide();

		if( callback )
			callback();
	},

	load: function() {
	}
}