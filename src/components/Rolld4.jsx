export default function Rolld4({handleDiceRoll, handleDiceSize}) {
  return (
    <button
      className="diceBtn"
      onClick={() => {
        handleDiceRoll();
        handleDiceSize(4);
      }}>
      Roll a D4!
    </button>
  );
}
