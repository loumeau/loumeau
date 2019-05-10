
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




    function myWeatherInterpretation(){
    var value = windspeed;
    var svg = document.getElementById("ny_humidity");
    if(value < "1")
        $("#ny_humidity").css("animation-duration","18s");

    else if(value < "2")
        $("#ny_humidity").css("animation-duration","17s");
    
    else if(value < "3")
        $("#ny_humidity").css("animation-duration","16s");
    
     else if(value < "4")
         $("#ny_humidity").css("animation-duration","15s");

    else if(value < "5")
         $("#ny_humidity").css("animation-duration","14s");
    
    else if(value < "6")
       $("#ny_humidity").css("animation-duration","13s");
    
    else if(value < "7")
       $("#ny_humidity").css("animation-duration","12s");
    
    else if(value < "8")
        $("#ny_humidity").css("animation-duration","11s");
    
    else if(value < "9")
       $("#ny_humidity").css("animation-duration","10s");
    
    else if(value < "10")
        $("#ny_humidity").css("animation-duration","9s");

    else if(value < "11")
        $("#ny_humidity").css("animation-duration","8s");

    else if(value < "12")
         $("#ny_humidity").css("animation-duration","7s");

    else if(value < "13")
         $("#ny_humidity").css("animation-duration", "6s");

    else if(value < "14")
         $("#ny_humidity").css("animation-duration","5s");
    
    else if(value < "15")
         $("#ny_humidity").css("animation-duration","4s");

    else if(value < "16")
         $("#ny_humidity").css("animation-duration","3s");
    
    else if(value < "17")
         $("#ny_humidity").css("animation-duration","2s");
        
    else if(value < "18")
         $("#ny_humidity").css("animation-duration","1s");

     else if(value < "19")
         $("#ny_humidity").css("animation-duration",".1s");
    
    else if(value < "20")
         $("#ny_humidity").css("animation-duration",".05s");

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


   


