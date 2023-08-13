import "../CartContainer/CartContainer.css";
import { getOrder } from "../../services/firebase";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import currencyConverter from "../../services/currencyConv";
import Swal from "sweetalert2";

function OrderConfirmation() {
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { orderID } = useParams();

  const MESES = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  async function requestOrder() {
    try {
      const response = await getOrder(orderID);
      setOrderData(response);
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        icon: "error",
        title: "Ups!",
        text: `No encontré el identificador de la compra: ${error.message}`,
        confirmButtonColor: "#817575",
        background: "#f5f0eb",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    requestOrder();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  let dispDate = "";
  if (orderData != null){
    const purchDate = orderData.date.toDate();
    dispDate = `${purchDate.getDate()} de ${MESES[purchDate.getMonth()]} de ${purchDate.getFullYear()} a las ${purchDate.getHours()}:${purchDate.getMinutes()}`;
  }

  return (
    <div id="main-fluid-container" className="container-fluid">
      {orderData === null ? (
        <div className="empty-cart">
          <h2>
            Ups.. no encontramos esa orden, contactate con nosotros y te
            ayudamos.
          </h2>
        </div>
      ) : (
        <div id="mainProd" className="row order-container">
          <p>Datos de tu compra</p>
          <div>
            <p>
              Identificador: <b>{orderData.id}</b>
            </p>
            <p>
              Nombre y Apellido:
              <b>{`${orderData.buyer.firstname} ${orderData.buyer.lastname}`}</b>
            </p>
            <p>
              Fecha: <b>{dispDate}</b>
            </p>
          </div>
          {orderData.items.map((item) => (
            <div
              key={item.id}
              style={{ marginBottom: 10 }}
              className="col-lg-12 col-md-12 col-s-12 order-container"
            >
              <img src={item.prodImg} alt={item.prodName} height="210" />
              <p>
                {item.prodName} por {item.qty}
                {item.qty > 1 ? ` Unidades - ` : ` Unidad - `}
                <b>{currencyConverter(item.totalPrice)}</b>
              </p>
            </div>
          ))}
          <p>Total de la Compra: {currencyConverter(orderData.total)}</p>)
        </div>
      )}
    </div>
  );
}

export default OrderConfirmation;
