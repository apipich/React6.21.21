import React, { useState } from "react";
import "./Degrees.css";

export default function Degrees(props) {
const [degrees, setDegrees] = useState("fahrenheit");
function convertCelsius(event){
  event.preventDefault();
  setDegrees("celsius");
}

function convertFahrenheit(event) {
  event.preventDefault();
  setDegrees("fahrenheit");
}


if (degrees === "fahrenheit") {
  return ( 
<div>
  <span>{Math.round(props.fahrenheit)}</span>
  <span className="fDegrees"><a href="/" >°F</a></span>
  <span className="divider">|</span>
  <span className="cDegrees"><a href="/" onClick={convertCelsius}>°C</a></span>
  </div>
);
} else {
let celsius = (props.fahrenheit - 32) * 5/9



return (
  <div>
  <span>{Math.round(celsius)}</span>
  <span className="fDegrees"><a href="/" onClick={convertFahrenheit}>°F</a></span>
  <span className="divider">|</span>
  <span className="cDegrees"><a href="/" >°C</a></span>
  </div>
);

  }
}