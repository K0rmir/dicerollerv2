import {useState} from "react";
import ResultBox from "./components/Resultbox";
import Rolld4 from "./components/Rolld4";
import Rolld6 from "./components/Rolld6";
import RollAD8 from "./components/Rolld8";
import RollAD10 from "./components/Rolld10";
import RollAD12 from "./components/Rolld12";
import RollAD20 from "./components/Rolld20";

export default function App() {
  const [result, setResult] = useState(0);
  const [diceSize, setDiceSize] = useState(0);

  function handleDiceRoll() {
    const rolld4Result = Math.ceil(Math.random() * diceSize);
    setResult(rolld4Result);
    console.log(rolld4Result);
  }

  function handleDiceSize(updatedSize) {
    setDiceSize(updatedSize);
  }

  return (
    <div>
      <ResultBox result={result} />
      <Rolld4 handleDiceRoll={handleDiceRoll} handleDiceSize={handleDiceSize} />
      <Rolld6 handleDiceRoll={handleDiceRoll} handleDiceSize={handleDiceSize} />
      <RollAD8 />
      <RollAD10 />
      <RollAD12 />
      <RollAD20 />
    </div>
  );
}
