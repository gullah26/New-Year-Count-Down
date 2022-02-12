//declaration of variables by getting them by selector
let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let countdown = document.querySelector("#countdown");

//finding the current year
let date = new Date();
let year = date.getFullYear();

//finding the value of the dates and time of the new year
let newYearTime = new Date(`January 01 ${year + 1} 00:00:00`);

// Countdown update time
function countdownUpdate() {
  let today = new Date();

/* finding the interval between newYearTime 
and today, divided by 1000 milliseconds and
using the result to calculate the number of
days, hours, minutes and seconds and using 
the Math.floor Method to round up the result 
to a whole number or integer.And appending 
the results to the HTML DOM.
*/

  let day = Math.floor((newYearTime - today)/1000/60/60/24);
  document.getElementById('days').innerHTML = day; 

  let hour = Math.floor((newYearTime - today)/1000/60/60) % 24;
  document.getElementById('hours').innerHTML = hour;

  let minute = Math.floor((newYearTime - today)/1000/60) % 60;
  document.getElementById('minutes').innerHTML = minute;

  let second = Math.floor((newYearTime - today)/1000) % 60;  
  document.getElementById('seconds').innerHTML = second; 
}

//setInterval method continues calling the function countdownUpdate.
newYearCountdown = setInterval(countdownUpdate, 1000);

// to print out HAPPY NEW YEAR...
if (newYearTime = new Date(`January 01 ${year + 1} 00:00:00`) ){

} else {

};