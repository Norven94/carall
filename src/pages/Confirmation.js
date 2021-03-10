import { useContext } from 'react'
import { CartContext } from "../contexts/CartContext"

import styles from '../css/Confirmation.module.css'

const Confirmation = () => {
  const { orderDetails } = useContext(CartContext)

  return (
    <div className={styles.confirmation}>
      <h1 className={styles.thanks}>Thank you for choosing us!</h1>
      <p>Below you will find information about your purchase</p>
      <h4>Order details:</h4>
      <p>Full Name: {orderDetails.ShippingName}</p>
      <p>Delivery Address: {`${orderDetails.ShippingAddress}, ${orderDetails.ShippingCity}, ${orderDetails.ShippingCountry}`}</p>
      <h4>Car details:</h4>
      {orderDetails.cart.map((c) => (
        <div key={c.vin}>
          <p>Article Number: {c.vin}</p>
          <p>Make: {c.make}</p>
          <p>Model: {c.model}</p>
        </div>
      ))}
      <button onClick={() => window.print()}>Print order confirmation</button>
    </div>
  );
}

export default Confirmation;