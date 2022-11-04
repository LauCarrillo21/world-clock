//Change Color Theme
function changeTheme() {
    let body = document.querySelector("body");
    body.classList.toggle("dark");
}
let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click",changeTheme);


//Single Location Time
// create a function that covers all the cities
function updateTime() {
//Los Angeles
// Select the city
let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
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

//Paris
// Select the city
let parisElement = document.querySelector("#paris");
if (parisElement) {
//Select the date
let parisDateElement = parisElement.querySelector(".date");
//Select the time
let parisTimeElement = parisElement.querySelector(".time");
//Select Time Zone Moment
let parisTime = moment().tz("Europe/Paris");
//Modify date using innerHTML
parisDateElement.innerHTML = parisTime.format("dddd, MMMM Do YYYY");
//Modify time using innerHTML
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>] A [</small>]");
} 

//Hawaii
// Select the city
let hawaiiElement = document.querySelector("#hawaii");
if (hawaiiElement) {
//Select the date
let hawaiiDateElement = hawaiiElement.querySelector(".date");
//Select the time
let hawaiiTimeElement = hawaiiElement.querySelector(".time");
//Select Time Zone Moment
let hawaiiTime = moment().tz("Pacific/Honolulu");
//Modify date using innerHTML
hawaiiDateElement.innerHTML = hawaiiTime.format("dddd, MMMM Do YYYY");
//Modify time using innerHTML
hawaiiTimeElement.innerHTML = hawaiiTime.format("h:mm:ss [<small>] A [</small>]");
}

//Berlin
// Select the city
let berlinElement = document.querySelector("#berlin");
if (berlinElement) {
//Select the date
let berlinDateElement = berlinElement.querySelector(".date");
//Select the time
let berlinTimeElement = berlinElement.querySelector(".time");
//Select Time Zone Moment
let berlinTime = moment().tz("Europe/Berlin");
//Modify date using innerHTML
berlinDateElement.innerHTML = berlinTime.format("dddd, MMMM Do YYYY");
//Modify time using innerHTML
berlinTimeElement.innerHTML = berlinTime.format("h:mm:ss [<small>] A [</small>]");
}
}
// Call the function
updateTime();
//Update everysecond
setInterval(updateTime, 1000);


//Multiple locations
function updateCity (event) {
    //update location and time
    let cityTimeZone = event.target.value;
     //improve city name
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector(".cities");
    citiesElement.innerHTML = `
    <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date"> ${cityTime.format("dddd, MMMM Do YYYY")} </div>
    </div>
        <div class="time">  ${cityTime.format("h:mm:ss [<small>] A [</small>]")}
        </div>
    </div>
    `;
    };

//select the Select item
let citiesSelectElement = document.querySelector("#city");
// when change, change citi information
citiesSelectElement.addEventListener("change", updateCity);