// JavaScript Document

blog: function(){
  $.ajax({
    url: 'http://www.barcelonaismedia.com/api/get_recent_posts/',
    type: 'GET',
    dataType: 'json',
    success: function(data){
      console.log(data);
    },
    error: function(data){
      console.log(data);
    }
  });
}// JavaScript Document