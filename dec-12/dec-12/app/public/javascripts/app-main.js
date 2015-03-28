var fileToLI = function(fileName){
	return "<li>"+fileName+"</li>";
};
var onSearchDone = function(fileNamesHTML){	
	$('#result').html(fileNamesHTML);
};
var onSearch = function(){
	var path = $('#path').val();
	$.ajax('/list?path='+path).done(onSearchDone).error(function(err){
		$('#result').html(err.responseText);		
	});
};

var onMagic = function(){
	$.ajax('/magic.html').done(function(resultHtml){
		$('#magic').html(resultHtml);
	}).error(function(err){
		$('#result').html(err.responseText);		
	});
};

var onPageLoad = function(){
	$('#search').click(onSearch);
	$('#cadabra').click(onMagic);
}
$(document).ready(onPageLoad);