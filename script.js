const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7ca877e1c1msh36cd6272b8b5acfp1aaec3jsn668abe80fdb1",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city , no="")=>{
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+ city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    if(no!=""){
    document.getElementById("cloud_pct"+no).innerHTML = response.cloud_pct;
    }
    if(no==""){
    cityName.innerHTML = city;
    document.getElementById("tempm"+no).innerHTML = response.temp;
    document.getElementById("humiditym"+no).innerHTML = response.humidity;
    document.getElementById("wind_speedm"+no).innerHTML = response.wind_speed;
  }
    document.getElementById("temp"+no).innerHTML = response.temp;
    document.getElementById("feels_like"+no).innerHTML = response.feels_like;
    document.getElementById("humidity"+no).innerHTML = response.humidity;
    document.getElementById("min_temp"+no).innerHTML = response.min_temp;
    document.getElementById("max_temp"+no).innerHTML = response.max_temp;
    document.getElementById("wind_speed"+no).innerHTML = response.wind_speed;
    document.getElementById("wind_degrees"+no).innerHTML = response.wind_degrees;
    document.getElementById("sunrise"+no).innerHTML = response.sunrise;
    document.getElementById("sunset"+no).innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
};

submit.addEventListener("click" , (e)=>{
  e.preventDefault()
  getWeather(city.value)
})

getWeather("Delhi")
getWeather("Lucknow" , "-1");
getWeather("Bangalore" , "-2");
getWeather("London" , "-3");
getWeather("New York" , "-4");
