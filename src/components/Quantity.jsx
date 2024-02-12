import "../css/Quantity.css";

export default function Quantity({
  handleQuantityNumMinus,
  handleQuantityNumPlus,
  quantity,
}) {
  return (
    <>
      <div className="quantityControl">
        <p>Quantity</p>
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
    </>
  );
}
