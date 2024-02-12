export default function Rolld10({handleDiceRoll, handleDiceSize}) {
  return (
    <button
      className="diceBtn"
      onClick={() => {
        handleDiceRoll();
        handleDiceSize(10);
      }}>
      Roll d10!
    </button>
  );
}
