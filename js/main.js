
$(document).ready(function() {
	expander.load();
	nav.load();
	content.load();

	window.onhashchange = function() {
		if( !document.location.hash ) {
			nav.show();
		}
		else {
			content.show(document.location.hash.substr(1));
		}
	}
});