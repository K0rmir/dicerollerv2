export default function Rolld12({handleDiceRoll, handleDiceSize}) {
  return (
    <button
      onClick={() => {
        handleDiceRoll();
        handleDiceSize(12);
      }}>
      Roll a D12!
    </button>
  );
}
