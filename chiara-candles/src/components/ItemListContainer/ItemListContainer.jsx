import getProducts from "../../services/productsArray";
import ProductsList from "../ProductsList/ProductsList";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  async function requestProducts() {
    const response = await getProducts();
    setProducts(response);
  }

  useEffect(() => {
    requestProducts();
  }, []);

  return (
    <div id="main-fluid-container" className="container-fluid">
      <div id="mainProd" className="row g-3 main-prod-container">
        {products.map((item) => (
          <ProductsList key={item.prodID} {...item}></ProductsList>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
