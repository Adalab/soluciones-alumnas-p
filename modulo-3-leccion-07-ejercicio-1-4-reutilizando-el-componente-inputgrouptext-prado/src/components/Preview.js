const renderPaymentTypeText = (propPayment) => {
  if (propPayment.paymentType === "creditCard") {
    return "Tarjeta de crédito";
  } else if (propPayment.paymentType === "cash") {
    return "Efectivo";
  } else if (propPayment.paymentType === "cashOnDelivery") {
    return "Contra reembolso";
  }
};

function Preview(props) {
  return (
    <div className="preview">
      <h2>Tus datos son:</h2>
      <ul>
        <li>Nombre: {props.name}</li>
        <li>Email: {props.email}</li>
        <li>Región: {props.region}</li>
        <li>Método de pago: {renderPaymentTypeText(props)}</li>
        <li>
          Has aceptado nuestros términos legales:{" "}
          {props.legalTerms === true ? "Sí" : "No"}
        </li>
      </ul>
    </div>
  );
}
export default Preview;
