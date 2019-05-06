
var temp; 
var windspeed;



$(document).ready(function(){


    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=imperial&APPID=85b7adbd780565753e6f31533c85a64f', 
        dataType: 'jsonp',
        success: function(results){
            temp = results.main.temp;
            windspeed = results.wind.speed;
            newyorkweather();
        }
    });
    

    function newyorkweather(){
        $('#newyorktemp').append(temp + '\xB0');
        $('#newyorkwind').append(windspeed + ' mph');
    } 

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3128832&units=imperial&APPID=85b7adbd780565753e6f31533c85a64f', 
        dataType: 'jsonp',
        success: function(results){
            temp = results.main.temp;
            windspeed = results.wind.speed;
            madridweather();
        }
    });
    

    function madridweather(){
        $('#madridtemp').append(temp + '\xB0');
        $('#madridwind').append(windspeed + ' mph');
    } 

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2038349&units=imperial&APPID=85b7adbd780565753e6f31533c85a64f', 
        success: function(results){
            temp = results.main.temp;
            windspeed = results.wind.speed;
            beijingweather();
        }
    });
    

    function beijingweather(){
        $('#beijingtemp').append(temp + '\xB0');
        $('#beijingwind').append(windspeed + ' mph');
    } 

    var currentTime = new Date();
    var month = currentTime.getMonth();
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    $('.date').append(month + "/" + day + "/" + year);  


});

var e = document.getElementById('newyork');
e.onmouseover = function() {
  document.getElementById('newyork_popup').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('newyork_popup').style.display = 'none';
}







