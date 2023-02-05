const API_KEY = config.weatherAPIKey;

const onGeoOk = position => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  (async () => {
    const response = await (await fetch(URL)).json();
    const weatherContainer = document.querySelector("#weather");
    const weather = document.querySelector("#weather span:first-child");
    const temp = document.querySelector("#weather span:nth-child(2)");
    const city = document.querySelector("#weather span:last-child");

    const weatherIcon = response.weather[0].icon;
    const icon = document.createElement("img");
    icon.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    weather.innerText = `${response.weather[0].main}`;
    temp.innerText = `${response.main.temp}°C`;
    city.innerText = response.name;
    weatherContainer.prepend(icon);
  })();
};
const onGeoError = () => {
  alert("Can't find you. No weather for you.");
};
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
