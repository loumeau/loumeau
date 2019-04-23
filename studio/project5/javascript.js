
var temp; 
var pressure; 
var humidity; 



$(document).ready(function(){


    $.ajax({
        url: 'htps://api.openweathermap.org/data/2.5/weather?id=5128581&units=imperial&APPID=85b7adbd780565753e6f31533c85a64f', 
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
        url: 'htps://api.openweathermap.org/data/2.5/weather?id=2643744&units=imperial&APPID=85b7adbd780565753e6f31533c85a64f', 
        dataType: 'jsonp',
        success: function(results){
            temp = results.main.temp;
            londontemp();
        }
    });
    

    function londontemp(){
        $('#londontemp').append(temp + '\xB0');
    } 

    $.ajax({
        url: 'htps://api.openweathermap.org/data/2.5/weather?id=2147714&units=imperial&APPID=85b7adbd780565753e6f31533c85a64f', 
        success: function(results){
            temp = results.main.temp;
            sydneytemp();
        }
    });
    

    function sydneytemp(){
        $('#sydneytemp').append(temp + '\xB0');
    } 

    var currentTime = new Date();
    var month = currentTime.getMonth();
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    $('.date').append(month + "/" + day + "/" + year);  


});






