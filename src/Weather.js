import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import Condition from "./Condition";

export default function Weather(props) {
const [load, setLoad] = useState(false);
const [allWeather, setAllWeather] = useState({});
const [city, setCity] = useState(props.primaryCity);

function showResponse(response) {
setAllWeather({
  city: response.data.name,
  date: new Date(response.data.dt * 1000),
  temperature: response.data.main.temp,
  description: response.data.weather[0].description,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
});

setLoad(true);
}

function search(){
const apiKey = "44586293a46c054713f47fc69d4f2a52";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
axios.get(apiUrl).then(showResponse);
}

function handleSubmit(event) {
event.preventDefault();
search(city);
}

function changeCity(event) {
setCity(event.target.value);
}

if (load === true) {
return (
  <div className="totalWeather">
<Condition data={allWeather}/>
      <div className="form">
        <form id="weather-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-3">
              <input
                type="search"
                id="city-input"
                placeholder="Enter a city"
                autoFocus="on"
onChange={changeCity}
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

);
} else {

search(city);
return "Loading...";
}
}