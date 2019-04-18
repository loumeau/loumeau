window.onload = function() {

    function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    // h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    // formula: [if_>_(unique)] ? [true()] : [false()]
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    // setInterval(functionName, 33) <- loop forever
    // setTimeout(functionName, times) <- loop in certain times
    
}

showTime();
}

// // // // //


function updateBackground() {
  var sec = (new Date()).getSeconds();
  var body = document.body;
  var bstyle = body.style;
  var clock = document.querySelector(".clock");
  var color = clock.style;   
  var hello = document.querySelector(".hello");    
  if (sec <= 10) {
    bstyle.backgroundColor = "red";
    color.color = "black";
  } else if (sec > 11 && sec <=20 ) {
    bstyle.backgroundColor = "orange";
    color.color = "blue";
  } else if (sec >= 21 && sec <=30 ) {
    bstyle.backgroundColor = "yellow";
    color.color = "black";
  } else if (sec >= 31 && sec <=40 ) {
    bstyle.backgroundColor = "green";
    color.color = "orange";
  } else if (sec >= 41 && sec <=50 ) {
    bstyle.backgroundColor = "blue";
    color.color = "red";
  } else if (sec > 51) {
    bstyle.backgroundColor = "purple";
    color.color = "yellow";
  } 
}

setInterval(updateBackground, 1000 * 60);
updateBackground();