var presentTemp = $("#presentTemp");
var presentHumidity = $("#presentHumidity");
var presentWind = $("#presentWind");
var presentUv = $("#presentUv");
var apiKey = "8e8a4571fd74feffb1e4f730b5eb774b"
var searchBtn = $("#search-btn");
var periodicDivs = [$("#periodic-1div"), ("#periodic-2div"), ("#periodic-3div"), ("#periodic-4div"), ("#periodic-5div")];
var nameCity = " ";
var todayDate = moment().format("M/D/YYYY");

var storedCities = JSON.parse (localStorage.getItem("storedCites")) || [];
//create for loop and list
for (var i = 0; i < storedCities.lenght; i ++) {
    var city = savedCities[i];
    var nameCityEl = $ ("<li>");
    nameCityEl.addClass("btn list-group-item");
    nameCityEl.text(city);
    $("#list-city").append(nameCityEl);
}

searchBtn.click(function() {
    console.log ("btnclicked")
    lookupInput = $("#lookupInput").val(); //set value 
    var recentlySavedCities = JSON.parse(localStorage.getItem("storedCites")) || []
    recentlySavedCities.push(inputsearch)
    localStorage.setItem("storedCities", JSON.stringify(recentlySavedCities))
    getCurrentPosition(inputsearch);
});
function getStoredWeather() {
    getCurrentPosition($(this).text())
}
function getCurrentPosition (inputsearch) {
    var apiUrl = "api.openweathermap.org/data/2.5/forecast?q=" + inputsearch + "&limit=1&appid=" + apiKey;
    fetch(apiUrl).then(function(response) {
        if (response.ok){
            response.json().then(function(data) {
                console.log(data);
                
                var positionlat = data [0].lat;
                var positionlon = data [0].lon;
                nameCity = data [0].name;

                var latitudeString = positionlat.toString();
                var longitudeString = positionlon.toSting();
                getForecast(latitudeString, longitudeString);
            });
        } else {
            alert("Not Found");
        }
    });

};

function getForecast(lat,lon) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + "&exclude=minutely,hourly,alerts,&units=imperial&appid=" + apiKey;
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                var nowCityEl = $("#currentname");
                 nowCityEl.text(nameCity.toUpperCase()+ todayDate);
                var nowTempEl = $("todaytemp");
                nowTempEl.text(data.current.temp);
                var nowWindEl = $ ("#todaywind");
                nowWindEl.text(data.current.wind_speed);
                var nowHumEl = $ ("#todayhum");
                nowHumEl.text(data.current.wind_speed);
                var nowUvEl = $ ("#todayuvindex");
                nowUvEl.text(data.current.wind_speed);
            })
        }
    })

}