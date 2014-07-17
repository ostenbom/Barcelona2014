/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};



  $(document).on('pagebeforeshow', '#home', function(){     


        $(document).ready(function() {
		 
  $.simpleWeather({
    location: 'Barcelona',
    woeid: '',
    unit: 'f',
	timeout: 1,
    success: function(weather) {
	  html =  '<h3 class="ui-bar ui-bar-a" style="background-color:#b02335">Todays weather in Barcelona:</h3>'
      html += '<a class="ui-shadow ui-btn ui-corner-all">'+weather.alt.temp+'&deg;'+weather.alt.unit+'</a>';
      html += '<a class="ui-shadow ui-btn ui-corner-all">'+weather.currently+'</a>';
      html += '<h3 class="ui-bar ui-bar-a">Tomorrows forecast:</h3>'
      html += '<a class="ui-shadow ui-btn ui-corner-all">'+weather.forecast[1].text+'</a>';
	  html += '<div class="ui-grid-a">'
      html += '<div class="ui-block-a"><a class="ui-shadow ui-btn ui-corner-all">High: '+weather.forecast[1].alt.high+'</a></div>';
      html += '<div class="ui-block-b"><a class="ui-shadow ui-btn ui-corner-all">Low: '+weather.forecast[1].alt.low+'</a></div></div>';
	  
	 
      $("#weather").html(html);
	  
    },
    error: function(error) {
      $("#weather").html('<p>You dont seem to be connencted to the internet!</p>');
    }
  
  });
		
		
});

    });



 
 
 
 
 $(document).on('pageinit', '#articles', function(){      
    
            
            
            $.ajax({
                url: "http://www.barcelonaismedia.com/api/get_category_posts/?id=3",
                dataType: "jsonp",
                async: true,
                success: function (result) {
                    ajax.parseJSONP(result);
                },
                error: function (request,error) {
					$('#movie-list').html('<img src="img/sad.png" style="width: 100%;" />');
                }
            });          
            
});

$(document).on('pagebeforeshow', '#headline', function(){      
    $('#movie-data').empty();
    $.each(movieInfo.result, function(i, row) {
        if(row.id == movieInfo.id) {
            var movieHandler = Handlebars.compile($("#movie-template").html());
            $('#movie-data').html(movieHandler(row));                
        } 
    });          
    $('#movie-data').listview('refresh');     
});

$(document).on('vclick', '#movie-list li a', function(){  
    movieInfo.id = $(this).attr('data-id');
    $.mobile.changePage( "#headline", { transition: "slide", changeHash: false });
});

var movieInfo = {
    id : null,
    result : null
}

var ajax = {  
    parseJSONP:function(result){  
        movieInfo.result = result.posts;
        $('#movie-list').empty(); 
        var movieListHandler = Handlebars.compile($("#movies-template").html());
        $('#movie-list').html(movieListHandler(result.posts));         
        $('#movie-list').listview('refresh');
    }
}







 $(document).on('pageinit', '#amts', function(){      
    
            
            
            $.ajax({
                url: "http://www.barcelonaismedia.com/api/get_category_posts/?id=11",
                dataType: "jsonp",
                async: true,
                success: function (result) {
                    ajaxamts.parseJSONPamts(result);
                },
                error: function (request,error) {
                    $('#amts-list').html('<img src="img/sad.png" style="width: 100%;" />');
                }
            });          
            
});

$(document).on('pagebeforeshow', '#amts-headline', function(){      
    $('#amts-data').empty();
    $.each(amtsInfo.result, function(i, row) {
        if(row.id == amtsInfo.id) {
            var amtsHandler = Handlebars.compile($("#amtsv-template").html());
            $('#amts-data').html(amtsHandler(row));                
        } 
    });          
    $('#amts-data').listview('refresh');     
});

$(document).on('vclick', '#amts-list li a', function(){  
    amtsInfo.id = $(this).attr('data-id');
    $.mobile.changePage( "#amts-headline", { transition: "slide", changeHash: false });
});

var amtsInfo = {
    id : null,
    result : null
}

var ajaxamts = {  
    parseJSONPamts:function(result){  
        amtsInfo.result = result.posts;
        $('#amts-list').empty(); 
        var amtsListHandler = Handlebars.compile($("#amts-template").html());
        $('#amts-list').html(amtsListHandler(result.posts));         
        $('#amts-list').listview('refresh');
    }
}










$(document).on('pagebeforeshow', '#photos', function(){
    parseRSS(); 
});

function parseRSS() {
	 $.ajax({
    url: 'http://www.barcelonaismedia.com/api/get_category_posts/?id=10',
    type: 'GET',
    dataType: 'json',
    success: function(data){
      console.log(data);
	  showData(data);
    },
    error: function(data){
     $('#articleHandlebars').html('<img src="img/sad.png" style="width: 100%;" />');
    }
  });
}

function showData(data)
{
 var source   = $("#articles-template").html();
  var template = Handlebars.compile(source);
  var html = template(data);
  $("#articleHandlebars").html(html);	
  $("#listview-content").trigger('create');  
  $("#photos").trigger('pagecreate');
  $("#articleHandlebars ul").listview('refresh');
  $("#articleHandlebars ul").listview().listview('refresh');
 }
 
 
$( document ).on( "pageinit", "#home", function() {
    $( document ).on( "swiperight", "#home", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swiperight"  ) {
                $( "#homepanel" ).panel( "open" );
            } 
        }
    });
});

$( document ).on( "pageinit", "#videos", function() {
    $( document ).on( "swiperight", "#videos", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swiperight"  ) {
                $( "#videospanel" ).panel( "open" );
            } 
        }
    });
});


$( document ).on( "pageinit", "#maps", function() {
    $( document ).on( "swiperight", "#maps", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swiperight"  ) {
                $( "#mapspanel" ).panel( "open" );
            } 
        }
    });
});


$( document ).on( "pageinit", "#photos", function() {
    $( document ).on( "swiperight", "#photos", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swiperight"  ) {
                $( "#photospanel" ).panel( "open" );
            } 
        }
    });
});


$( document ).on( "pageinit", "#articles", function() {
    $( document ).on( "swiperight", "#articles", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swiperight"  ) {
                $( "#articlespanel" ).panel( "open" );
            } 
        }
    });
});


$( document ).on( "pageinit", "#amts", function() {
    $( document ).on( "swiperight", "#amts", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swiperight"  ) {
                $( "#amtspanel" ).panel( "open" );
            } 
        }
    });
});



$( document ).on( "pageinit", "#schedule", function() {
    $( document ).on( "swiperight", "#schedule", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swiperight"  ) {
                $( "#schedulepanel" ).panel( "open" );
            } 
        }
    });
});


$( document ).on( "pageinit", "#prepkit", function() {
    $( document ).on( "swiperight", "#prepkit", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swiperight"  ) {
                $( "#preppanel" ).panel( "open" );
            } 
        }
    });
});


$( document ).on( "pageinit", "#contact", function() {
    $( document ).on( "swiperight", "#contact", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swiperight"  ) {
                $( "#contactpanel" ).panel( "open" );
            } 
        }
    });
});


