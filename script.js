const apiKey = "5fa72d38d379a304abe09d794c2b4310";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
console.log(searchBox);
const searchBtn = document.querySelector(".search button");
console.log(searchBtn);

const checkWeather = async (city) => {
  const response = await fetch(url + city + `&appid=${apiKey}&units=metric`);
  console.log(response);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    return;
  }
  const data = await response.json();
  console.log(data);
  document.querySelector(".temp").innerHTML = data.main.temp + `°C`;
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
  document.querySelector(".wind").innerHTML = data.wind.speed + `Km/h`;

  if (data.weather[0].main == "Clouds") {
    document.querySelector(".weather-icon").src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    document.querySelector(".weather-icon").src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    document.querySelector(".weather-icon").src = "images/drizzle.png";
  } else if (data.weather[0].main == "Humidity") {
    document.querySelector(".weather-icon").src = "images/humidity.png";
  } else if (data.weather[0].main == "Mist") {
    document.querySelector(".weather-icon").src = "images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    document.querySelector(".weather-icon").src = "images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    document.querySelector(".weather-icon").src = "images/snow.png";
  } else if (data.weather[0].main == "Wind") {
    document.querySelector(".weather-icon").src = "images/wind.png";
  }
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
  searchBox.value = "";
};

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
