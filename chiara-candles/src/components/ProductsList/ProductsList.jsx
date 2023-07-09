import currencyConverter from "../../services/currencyConv";
import ClassicButton from "../ClassicButton/ClassicButton";
import QtyCounter from "../QtyCounter/QtyCounter";
import "./ProductsList.css";

function ProductsList(props) {
  const { prodID, prodName, prodPrice, prodStock, prodImg } = props;

let itemPriceARS = currencyConverter(prodPrice);

  return (
      <div className="col-lg-3 col-md-6 col-s-12 prod-container">
          <img
            src={prodImg}
            alt={prodName}
            width="120"
            height="340"
          />
          <p id={prodID}>
            <b>{prodName}</b> Stock Disponible: <b>{prodStock}</b>
          </p>
          <b>{itemPriceARS}</b>
          <QtyCounter qtyLimit={prodStock}></QtyCounter>
          <ClassicButton itemID={prodID}>Add To Cart</ClassicButton>
        </div>

  );
}

export default ProductsList;
