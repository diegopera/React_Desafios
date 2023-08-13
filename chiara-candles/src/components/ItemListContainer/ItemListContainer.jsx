import { getProducts, getCategoryInfo } from "../../services/firebase";
import ProductsList from "../ProductsList/ProductsList";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryID } = useParams();

  async function requestProducts() {
    setIsLoading(true);
    try {
      const response = categoryID ? await getCategoryInfo(categoryID) : await getProducts();
      setProducts(response);
    }
    catch (error){
      Swal.fire({
        icon: "error",
        title: "Ups!",
        text: `No encontré los productos que buscas: ${error.message}`,
        confirmButtonColor: "#817575",
        background: "#f5f0eb",
      });
      setIsLoading(false);
    }
    finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    requestProducts();
  }, [categoryID]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div id="main-fluid-container" className="container-fluid">
      <div id="mainProd" className="row g-3 main-prod-container">
        {products.length === 0 ? (<p>No hay productos en la base de datos</p>) : (products.map((item) => (<ProductsList key={item.id} {...item}></ProductsList>)))}
      </div>
    </div>
  );
}

export default ItemListContainer;