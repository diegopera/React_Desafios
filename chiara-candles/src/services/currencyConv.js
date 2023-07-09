function currencyConverter(value){
    const valueARS = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
      }).format(value);
      return valueARS;
}

export default currencyConverter;
