var weatherFormEl = document.querySelector("#weather-search")
var cityInputEl = document.querySelector("#city");

var getDailyWeather = function (city) {
    var apiUrlWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=fdd5c446e496fac706291ef838631708" + apiKey;
    fetch(apiUrlWeather)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayWeather();
                });
            } else {
                alert("Error")
            }
        })
        .catch(function (error) {
            alert("unable to connect");
        });
};

var formCitySearch = function (event) {
    event.preventDefault();
    console.log(event);
    var city = cityInputEl.value.trim();
    if (city) {
        getDailyWeather(city);
        cityInputEl.value = "";
    } else {
        alert("Please enter a valid city");
    }
    console.log(event);
};

weatherFormEl.addEventListener("submit", formCitySearch);

var displayWeather