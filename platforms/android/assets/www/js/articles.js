$(document).on('pagebeforeshow', '#listview-page', function(){
    parseRSS(); 
});

function parseRSS() {
	 $.ajax({
    url: 'http://www.barcelonaismedia.com/api/get_posts/',
    type: 'GET',
    dataType: 'json',
    success: function(data){
      console.log(data);
	  showData(data);
    },
    error: function(data){
      console.log(data);
    }
  });
}

function showData(data)
{
 var source   = $("#articles-template").html();
 		source = source.replace(/(&#8217;)/g, "'")
  var template = Handlebars.compile(source);
  var html = template(data);
  $("#articleHandlebars").html(html);	
  $("#listview-content").trigger('create');  
  $("#listview-page").trigger('pagecreate');
  $("#articleHandlebars ul").listview('refresh');
  $("#articleHandlebars ul").listview().listview('refresh');
 }