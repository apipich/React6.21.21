import React from "react";

export default function DailyWeather(props) {

  function day() {
let date = new Date(props.data.dt * 1000);
let day = date.getDay();

let days = ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"];

return days[day];
  }

  return (
    <div>
  <div className="weather-forecast-day">{day()}</div>
  <div className="weather-forecast-condition" id="forecastNumber">{props.data.weather[0].description}</div>
  <div className="icon"><img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="icon" width="55"/>
  </div>
  <div className="weather-forecast-temperature">
    <div className="weather-forecast-temp">{Math.round(props.data.temp.day)}°</div>
</div>
</div>
  );
}