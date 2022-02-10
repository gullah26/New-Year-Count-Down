//declaration of letiables by getting them by selector
let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let countdown = document.querySelector("#countdown");

//get the current year
let date = new Date();
let year = date.getFullYear();

//set the new year date and time
let newYearTime = new Date(`January 01 ${year + 1} 00:00:00`);

// Countdown update time
function countdownUpdate() {
  let currentTime = new Date();

  let day = Math.floor((newYearTime - currentTime)/1000/60/60/24);
  let hour = Math.floor((newYearTime - currentTime)/1000/60/60) % 24;
  console.log(hour);
  let minute = Math.floor((newYearTime - currentTime)/1000/60) % 60;
  let second = Math.floor((newYearTime - currentTime)/1000) % 60;
  

  // Add values to DOM
  days.innerHTML = day;
  hours.innerHTML = hour //< 10 ? "0" + hour : hour;
  minutes.innerHTML = minute //< 10 ? "0" + minute : minute;
  seconds.innerHTML = second //< 10 ? "0" + second : second;
}

// Run every second
setInterval(countdownUpdate, 1000);
