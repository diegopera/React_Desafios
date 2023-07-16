import {getProducts, getCategoryInfo} from "../../services/productsArray";
import ProductsList from "../ProductsList/ProductsList";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const {categoryID} = useParams();

  async function requestProducts() {
    const response = categoryID ? await getCategoryInfo(categoryID) : await getProducts();
    setProducts(response);
  }

  useEffect(() => {
    requestProducts();
  }, [categoryID]);

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
