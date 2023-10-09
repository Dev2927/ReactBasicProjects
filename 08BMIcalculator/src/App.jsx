import { useMemo, useState } from "react";
import "./App.css";

const DEFAULT_WEIGHT = 40;
const DEFAULT_HEIGHT = 150;

function App() {
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);
  const [height, setHeight] = useState(DEFAULT_HEIGHT);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <>
      <main>
        <div>
          <p>Your Weight: {weight}</p>
          <input
            type="range"
            onChange={onWeightChange}
            step="1"
            min="40"
            max="150"
          />
          <p>Your Height: {height}</p>
          <input type="range" onChange={onHeightChange} min="140" max="220" />
        </div>
        <div>
          <h1>Your BMI is:-</h1>
          <p>{output}</p>
        </div>
      </main>
    </>
  );
}

export default App;
