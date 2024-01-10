import {useState} from "react";
import ResultBox from "./components/Resultbox";
import Rolld4 from "./components/Rolld4";
import Rolld6 from "./components/Rolld6";
import Rolld8 from "./components/Rolld8";
import Rolld10 from "./components/Rolld10";
import Rolld12 from "./components/Rolld12";
import Rolld20 from "./components/Rolld20";

export default function App() {
  const [result, setResult] = useState(0);
  const [diceSize, setDiceSize] = useState(0);

  function handleDiceRoll() {
    const rollDiceResult = Math.ceil(Math.random() * diceSize);
    setResult(rollDiceResult);
    console.log(rollDiceResult);
  }

  function handleDiceSize(updatedSize) {
    setDiceSize(updatedSize);
  }

  return (
    <div>
      <ResultBox result={result} />
      <Rolld4 handleDiceRoll={handleDiceRoll} handleDiceSize={handleDiceSize} />
      <Rolld6 handleDiceRoll={handleDiceRoll} handleDiceSize={handleDiceSize} />
      <Rolld8 handleDiceRoll={handleDiceRoll} handleDiceSize={handleDiceSize} />
      <Rolld10
        handleDiceRoll={handleDiceRoll}
        handleDiceSize={handleDiceSize}
      />
      <Rolld12
        handleDiceRoll={handleDiceRoll}
        handleDiceSize={handleDiceSize}
      />
      <Rolld20
        handleDiceRoll={handleDiceRoll}
        handleDiceSize={handleDiceSize}
      />
    </div>
  );
}
