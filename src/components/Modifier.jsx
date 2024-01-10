import "../css/Modifier.css";

export default function Modifier({
  handleModifierNumMinus,
  handleModifierNumPlus,
  modifier,
}) {
  return (
    <>
      <div className="modifierControl">
        <p>Modifier</p>
        <button
          onClick={() => {
            handleModifierNumMinus();
          }}>
          -
        </button>
        <p id="modifierNum">{modifier}</p>
        <button
          onClick={() => {
            handleModifierNumPlus();
          }}>
          +
        </button>
      </div>
    </>
  );
}
