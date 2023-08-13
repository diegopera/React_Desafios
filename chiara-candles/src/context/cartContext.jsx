import { useState, createContext } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import Swal from "sweetalert2";

const cartContext = createContext({ cart: [] });

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(product, qty) {
    Toastify({
      text: `Se agrego ${qty} ${product.prodName} al carrito`,
      style: {
        background: "linear-gradient(to right, #817575, #B2AAAA)",
      },
    }).showToast();
    const newCart = [...cart];
    if (isInCart(product.prodID)) {
      const indexUpdate = cart.findIndex(
        (item) => item.prodID === product.prodID
      );
      newCart[indexUpdate].qty += qty;
      newCart[indexUpdate].totalPrice =
        product.prodPrice * newCart[indexUpdate].qty;
      setCart(newCart);
    } else {
      const newItemInCart = { ...product, qty };
      newItemInCart.totalPrice = product.prodPrice * qty;
      newCart.push(newItemInCart);
      setCart(newCart);
    }
  }

  function isInCart(id) {
    return cart.some((item) => item.prodID === id);
  }

  function getItemInCart(id) {
    return cart.find((item) => item.id === id);
  }

  function removeItem(id) {
    Swal.fire({
      title: "Esta seguro de eliminar?",
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar!",
      background: "#f5f0eb",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(cart.filter((item) => item.prodID !== id));
        Swal.fire({
          icon: "success",
          title: "Borrado!",
          text: "El producto se ha borrado correctamente",
          confirmButtonColor: "#817575",
          background: "#f5f0eb",
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Cancelado!",
          text: "El producto no se ha borrado",
          confirmButtonColor: "#817575",
          background: "#f5f0eb",
        });
      }
    });
  }

  function clearCart(value) {
    if (value) {
      setCart([]);
    } else {
      if (cart.length === 0) {
        Swal.fire({
          icon: "warning",
          title: "No hay nada en el carrito",
          text: "Navega el sitio y tentate con algo!",
          confirmButtonColor: "#817575",
          background: "#f5f0eb",
        });
      } else {
        Swal.fire({
          title: "Estas seguro de vaciar el carrito?",
          text: "Esta acción no se puede revertir",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, borrar!",
          background: "#f5f0eb",
        }).then((result) => {
          if (result.isConfirmed) {
            setCart([]);
            Swal.fire({
              icon: "success",
              title: "Listo!",
              text: "Navega el sitio y elegí lo que mas te gusta!",
              confirmButtonColor: "#817575",
              background: "#f5f0eb",
            });
          } else {
            Swal.fire({
              icon: "warning",
              title: "Cancelado!",
              text: "El carrito no se ha vaciado",
              confirmButtonColor: "#817575",
              background: "#f5f0eb",
            });
          }
        });
      }
    }
    return;
  }

  function getTotalItemsInCart() {
    let totalQty = 0;
    totalQty = cart.reduce((acum, item) => acum + item.qty, 0);
    return totalQty;
  }

  return (
    <cartContext.Provider
      value={{
        getItemInCart,
        cart,
        addToCart,
        removeItem,
        clearCart,
        getTotalItemsInCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };
