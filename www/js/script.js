$(document).on("pageinit", ".ui-page", function () {
	console.log('any page loaded');
});

$( document ).delegate("#home-page", "pageinit", function() {    
	console.log('home page loaded');
});

//beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
//complete: function() { $.mobile.hidePageLoadingMsg() }, //Hide spinner

$(document).ready(function(){
	$(document).bind('deviceready', function(){
		
	
		$.ajax({
			url: 'http://www.barcelonaismedia.com/api/get_posts/',
			type:'GET',
			dataType: 'json',
			timeout: 5000,
			success: function(data){
									console.log(data);
				},
			error: function(data){
			   console.log(data);
			}
		});
	});
});