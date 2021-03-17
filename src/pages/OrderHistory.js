import { useScrollTrigger } from '@material-ui/core'
import { useContext } from 'react'
import { CartContext } from "../contexts/CartContext"
import { UserContext } from '../contexts/UserContext'
import styles from '../css/OrderHistory.module.css'
// import '../css/OrderHistory.module.css'

const OrderHistory = () => {
  const { orderDetails } = useContext(CartContext)
  const {users} =useContext(UserContext)
  
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
    </div>
   ); 
 } 

export default OrderHistory;