export default function Rolld8({handleDiceRoll, handleDiceSize}) {
  return (
    <button
      className="diceBtn"
      onClick={() => {
        handleDiceRoll();
        handleDiceSize(8);
      }}>
      Roll d8!
    </button>
  );
}
