// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon")
const tempElement = document.querySelector(".temperature-value p")
const descElement = document.querySelector(".temperature-description p")
const loccationElement = document.querySelector(".location p")
const notificationElement = document.querySelector(".notification")

// APP DATA
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// APP CONSTANTS AND VARIABLES
const KELVIN = 273;

// API KEY
const key = "0c788fa7b9d87efb68999d4b8f6e1651";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);

}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser does not support geolocation</p>";
}
