
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



function newyorkweather(windspeed){
        if (windspeed<1) document.getElementById("ny_humidity").style.animationDuration = "15s"; 
        else if (windspeed<2) document.getElementById("ny_humidity").style.animationDuration = "14s";
        else if (windspeed<3) document.getElementById("ny_humidity").style.animationDuration = "13s";
        else if (windspeed<4) document.getElementById("ny_humidity").style.animationDuration = "12s";
        else if (windspeed<5) document.getElementById("ny_humidity").style.animationDuration = "11s";
        else if (windspeed<6) document.getElementById("ny_humidity").style.animationDuration = "10s";
        else if (windspeed<7) document.getElementById("ny_humidity").style.animationDuration = "9s";
        else if (windspeed<8) document.getElementById("ny_humidity").style.animationDuration = "8s";
        else if (windspeed<9) document.getElementById("ny_humidity").style.animationDuration = "7s";
        else if (windspeed<10) document.getElementById("ny_humidity").style.animationDuration = "6s";
        else if (windspeed<11) document.getElementById("ny_humidity").style.animationDuration = "5s";
        else if (windspeed<12) document.getElementById("ny_humidity").style.animationDuration = "4s";
        else if (windspeed<13) document.getElementById("ny_humidity").style.animationDuration = "3s";
        else if (windspeed<14) document.getElementById("ny_humidity").style.animationDuration = "2s";
        else if (windspeed<15) document.getElementById("ny_humidity").style.animationDuration = "1s";
        else if (windspeed<16) document.getElementById("ny_humidity").style.animationDuration = ".5s";
        else if (windspeed>16)document.getElementById("ny_humidity").style.animationDuration = ".1s";  

    }







