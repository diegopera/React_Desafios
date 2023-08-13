import "./CartContainer.css";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";
import CartList from "./CartList";
import CartCheckOut from "./CartCheckOut";
import { createOrder, checkOrderStock } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import InputForm from "../InputForm/InputForm";

function CartContainer() {
  const { removeItem, cart, clearCart } = useContext(cartContext);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [totalCart, setTotalCart] = useState(0);
  const [buyerData, setBuyerData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    cart.length === 0
      ? setIsCartEmpty(true)
      : setTotalCart(cart.reduce((acum, item) => acum + item.totalPrice, 0));
  }, [cart]);

  function handleDeleteFromCart(id) {
    removeItem(id);
  };

  function onInputChange(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    const newState = {...buyerData}
    newState[field] = value;
    setBuyerData(newState);
  }

  async function handleCheckOut() {
    const orderData = {
      items: cart,
      buyer: {
        firstname: buyerData.firstname,
        lastname: buyerData.lastname,
        email: buyerData.email,
        phone: buyerData.phone,
        address: buyerData.address,
      },
      date: new Date(),
      total: totalCart,
    };
    try {
      const stockStatus = await checkOrderStock(orderData);
      if (stockStatus) {
        const orderID = await createOrder(orderData);
        Swal.fire({
          icon: "success",
          text: `Gracias por tu compra este es tu número identificador: ${orderID}`,
          confirmButtonColor: "#817575",
          background: "#f5f0eb",
        });
        clearCart(orderID);
        navigate(`/orders/${orderID}`);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ups!",
        text: `No se ha procesado la compra: ${error.message}`,
        confirmButtonColor: "#817575",
        background: "#f5f0eb",
      });
    }
  };

  return (
    <div id="main-fluid-container" className="row container-fluid">
      {isCartEmpty ? (
        <div className="empty-cart">
          <h2>Ups.. no hay nada en el carrito.</h2>
          <h2>
            Visita nuestra tienda y tentate con alguno de nuestros productos.
          </h2>
        </div>
      ) : (
        <>
          <div id="mainProd" className="col-lg-6 cart-prod-container">
            {cart.map((item) => (<CartList onDelFromCart={handleDeleteFromCart} key={item.id} {...item} ></CartList>))}
          </div>
          <div className="col-lg-6 form-container">
              <h2>Completa tus datos para procesar la compra</h2>
            <form className="form">
              <InputForm value={buyerData.firstname} type="text" name={"firstname"} label="Nombre:" onChange={onInputChange}></InputForm>
              <InputForm value={buyerData.lastname} type="text" name={"lastname"} label="Apellido:" onChange={onInputChange}></InputForm>
              <InputForm value={buyerData.email} type="email" name={"email"} label="Email:" onChange={onInputChange}></InputForm>
              <InputForm value={buyerData.phone} type="text" name={"phone"} label="Telefono:" onChange={onInputChange}></InputForm>
              <InputForm value={buyerData.address} type="text" name={"address"} label="Dirección:" onChange={onInputChange}></InputForm>
              <CartCheckOut isDisabled= {!(buyerData.firstname !== "" && buyerData.lastname !== "" && buyerData.email !== "" && buyerData.phone !== "" && buyerData.address !== "")} onClick={handleCheckOut} totalDisplay={totalCart} />
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default CartContainer;
