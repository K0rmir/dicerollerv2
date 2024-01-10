export default function Rolld20({handleDiceRoll, handleDiceSize}) {
  return (
    <button
      onClick={() => {
        handleDiceRoll();
        handleDiceSize(20);
      }}>
      Roll a D20!
    </button>
  );
}
