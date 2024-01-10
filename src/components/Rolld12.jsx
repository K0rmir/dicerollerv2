export default function Rolld12({handleDiceRoll, handleDiceSize}) {
  return (
    <button
      className="diceBtn"
      onClick={() => {
        handleDiceRoll();
        handleDiceSize(12);
      }}>
      Roll a D12!
    </button>
  );
}
