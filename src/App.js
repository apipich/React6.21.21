
import "./styles.css";
import "./App.css";
import Forecast from "./Forecast.js";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
<Weather />
<br/>
<br/>
<Forecast/>
      <br />
      <br/>
</div>
  );
}