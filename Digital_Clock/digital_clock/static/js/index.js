$(document).ready( function() {

  function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // This gets a "handle" to the clock div in our HTML
    var clockDiv = document.getElementById('clock');

    // Then we set the text inside the clock div 
    // to the hours, minutes, and seconds of the current time
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
  }

  // This runs the displayTime function the first time
  displayTime();

  // This makes our clock 'tick' by repeatedly
  // running the displayTime function every second.
  setInterval(displayTime, 1000);

  // If the seconds digit is less than ten 
                   
if (seconds < 10) {
    // Add the "0" digit to the front
    // so 9 becomes "09"
    seconds = "0" + seconds;
}

// Let's set the AM and PM meridiem and 
// 12-hour format
var meridiem = "AM";  // Default is AM

// Convert from 24 hour to 12 hour format
// and keep track of the meridiem.
if (hours > 12) {
    hours = hours - 12;
    meridiem = "PM";
}

// 0 AM and 0 PM should read as 12
if (hours === 0) {
    hours = 12;    
}

});

// If the seconds digit is less than ten                    
if (seconds < 10) {
    // Add the "0" digit to the front
    // so 9 becomes "09"
    seconds = "0" + seconds;
}

// Let's set the AM and PM meridiem and 
// 12-hour format
var meridiem = "AM";  // Default is AM

// Convert from 24 hour to 12 hour format
// and keep track of the meridiem.
if (hours > 12) {
    hours = hours - 12;
    meridiem = "PM";
}

// 0 AM and 0 PM should read as 12
if (hours === 0) {
    hours = 12;    
}

clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;