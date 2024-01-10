export default function Rolld6({handleDiceRoll, handleDiceSize}) {
  return (
    <button
      onClick={() => {
        handleDiceRoll();
        handleDiceSize(6);
      }}>
      Roll a D6!
    </button>
  );
}
