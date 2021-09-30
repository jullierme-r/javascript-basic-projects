/*
1 seg = 1000 ms
1 min = 60 seg
1 hour = 3600 seg
1 day = 86400 seg
*/

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let giveaway = document.querySelector(".giveaway");
let sec = document.querySelector(".seconds");
let min = document.querySelector(".minutes");
let hour = document.querySelector(".hours");
let days = document.querySelector(".days");

function updateTime(){
  //gets the current date as a temporary date
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0); //creates a future date 10 days after the current date 
  
  //updates the giveaway area with the future date
  giveaway.textContent = `giveaway ends on ${weekdays[futureDate.getDay()]}, ${futureDate.getDate()} ${months[futureDate.getMonth()]} ${futureDate.getFullYear()} ${futureDate.getHours()}:${futureDate.getMinutes()}am`;
  
  //time variable will storages the amount of time remaining to the future date (already converted in seconds)
  let time = Math.floor((futureDate.getTime() - tempDate.getTime())/1000);
  
  let qtdSec = time % 60; //extracting to seconds
  let qtdMin = Math.floor((time % (3600)) / 60); //extracting the minutes
  let qtdHour = Math.floor((time % (86400)) / (3600)); //extracting the hours
  let qtdDays = Math.floor((time / 86400)); //extracting the days
  
  sec.textContent = formatDigit(qtdSec);
  min.innerHTML = formatDigit(qtdMin);
  hour.innerHTML = formatDigit(qtdHour);
  days.innerHTML = formatDigit(qtdDays);

  if(time == 0){
    clearInterval(countDown);
  }
}

function formatDigit (digit) {
  if(digit < 10){
    return `0${digit}`; 
  }
  return digit;
}

let countDown = setInterval(updateTime, 1000);

updateTime();