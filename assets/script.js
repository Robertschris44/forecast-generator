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