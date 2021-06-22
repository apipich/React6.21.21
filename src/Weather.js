import React from "react";
import axios from "axios";
import Condition from "./Condition.js";


export default function Weather() {
  const apiKey = "44586293a46c054713f47fc69d4f2a52";
  let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

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
            <h2>72</h2>
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
}

function RaindropIcon(){
  return ( 
 <img className="raindropIcon" src="/images/raindrop.png" alt="raindrop" width="30px"/>
  );
}