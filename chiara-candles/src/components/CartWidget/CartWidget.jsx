import './CartWidget.css'

function CartWidget () {
    return (
        <div class="col-3">
        <div class="link-container">
          <ul class="main-links btn-main">
            <li>
              <img
                src="./media/checkOut.png"
                alt="cart"
                width="30"
                height="30"
                class="cart-img"
              />
              <a id="showCart" href="" class="btn">
                Carrito
              </a>
            </li>
            <li>
              <img
                src="./media/emptyCart.png"
                alt="cart"
                width="30"
                height="30"
                class="cart-img"
              />
              <a id="emptyCart" href="" class="btn">
                Vaciar Carrito
              </a>
            </li>
            <li>
              <img
                src="./media/username.png"
                alt="username"
                width="30"
                height="30"
                class="usr-img"
              />
              <a id="loginRegister" href="" class="btn">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default CartWidget;
