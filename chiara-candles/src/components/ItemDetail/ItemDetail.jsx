function ItemDetail(props) {
  return (
    <>
      <img src={props.imgSrc} alt={props.imgAlt} width="340" />
      <p>
        <b>{props.productName}</b>
      </p>
      <b>Precio: {props.productPrice}</b>
    </>
  );
}

export default ItemDetail;
