export default function Rolld10({handleDiceRoll, handleDiceSize}) {
  return (
    <button
      onClick={() => {
        handleDiceRoll();
        handleDiceSize(10);
      }}>
      Roll a D10!
    </button>
  );
}
