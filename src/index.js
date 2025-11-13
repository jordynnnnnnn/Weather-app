let currentTime = new Date();

let currentWeather = document.querySelector(".current-weather p");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

currentWeather.innerHTML = `${day} ${hours}:${minutes}, moderate rain <br /> Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>`;

function showTemperature(response) {
  //console.log(response.data);
  let tempElement = document.querySelector("#current-temp");
  let temperature = Math.round(response.data.temperature.current);
  //console.log(tempElement);
  tempElement.innerHTML = temperature;
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".input");
  let cityDisplay = document.querySelector(".current-weather h1");
  let city = cityInput.value;
  cityDisplay.innerHTML = cityInput.value;
  cityInput.value = "";

  let apiKey = "ca3401aa9fo6993fde3bf6t53aa16d30";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
