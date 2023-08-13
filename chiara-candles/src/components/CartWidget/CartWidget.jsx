import "./CartWidget.css";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const context = useContext(cartContext);
  let cartBtnText = "Carrito";
  return (
    <div className="col-3">
      <div className="link-container">
        <ul className="main-links btn-main">
          <li>
            <img
              src="./media/checkOut.png"
              alt="cart"
              width="30"
              height="30"
              className="cart-img"
            />
            {context.getTotalItemsInCart() === 0 ? (
              <Link to="/cart" className="btn">
                {cartBtnText}
              </Link>
            ) : (
              <Link to="/cart" className="btn">
                {context.getTotalItemsInCart()} Items
              </Link>
            )}
          </li>
          <li>
            <img
              src="./media/emptyCart.png"
              alt="cart"
              width="30"
              height="30"
              className="cart-img"
            />
            <Link onClick={() => {context.clearCart(0)}} className="btn">
              Vaciar Carrito
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CartWidget;
