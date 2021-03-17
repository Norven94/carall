import Order from "../components/Order"
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import styles from '../css/OrderHistory.module.css'
import Order from '../components/Order'
import { UserContext } from "../contexts/UserContext"
// import '../css/OrderHistory.module.css'

const OrderHistory = () => {
  const {users} =useContext(UserContext)
  const {currentUser} =useContext(UserContext)
  const { users, currentUser } = useContext(UserContext)
  
  return (
    <div>
      <div>
        <h1 className={styles.h1}>Order History</h1>
        <h3 className={styles.h2}>Latest Order</h3>
        <hr/>
        {users.map((user, index) => {
          if (user.email === currentUser.email) {
            return (
              user.previousorder.map((order) => (
                <Order key={index} order={order} />
              ))
            )
          }
        })}
        {/* <h4>Purchase date....</h4> */}
      </div>      
        <h4>Purchase date....</h4>
      </div>

      {users.map((user, index) => {
        if (user.email === currentUser.email) {
          return (
            user.previousOrders.map((order) => (
              <Order key={index} order={order}/>
            ))    
          )
        }
      })}
      

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