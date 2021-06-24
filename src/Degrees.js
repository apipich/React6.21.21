import React from "react";
import "./Degrees.css";

export default function Degrees(props) {
return (
  <div>
  <span>{Math.round(props.fahrenheit)}</span>
  </div>
);

}