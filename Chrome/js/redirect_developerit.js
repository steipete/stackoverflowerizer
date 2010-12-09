var soResults = document.querySelectorAll('div.post-footer a[href^="http://stackoverflow.com/questions/"]');
document.location = soResults.item(0).href;