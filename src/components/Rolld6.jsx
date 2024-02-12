export default function Rolld6({handleDiceRoll, handleDiceSize}) {
  return (
    <button
      className="diceBtn"
      onClick={() => {
        handleDiceRoll();
        handleDiceSize(6);
      }}>
      Roll d6!
    </button>
  );
}
