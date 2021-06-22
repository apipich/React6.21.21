import React, { useState } from "react";
import axios from "axios";
import Condition from "./Condition.js";


export default function Weather() {
const [load, setLoad] = useState(false);
const [temperature, setTemperature] = useState(null);

function showResponse(response) {
setTemperature(Math.round(response.data.main.temp));
setLoad(true);
}

if (load) {
return (
    <div className="Weather">
<h1>New York</h1>
      <p>Sunday 7:15</p>
      <div className="row">
        <div className="col-4">
          <span className="mainIcon"><RaindropIcon/>
          </span>
        </div>
        <div className="col-4 d-flex">
          <span className="units">
            <h2>{temperature}</h2>
            <span className="fDegrees"><a href="/" id="fahrenheit">°F</a></span>
            <span className="divider">|</span>
            <span className="cDegrees"><a href="/" id="celsius">°C</a></span>
            </span>
        </div>
     <Condition/>
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


  

  

function RaindropIcon(){
  return ( 
 <img className="raindropIcon" src="/images/raindrop.png" alt="raindrop" width="30px"/>
  );
}