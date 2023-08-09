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

// SET USER POSITION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude,longitude);
}

// SHOW ERROR
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`
}
    
// GET WEATHER FROM API
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    // console.log(api);

    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
    })
    .then(function(data){
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].icon;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    .then(function(){
        displayWeather();
    });

}

// DISPLAY WEATHER TO UI


