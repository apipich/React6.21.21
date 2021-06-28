import React from "react";

export default function DailyWeather(props) {
  return (
    <div>
  <div className="weather-forecast-day">{props.data.dt}</div>
  <div className="weather-forecast-condition" id="forecastNumber">{props.data.weather[0].description}</div>
  <div className="icon">{props.data.weather[0].icon}</div>
  <div className="weather-forecast-temperature">
    <div className="weather-forecast-temp">{Math.round(props.data.temp.day)}</div>
</div>
</div>
  );
}