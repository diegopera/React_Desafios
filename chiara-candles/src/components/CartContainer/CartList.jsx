import currencyConverter from "../../services/currencyConv";

function CartList(props) {
  const { prodID, prodImg, prodName, prodPrice, qty } = props;

  let itemTotalPriceARS = currencyConverter(prodPrice * qty);

  return (
    <div
      style={{ marginBottom: 10 }}
      className="col-lg-12 col-md-12 col-s-12 prod-container"
    >
      <img src={prodImg} alt={prodName} height="210" />
      <p>
        {prodName} por {qty} {qty > 1 ? "Unidades" : "Unidad"} - <b>{itemTotalPriceARS}</b>
      </p>
      <button
        onClick={() => props.onDelFromCart(prodID)}
        type="button"
        className="btn btn-outline-primary btn-addtc"
        data-bs-toggle="button"
        autoComplete="off"
      >
        Eliminar del Carrito
      </button>
    </div>
  );
}

export default CartList;
