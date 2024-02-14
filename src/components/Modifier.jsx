import "../css/Modifier.css";

export default function Modifier({
  handleModifierNumMinus,
  handleModifierNumPlus,
  modifier,
}) {
  return (
    <>
      <div className="modifierControl">
        <p className="header">Modifier</p>
        <div id="btns">
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
      </div>
    </>
  );
}
