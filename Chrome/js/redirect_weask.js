var soResults = document.querySelectorAll('div.author a[href^="http://stackoverflow.com/questions/"]');
document.location = soResults.item(0).href;