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

$(document).on('pagebeforeshow', '#listview-page', function(){
    parseRSS(); 
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
	  alert('Network error has occurred please try again!');
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
  $("#listview-page").trigger('pagecreate');
  $("#articleHandlebars ul").listview('refresh');
  $("#articleHandlebars ul").listview().listview('refresh');
 }
 
 
 
 
 
 $(document).on('pageinit', '#articles', function(){      
    
            
            
            $.ajax({
                url: "http://www.barcelonaismedia.com/api/get_posts/",
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
