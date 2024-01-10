export default function Rolld8({handleDiceRoll, handleDiceSize}) {
  return (
    <button
      onClick={() => {
        handleDiceRoll();
        handleDiceSize(8);
      }}>
      Roll a D8!
    </button>
  );
}
