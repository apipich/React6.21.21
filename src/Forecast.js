import axios from "axios";
import React from "react";
import "./Forecast.css";


export default function Forecast(props) {

  function showResponse(response){

    
  }


let apiKey = "44586293a46c054713f47fc69d4f2a52";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let units = "imperial";
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`



axios.get(apiUrl).then(showResponse);
  return (
    <div className="Forecast d-flex">
  <div className="col">
  <div className="weather-forecast-day">THURS</div>
  <div className="weather-forecast-condition" id="forecastNumber">Cloudy</div>
  <CloudIcon/>
  <div className="weather-forecast-temperature">
    <div className="weather-forecast-temp">71</div>
  </div>
</div>
</div>
  );
}

function CloudIcon(){
  return ( 
  <img className="cloudIcon" src="./images/cloud.png" alt="cloud" width="30px"/>
  );
  }
