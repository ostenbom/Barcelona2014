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
        $(document).ready(function () {
            $('#weatherbarca').weatherfeed(['SPXX0015']);
        });
    });

  $(document).on('pagebeforeshow', '#home', function(){       
        $(document).ready(function() {
  $.simpleWeather({
    location: 'Barcelona',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.alt.temp+'&deg;'+weather.alt.unit+'</h2>';
	  html += '<div class="ui-grid-b">'
      html += '<div class="ui-block-a"><a class="ui-shadow ui-btn ui-corner-all">'+weather.city+'</a></div>';
      html += '<div class="ui-block-b"><a class="ui-shadow ui-btn ui-corner-all">'+weather.currently+'</a></div>';
      html += '<div class="ui-block-c"><a class="ui-shadow ui-btn ui-corner-all">Sunset: '+weather.sunset+'</a></div></div>';
      html += '<h3>Tomorrow</h3>'
      html += '<ul><li>High: '+weather.forecast[1].alt.high+'</li>';
      html += '<li class="currently">'+weather.forecast[1].text+'</li>';
      html += '<li>Low: '+weather.forecast[1].alt.low+'</li></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});

    });

$(function() {
    var poi = "41.904080,1.666449";
    $('#map_canvas').gmap({
        'zoom': 7
    }).bind('init', function(event, map) {
        $('#map_canvas').gmap('addMarker', {
            'position': poi,
            'bounds': true
        }).click(function() {
            content = 'Teambuildning venue';
            $('#map_canvas').gmap('openInfoWindow', {
                'content': content
            }, this);
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
                    alert('Network error has occurred please try again!');
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
                    alert('Network error has occurred please try again!');
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



