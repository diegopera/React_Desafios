import './CartWidget.css'

function CartWidget () {
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
              <a id="showCart" href="" className="btn">
                Carrito
              </a>
            </li>
            <li>
              <img
                src="./media/emptyCart.png"
                alt="cart"
                width="30"
                height="30"
                className="cart-img"
              />
              <a id="emptyCart" href="" className="btn">
                Vaciar Carrito
              </a>
            </li>
            <li>
              <img
                src="./media/username.png"
                alt="username"
                width="30"
                height="30"
                className="usr-img"
              />
              <a id="loginRegister" href="" className="btn">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default CartWidget;
