import "./ItemDetailContainer.css";
import { getProductInfo } from "../../services/productsArray";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import currencyConverter from "../../services/currencyConv";
import QtyCounter from "../QtyCounter/QtyCounter";
import ClassicButton from "../ClassicButton/ClassicButton";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { productID } = useParams();

  async function requestProduct() {
    const response = await getProductInfo(productID);
    setProduct(response);
  }

  let itemPriceARS = currencyConverter(product.prodPrice);

  useEffect(() => {
    requestProduct();
  }, []);

  return (
    <div id="main-fluid-container" className="container-fluid">
      <div id="mainProd" className="row g-1 det-prod-container">
        <div className="col-lg-12 col-md-12 col-s-12 prod-container">
          <img src={product.prodImg} alt={product.prodName} width="340" />
          <p id={product.prodID}>
            <b>{product.prodName}</b> Stock Disponible:{" "}
            <b>{product.prodStock}</b>
          </p>
          <b>{itemPriceARS}</b>
          <QtyCounter qtyLimit={product.prodStock}></QtyCounter>
          <ClassicButton itemID={product.prodID}>Agregar al Carrito</ClassicButton>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
