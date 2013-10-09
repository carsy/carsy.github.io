var content = {

	show: function(nav_item) {
		$('.content-item:not(.content-' + nav_item + ')').hide();
		$('.content-' + nav_item).show();
	},

	hide: function() {
		$('.content-item').hide();
	},

	load: function() {
	}
}