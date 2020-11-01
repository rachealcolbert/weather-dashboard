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
    var city = 
}