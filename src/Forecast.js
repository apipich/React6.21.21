import axios from "axios";
import React, { useState } from "react";
import "./Forecast.css";


export default function Forecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, showForecast] = useState(null);

  function showResponse(response){
showForecast(response.data.daily);
setLoaded(true);
  }


if (loaded) {
return (
    <div className="Forecast d-flex">
  <div className="col">
  <div className="weather-forecast-day">{forecast[0].dt}</div>
  <div className="weather-forecast-condition" id="forecastNumber">Cloudy</div>
  <div className="icon">icon</div>
  <div className="weather-forecast-temperature">
    <div className="weather-forecast-temp">{Math.round(forecast[0].temp.day)}</div>
  </div>
</div>
</div>
  );

} else {
let apiKey = "44586293a46c054713f47fc69d4f2a52";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let units = "imperial";
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`

axios.get(apiUrl).then(showResponse);

return "Loading..."

}
}
