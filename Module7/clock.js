"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    // function makes a new date object, gets the current time, and updates the ui

    // new date object for holding datetime
    const currentDate = new Date();

    // using date methods similar to those from ch4 to set variables to current system datetime
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();
    const ampm = "AM";

    // updating UI using $ function and selectors
    $("#hours").firstChild.nodeValue = currentHours;
    $("#minutes").firstChild.nodeValue = currentMinutes;
    $("#seconds").firstChild.nodeValue = currentSeconds;
    $("#ampm").firstChild.nodeValue = ampm; 

};

document.addEventListener("DOMContentLoaded", () => {
	// set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.

    // calling function to display date time on page load
    displayCurrentTime();

    // set interval so that the timer updates every second
    setInterval(displayCurrentTime, 1000);
    
});