import  { useContext, useState, useEffect } from 'react'
import { CartContext } from "../contexts/CartContext"

import styles from '../css/Confirmation.module.css'

const Confirmation = () => {
  const { orderDetails, cart } = useContext(CartContext)

  return (
    <div className={styles.confirmation}>
      <h1>Thank you for your purchase!</h1>
      <h3>Your order details</h3>
      <p>Full Name: {orderDetails.ShippingName}</p>
      <p>Delivery Address: {`${orderDetails.ShippingAddress}, ${orderDetails.ShippingCity}, ${orderDetails.ShippingCountry}`}</p>
      <h3>Car details:</h3>
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