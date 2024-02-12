import {useState} from "react";
import ResultBox from "./components/Resultbox";
import Rolld4 from "./components/Rolld4";
import Rolld6 from "./components/Rolld6";
import Rolld8 from "./components/Rolld8";
import Rolld10 from "./components/Rolld10";
import Rolld12 from "./components/Rolld12";
import Rolld20 from "./components/Rolld20";
import Modifier from "./components/Modifier";
import Quantity from "./components/Quantity";
import "./css/App.css";

export default function App() {
  const [result, setResult] = useState(0);
  const [diceSize, setDiceSize] = useState(0);
  const [modifier, setModifierNum] = useState(0);
  const [quantity, setQuantityNum] = useState(1);

  function handleDiceRoll() {
    const rollDiceResult = Math.ceil(Math.random() * diceSize + modifier);
    setResult(rollDiceResult);
    console.log(rollDiceResult);
  }

  function handleDiceSize(updatedSize) {
    setDiceSize(updatedSize);
  }

  function handleModifierNumMinus() {
    setModifierNum(modifier - 1);
  }

  function handleModifierNumPlus() {
    setModifierNum(modifier + 1);
  }

  function handleQuantityNumMinus() {
    if (quantity > 1) {
      setQuantityNum(quantity - 1);
    }
  }

  function handleQuantityNumPlus() {
    setQuantityNum(quantity + 1);
  }

  return (
    <>
      <ResultBox result={result} />
      <Modifier
        handleModifierNumMinus={handleModifierNumMinus}
        handleModifierNumPlus={handleModifierNumPlus}
        modifier={modifier}
      />
      <Quantity
        handleQuantityNumMinus={handleQuantityNumMinus}
        handleQuantityNumPlus={handleQuantityNumPlus}
        quantity={quantity}></Quantity>
      <div id="diceBtnGrid">
        <Rolld4
          handleDiceRoll={handleDiceRoll}
          handleDiceSize={handleDiceSize}
        />
        <Rolld6
          handleDiceRoll={handleDiceRoll}
          handleDiceSize={handleDiceSize}
        />
        <Rolld8
          handleDiceRoll={handleDiceRoll}
          handleDiceSize={handleDiceSize}
        />
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
    </>
  );
}
