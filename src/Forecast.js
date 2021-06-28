import axios from "axios";
import React, { useState } from "react";
import "./Forecast.css";
import DailyWeather from "./DailyWeather.js";


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
<DailyWeather data={forecast[0]}/>
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
