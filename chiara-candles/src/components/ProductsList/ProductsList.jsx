import currencyConverter from "../../services/currencyConv";
import "./ProductsList.css";
import { Link } from "react-router-dom";

function ProductsList(props) {
  const { prodID, prodName, prodPrice, prodImg } = props;

let itemPriceARS = currencyConverter(prodPrice);

  return (
      <div className="col-lg-3 col-md-6 col-s-12 prod-container">
        <Link to={`/product/${prodID}`}>
          <img
            src={prodImg}
            alt={prodName}
            width="120"
            height="340"
          />
        </Link>
          <b>{prodName} - {itemPriceARS}</b>
        </div>

  );
}

export default ProductsList;
