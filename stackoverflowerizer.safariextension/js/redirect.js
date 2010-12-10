function redirectToStackOverflow() {
	var soResults = document.querySelectorAll('a[href^="http://stackoverflow.com/questions/"]');
	document.location = soResults.item(0).href;
}

document.addEventListener("onload", redirectToStackOverflow, true);