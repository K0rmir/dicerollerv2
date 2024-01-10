export default function Rolld4({handleDiceRoll, handleDiceSize}) {
  return (
    <button
      onClick={() => {
        handleDiceRoll();
        handleDiceSize(4);
      }}>
      Roll a D4!
    </button>
  );
}
