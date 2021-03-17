import { useContext } from 'react'
import { CartContext } from "../contexts/CartContext"
import styles from '../css/OrderHistory.module.css'
// import '../css/OrderHistory.module.css'

const OrderHistory = () => {
  const { orderDetails } = useContext(CartContext)
  
  return (
    <div>
      <div>
        <h1 className={styles.h1}>Order History</h1>
        <h3 className={styles.h2}>Latest Order</h3>
        <hr/>
        <h4>Purchase date....</h4>
      </div>
      <div className={styles.details}>
            <p>Order Number:</p>
            <p>Order Date:</p>
            <p>Delivery Address:</p>
          </div>

          <div>
            <p>Car details:</p>
              <p>Article Number</p>
              <p>Make, Model:</p>
              <p>Total Price:</p>
          </div>

      
    </div>
   ); 
 } 

export default OrderHistory;