import { useState } from 'react';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState(10)
  const [temperatureColor, setTemperatureColor] = useState("cold")

  const increase = () => {
    temperature < 30 && setTemperature(temperature + 1)
    if (temperature >= 20) {
      setTemperatureColor("blazing")
    } else if (temperature >= 15) {
      setTemperatureColor("hot")
    }
  }

  const decrease = () => {
    temperature > 0 && setTemperature(temperature - 1)
    if (temperature <= 16) {
      setTemperatureColor("cold")
    } else if (temperature <= 21) {
      setTemperatureColor("hot")
    }
  }

  return (
    <div className="container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperature}</div>
      </div>
      <div className="'button-container">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}

export default App;
