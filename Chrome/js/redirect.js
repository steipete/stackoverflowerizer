var soResults = document.querySelectorAll('a[href^="http://stackoverflow.com/questions/"]');
document.location = soResults.item(0).href;