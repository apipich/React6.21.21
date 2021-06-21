import React from "react";
import "./Condition.css";

export default function Condition(){
return(
  <div className="col-4">
  <ul>
    <div className="weatherNow">
      <li><span className="condition" id="weatherCondition">Sunny</span></li>
    </div>
    <div className="windy">
      <li>
        Wind: <span className="windspeed" id="wind">2</span> mph
      </li>
    </div>
    <div className="humidity">
      <li>Humidity: <span className="humid" id="humidity"></span>12%</li>
    </div>
  </ul>
</div>
);
}