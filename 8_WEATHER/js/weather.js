const onGeoOk = position => {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  console.log("you live in", lat, log);
};
const onGeoError = () => {
  alert("Can't find you. No weather for you.");
};
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
