const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "67126af95dmsh72334de82f5d57cp1a5654jsnb893647b07a2",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // cloud_pct = response.cloud_pct
      temp.innerHTML = response.temp;
      temp_2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      // feels_like_2.innerHTML = response.feels_like
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value)
});
getWeather("Delhi")
