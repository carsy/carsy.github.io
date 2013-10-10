
$(document).ready(function() {
	expander.load();
	menu.load();
	nav.load();
	content.load();

	window.onhashchange = function() {
		if( !document.location.hash ) {
			content.hide(nav.show);
		}
		else {
			nav.events.expandItem(document.location.hash.substr(1));
		}
	}

	window.onhashchange();
});