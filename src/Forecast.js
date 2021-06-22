import React from "react";
import "./Forecast.css";

export default function Forecast() {
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
 <div className="col">
 <div className="weather-forecast-day">FRI</div>
 <div className="weather-forecast-condition" id="forecastNumber">Thunderstorms</div>
<ThunderIcon/>
 <div className="weather-forecast-temperature">
   <div className="weather-forecast-temp">69</div>
 </div>
</div>
<div className="col">
 <div className="weather-forecast-day">SAT</div>
 <div className="weather-forecast-condition" id="forecastNumber">Sunny</div>
<SunIcon/>
 <div className="weather-forecast-temperature">
   <div className="weather-forecast-temp">70</div>
 </div>
</div>
<div className="col">
 <div className="weather-forecast-day">SUN</div>
 <div className="weather-forecast-condition" id="forecastNumber">Rainy</div>
<RaindropIcon/>
 <div className="weather-forecast-temperature">
   <div className="weather-forecast-temp">68</div>
 </div>
</div>
<div className="col">
 <div className="weather-forecast-day">MON</div>
 <div className="weather-forecast-condition" id="forecastNumber">Sunny</div>
<SunIcon/>
 <div className="weather-forecast-temperature">
   <div className="weather-forecast-temp">72</div>
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

function RaindropIcon(){
  return ( 
 <img className="raindropIcon" src="./images/raindrop.png" alt="raindrop" width="30px"/>
  );
}

function ThunderIcon(){
  return ( 
 <img className="thunderIcon" src="./images/thunder.png" alt="thunder" width="30px"/>
  );
}

function SunIcon(){
  return ( 
 <img className="sunIcon" src="./images/sun.png" alt="sun" width="30px"/>
  );
}