
$(document).ready(function() {
	expander.load();
	menu.load();
	nav.load();
	content.load();

	window.onhashchange = function() { // TODO
		if( !document.location.hash ) {
			nav.show();
		}
		else {
			content.show(document.location.hash.substr(1));
		}
	}
});