let hours = document.getElementById("hours");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let date = document.getElementById("date");
let day = document.getElementById("day");

function updateDate() {
  const today = new Date();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the current day name
  const dayName = dayNames[today.getDay()];

  // Get the current date (day of the month)
  const todayDate = today.getDate();

  // Get the current month (months are zero-indexed, so add 1)
  const month = today.getMonth() + 1;

  // Get the current year
  const year = today.getFullYear();
  // Format the date

  const formattedDate = `${month}/${todayDate}/${year}`;
  day.innerHTML = dayName;
  date.innerHTML = formattedDate;
}

function timeUntilMidnight() {
  const now = new Date();
  const midnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1, // Move to the next day
    0,
    0,
    0 // At midnight
  );
  return midnight - now; // Milliseconds until midnight
}

 // Initial call to set the date immediately
 updateDate();

 // Set a timeout to update the date at the next midnight
 setTimeout(function() {
     updateDate();
     // Set an interval to update the date every 24 hours after the first update
     setInterval(updateDate, 86400000);
 }, timeUntilMidnight());



setInterval(() => {
  let curretnTime = new Date();
  hours.innerHTML =
    (curretnTime.getHours() < 10 ? "0" : "") + curretnTime.getHours();
  min.innerHTML =
    (curretnTime.getMinutes() < 10 ? "0" : "") + curretnTime.getMinutes();
  sec.innerHTML =
    (curretnTime.getSeconds() < 10 ? "0" : "") + curretnTime.getSeconds();
}, 1000);
