
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

    function newyork_winds(){
        if (windspeed<1) ('#ny_humidity').css('animationDuration', '15s'); 
        else if (windspeed<2) $('#ny_humidity').css('animationDuration', '14s');
        else if (windspeed<3) $('#ny_humidity').css('animationDuration', '14s');
        else if (windspeed<4) $('#ny_humidity').css('animationDuration', '14s');
        else if (windspeed<5) $('#ny_humidity').css('animationDuration', '14s');
        else if (windspeed<6) $('#ny_humidity').css('animationDuration', '14s');
        else if (windspeed<7) $('#ny_humidity').css('animationDuration', '14s');
        else if (windspeed<8) $('#ny_humidity').css('animationDuration', '14s');
        else if (windspeed<9) $('#ny_humidity').css('animationDuration', '14s');
        else if (windspeed<10) $('#ny_humidity').css('animationDuration', '14s');
        else if (windspeed<11) $('#ny_humidity').css('animationDuration', '14s');
        else if (windspeed<12) $('#ny_humidity').css('animationDuration', '14s');
        else if (windspeed<13) $('#ny_humidity').css('animationDuration', '14s');
        else if (windspeed<14) $('#ny_humidity').css('animationDuration', '14s');
        else if (windspeed<15) $('#ny_humidity').css('animationDuration', '14s');
        else if (windspeed<16) $('#ny_humidity').css('animationDuration', '14s');
        else if (windspeed>16) $('#ny_humidity').css('animationDuration', '14s');  

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



$( document ).ready(function() {
  
    $("#newyork_humidity").css("animation-duration", "14s");

    

});
   


