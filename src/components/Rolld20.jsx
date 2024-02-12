export default function Rolld20({handleDiceRoll, handleDiceSize}) {
  return (
    <button
      className="diceBtn"
      onClick={() => {
        handleDiceRoll();
        handleDiceSize(20);
      }}>
      Roll d20!
    </button>
  );
}
