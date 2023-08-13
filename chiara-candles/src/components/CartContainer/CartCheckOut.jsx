import currencyConverter from "../../services/currencyConv";

function CartCheckOut(props) {
  let total = currencyConverter(props.totalDisplay);
  return (
    <div className="cart-container">
      <div className="checkout">
        <button
          disabled={props.isDisabled}
          onClick={() => props.onClick()}
          type="button"
          className="btn btn-success"
          data-bs-toggle="button"
          autoComplete="off"
        >
          Finalizar Compra por un total de: {total}
        </button>
      </div>
    </div>
  );
}

export default CartCheckOut;
