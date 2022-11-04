//Change color theme
function changeTheme() {
    let body = document.querySelector("body");
    body.classList.toggle("dark");
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click",changeTheme);
// create a function that covers all the cities
function updateTime() {
//Los Angeles
// Select the city
let losAngelesElement = document.querySelector("#los-angeles");
//Select the date
let losAngelesDateElement = losAngelesElement.querySelector(".date");
//Select the time
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
//Select Time Zone Moment
let losAngelesTime = moment().tz("America/Los_Angeles");
//Modify date using innerHTML
losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, MMMM Do YYYY");
//Modify time using innerHTML
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>] A [</small>]");
}

// Call the function
updateTime();
//Update everysecond
setInterval(updateTime, 1000);
