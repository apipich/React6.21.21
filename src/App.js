
import "./styles.css";
import "./App.css";
import Forecast from "./Forecast.js";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
<Weather primaryCity="New York"/>
<br/>
<br/>
<Forecast coordinates={allWeather.coordinates}/>
      <br />
      <br/>
</div>
  );
}