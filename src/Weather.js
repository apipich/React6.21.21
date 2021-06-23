import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Weather() {
const [load, setLoad] = useState(false);
const [allWeather, setAllWeather] = useState({});

function showResponse(response) {
setAllWeather({
  temperature: response.data.main.temp,
  description: response.data.weather[0].description,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
});

setLoad(true);
}

if (load === true) {
return (
    <div className="Weather">
<h1>New York</h1>
      <p>Sunday 7:15</p>
      <div className="row">
        <div className="col-4">
          <span className="mainIcon"><img src={allWeather.icon} alt="Icon"/>
          </span>
        </div>
        <div className="col-4 d-flex">
          <span className="units">
            <h2>{Math.round(allWeather.temperature)}</h2>
            <span className="fDegrees"><a href="/" id="fahrenheit">°F</a></span>
            <span className="divider">|</span>
            <span className="cDegrees"><a href="/" id="celsius">°C</a></span>
            </span>
        </div>
        <div className="col-4">
  <ul>
    <div className="weatherNow">
      <li><span className="condition" id="weatherCondition">{allWeather.description}</span></li>
    </div>
    <div className="windy">
      <li>
        Wind: <span className="windspeed" id="wind">{allWeather.wind}</span> mph
      </li>
    </div>
    <div className="humidity">
      <li>Humidity: <span className="humid" id="humidity"></span>{allWeather.humidity} %</li>
    </div>
  </ul>
</div>
   <br />
  <br />
  <br />
  <br />
      <div className="form">
        <form id="weather-form">
          <div className="row">
            <div className="col-3">
              <input
                type="search"
                id="city-input"
                placeholder="Enter a city"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" id="locate" value="🔍" />
            </div>
            <div className="col-3">
              <button id="here">Current Location</button>
            </div>
          </div>
        </form>
</div>
</div>
</div>  
  )
} else {
const apiKey = "44586293a46c054713f47fc69d4f2a52";
let city = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
axios.get(apiUrl).then(showResponse);

return "Loading...";
}
}