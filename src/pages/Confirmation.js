import { useContext } from 'react'
import { CartContext } from "../contexts/CartContext"

import styles from '../css/Confirmation.module.css'

const Confirmation = () => {
  const { orderDetails } = useContext(CartContext)

  return (
    <div className={styles.confirmation}>
      <div className={styles.thanks}>
        <h1>Thank you for choosing us!</h1>
        <p>Below you will find information about your purchase</p>
      </div>
      <div className={styles.details}>
        <h4>Order details:</h4>
        <div className={styles.orderDetails}>
          <p className={styles.left}>Order Number:</p>
          <p className={styles.left}>Order Date:</p>
          <p className={styles.left}>Full Name:</p>
          <p className={styles.left}>Delivery Address:</p>
          <p className={styles.right}> {orderDetails.orderNumber}</p>
          <p className={styles.right}> {orderDetails.orderDate}</p>
          <p className={styles.right}> {orderDetails.ShippingName}</p>
          <p className={styles.right}> {orderDetails.ShippingAddress}</p>
          <p className={styles.right}> {`${orderDetails.ShippingCity}, ${orderDetails.ShippingCountry}`}</p>
        </div>

        <h4>Car details:</h4>
        <div className={styles.carDetails}>
          <p className={styles.left}>Article Number</p>
          <p className={styles.left}>Make, Model:</p>
          <p className={styles.left}>Price:</p>
          <p > {orderDetails.vin}</p>
        </div>
        {orderDetails.cart.map((c) => (
          <div key={c.vin}>
            <p className={styles.right}>{c.vin}</p>
            <p className={styles.right}>{`${c.make} ${c.model}`}</p>
            <p className={styles.right}>{c.price} Kr</p>
          </div>
        ))}
      </div>

      <button onClick={() => window.print()}>Print </button>
    </div>
  );
}

export default Confirmation;