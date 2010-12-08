// basic redirect for non-google-instant
var soResults = document.querySelectorAll('h3.r a.l')
for(var i = 0 ; i < soResults.length; i++) {
	var result = soResults.item(i);

	// translate *efreedom.com/Question/1-<id> to *stackoverflow.com/questions/<id>
	var re = /http:\/\/efreedom.com\/Question\/1-(\d+)/;
	result.href = unescape(result.href).replace(re, "http://stackoverflow.com/questions/$1");

	// translate *www.answerspice.com/c119/<id> to *stackoverflow.com/questions/<id>
	var re = /http:\/\/www.answerspice.com\/c119\/(\d+)/;
	result.href = result.href.replace(re, "http://stackoverflow.com/questions/$1");
	
	// translate *www.questionhub.com/StackOverflow/<id> to *stackoverflow.com/questions/<id>
	var re = /http:\/\/www.questionhub.com\/StackOverflow\/(\d+)/;
	result.href = result.href.replace(re, "http://stackoverflow.com/questions/$1");	

	// stop google phoning home
	result.onmousedown = null;
}