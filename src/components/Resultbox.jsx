import "../css/Resultbox.css";

export default function ResultBox({
  result,
  quantity,
  diceSize,
  diceRollsBreakdown,
  modifier,
}) {
  return (
    <div className="resultBox">
      <div>
        <p id="result">{result}</p>
      </div>
      <p id="rollBreakdown">
        You rolled: {quantity} d{diceSize} + {modifier}
      </p>
      <p id="rolls">{diceRollsBreakdown}</p>
    </div>
  );
}
