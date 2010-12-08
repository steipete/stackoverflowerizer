//alert('booo');

// translate *efreedom.com/Question/1-<id> to *stackoverflow.com/questions/<id>
var soResults = document.querySelectorAll('a[href*="efreedom.com/Question/"], a[href*="http%3A%2F%2Fefreedom.com%2FQuestion%2F1-"')
for(var i = 0 ; i < soResults.length; i++) {
	var result = soResults.item(i);
	console.log(result);
	var re = /http:\/\/efreedom.com\/Question\/1-(\d+)/;
	result.href = unescape(result.href).replace(re, "http://stackoverflow.com/questions/$1");
	result.onmousedown = null;
	console.log(result.href);
}

// translate *www.answerspice.com/c119/<id> to *stackoverflow.com/questions/<id>
soResults = document.querySelectorAll('a[href*="www.answerspice.com/c119/"]')
for(var i = 0 ; i < soResults.length; i++) {
	var result = soResults.item(i);
	var re = /http:\/\/www.answerspice.com\/c119\/(\d+)/;
	result.href = result.href.replace(re, "http://stackoverflow.com/questions/$1");
	//console.log(result.href);
}

// translate *www.questionhub.com/StackOverflow/<id> to *stackoverflow.com/questions/<id>
soResults = document.querySelectorAll('a[href*="www.questionhub.com/StackOverflow/"]')
for(var i = 0 ; i < soResults.length; i++) {
	var result = soResults.item(i);
	var re = /http:\/\/www.questionhub.com\/StackOverflow\/(\d+)/;
	result.href = result.href.replace(re, "http://stackoverflow.com/questions/$1");
	//console.log(result.href);
}