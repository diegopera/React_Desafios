import { useState } from "react";
import "./QtyCounter.css";

function QtyCounter(props) {
  const [qty, setQty] = useState(1);

  function addQty() {
    if (qty < props.qtyLimit){
        setQty(qty + 1);
    }
  }

  function substQty() {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }

  return (
    <div className= "count-container">
      <div className="count" onClick={addQty}>
        +
      </div>
      <div className="qty">{qty}</div>
      <div className="count" onClick={substQty}>
        -
      </div>
    </div>
  );
}

export default QtyCounter;