import "../css/Quantity.css";

export default function Quantity({
  handleQuantityNumMinus,
  handleQuantityNumPlus,
  quantity,
}) {
  return (
    <>
      <div className="quantityControl">
        <p className="header">Quantity</p>
        <div id="btns">
          <button
            onClick={() => {
              handleQuantityNumMinus();
            }}>
            -
          </button>
          <p id="quantityNum">{quantity}</p>
          <button
            onClick={() => {
              handleQuantityNumPlus();
            }}>
            +
          </button>
        </div>
      </div>
    </>
  );
}
