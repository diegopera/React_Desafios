import { useState } from "react";
import "./QtyCounter.css";
import "../ClassicButton/ClassicButton.css";

function QtyCounter(props) {
  const [qty, setQty] = useState(1);

  function addQty() {
    if (qty < props.qtyLimit) {
      setQty(qty + 1);
    }
  }

  function substQty() {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }

  function handleClick () {
    props.onAddTC(qty)
    setQty(1);
  }

  return (
    <>
      <div className="count-container">
        <div className="count" onClick={substQty}>
          -
        </div>
        <div className="qty">{qty}</div>
        <div className="count" onClick={addQty}>
          +
        </div>
      </div>
      <button
        onClick={() => handleClick()}
        type="button"
        className="btn btn-outline-primary btn-addtc"
        data-bs-toggle="button"
        autoComplete="off"
      >
        Agregar Al Carrito
      </button>
    </>
  );
}

export default QtyCounter;
