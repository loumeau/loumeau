
var temp; 
var pressure; 
var humidity; 



$(document).ready(function(){


    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=imperial&APPID=85b7adbd780565753e6f31533c85a64f', 
        dataType: 'jsonp',
        success: function(results){
            temp = results.main.temp;
            newyorktemp();
        }
    });
    

    function newyorktemp(){
        $('#newyorktemp').append(temp + '\xB0');
    } 

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3128832&units=imperial&APPID=85b7adbd780565753e6f31533c85a64f', 
        dataType: 'jsonp',
        success: function(results){
            temp = results.main.temp;
            madridtemp();
        }
    });
    

    function madridtemp(){
        $('#madridtemp').append(temp + '\xB0');
    } 

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2038349&units=imperial&APPID=85b7adbd780565753e6f31533c85a64f', 
        success: function(results){
            temp = results.main.temp;
            beijingtemp();
        }
    });
    

    function beijingtemp(){
        $('#beijingtemp').append(temp + '\xB0');
    } 

    var currentTime = new Date();
    var month = currentTime.getMonth();
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    $('.date').append(month + "/" + day + "/" + year);  


});










