const inputBox = document.getElementById("input-box");
const searchBtn =document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

async function checkWeather(city){
  const api_key = "e11acc2e4c708c68d6c9fe6687b8b1de";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then(response => response.json());

  temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

  switch(weather_data.weather[0].main){
    case 'Clouds':
        weather_img.src = "img/cloud.png";
        break;
    case 'Clear':
        weather_img.src = "img/clear.png";
        break;
    case 'Rain':
        weather_img.src = "img/rain.png";
        break;
    case 'Mist':
        weather_img.src = "img/mist.png";
        break;
    case 'Snow':
        weather_img.src = "img/snow.png";
        break;

}

  console.log(weather_data);

}

searchBtn.addEventListener("click", ()=>{
  checkWeather(inputBox.value);
})
