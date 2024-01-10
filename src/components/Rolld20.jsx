export default function Rolld20({handleDiceRoll, handleDiceSize}) {
  return (
    <button
      className="diceBtn"
      onClick={() => {
        handleDiceRoll();
        handleDiceSize(20);
      }}>
      Roll a D20!
    </button>
  );
}
