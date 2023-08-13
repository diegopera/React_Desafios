import "./ItemDetailContainer.css";
import { getProductInfo } from "../../services/firebase";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import currencyConverter from "../../services/currencyConv";
import QtyCounter from "../QtyCounter/QtyCounter";
import ItemDetail from "../ItemDetail/ItemDetail";
import { cartContext } from "../../context/cartContext";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";


function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { productID } = useParams();
  const { addToCart, getItemInCart } = useContext(cartContext);
  const navigate = useNavigate();

  async function requestProduct() {

    try {
      const response = await getProductInfo(productID);
      setProduct(response);
    }
    catch (error) {
      setIsLoading(false);
      Swal.fire({
        icon: "error",
        title: "Ups!",
        text: `No encontré el producto que buscas: ${error.message}`,
        confirmButtonColor: "#817575",
        background: "#f5f0eb",
      });
      navigate("/");
    }
    finally{
      setIsLoading(false);
    }
  }

  let itemPriceARS = currencyConverter(product.prodPrice);

  const itemInCart = getItemInCart(productID);
  const maxAllowedItems = itemInCart ? product.prodStock - itemInCart.qty : product.prodStock;

  useEffect(() => {
    requestProduct();
  }, [productID]);

  function handleAddToCart(qty) {
    addToCart(product, qty);
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div id="main-fluid-container" className="container-fluid">
      <div id="mainProd" className="row det-prod-container">
        <div className="col-lg-12 col-md-12 col-s-12 prod-container">
          <ItemDetail
            imgSrc={product.prodImg}
            imgAlt={product.prodName}
            productName={product.prodName}
            productPrice={itemPriceARS}
          ></ItemDetail>
          {product.prodStock === 0 || maxAllowedItems === 0 ? (
            <b style={{ color: "Green" }}>Sin Stock</b>
          ) : (
            <QtyCounter
              onAddTC={handleAddToCart}
              qtyLimit={maxAllowedItems}
            ></QtyCounter>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
