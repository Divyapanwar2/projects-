const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector('.not-found');
search.addEventListener('click', () => {
  const APIKey = '78eaf90784282946c5a26c672aac6de8';
  const city = document.querySelector(".search-box input").value;
  if (city == '')
   return;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then(response => response.json())
    .then(json => {
      if(json.cod=='404'){
        container.style.height='400px';
        weatherBox.classList.remove('active');
        weatherDetails.classList.remove('active');
        error404.classList.add('active');
        return;
      }
      container.style.height='555px';
      weatherBox.classList.add('active');
      weatherDetails.classList.add('active');
      error404.classList.add('active');
    
      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(".weather-details .humidity span");
      const wind = document.querySelector(".weather-details .wind span");
                
      switch (json.weather[0].main) {
        case "Clear":
          image.src = "/clear.png";
          break;
        case "Rain":
          image.src = "/rain.jpg";
          break;
        case "Snow":
          image.src = "/snow.jpg";
          break;
        case "Clouds":
          image.src = "/cloud.png";
          break;
        case "Mist":
          image.src = "/mist.jpg";
          break;

        default:
          image.src = "/iocn.jpg";
      }
      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    
    });
});
