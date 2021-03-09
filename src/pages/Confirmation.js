import  { useContext, useState, useEffect } from 'react'
import { CartContext } from "../contexts/CartContext"

import styles from '../css/Confirmation.module.css'

const Confirmation = () => {
  const { orderDetails, cart } = useContext(CartContext)
  const [confirm, setConfirm] = useState([])
  // console.log(orderDetails)


  return (
    <div className={styles.confirmation}>
      <h1>Thank you for your purchase!</h1>
      <h3>Your order details</h3>
      <p>Full Name: {orderDetails.ShippingName}</p>
      <p>Delivery Address: {`${orderDetails.ShippingAddress}, ${orderDetails.ShippingCity}, ${orderDetails.ShippingCountry}`}</p>
      <h3>Car details:</h3>
      {cart.map((c) => (
        <div key={c.vin}>
          <p>Make: {c.make}</p>
          <p>Model: {c.model}</p>
        </div>
          ))}
      
    
        
      
      <button>Print order confirmation</button>
    </div>
  );
}

export default Confirmation;