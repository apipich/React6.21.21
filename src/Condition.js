import React from "react";
import FullDate from "./FullDate.js";
import "./Condition.css";
import Degrees from "./Degrees.js";

export default function Condition(props) {
return (
  <div className="Weather">
  <h1>{props.data.city}</h1>
        <div className="fullDate"><FullDate date={props.data.date}/></div>
        <div className="row">
          <div className="col-4">
            <span className="mainIcon"><img src={props.data.icon} alt="Icon"/>
            </span>
          </div>
          <div className="col-4 d-flex">
            <span className="units">
              <h2><Degrees fahrenheit={props.data.temperature}/></h2>
              </span>
          </div>
          <div className="col-4">
    <ul>
      <div className="weatherNow">
        <li><span className="condition" id="weatherCondition">{props.data.description}</span></li>
      </div>
      <div className="windy">
        <li>
          Wind: <span className="windspeed" id="wind">{Math.round(props.data.wind)}</span> mph
        </li>
      </div>
      <div className="humidity">
        <li>Humidity: <span className="humid" id="humidity"></span>{props.data.humidity}%</li>
      </div>
    </ul>
  </div>
  </div>
  </div>
  );
}