import Order from "../components/Order"
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import styles from '../css/OrderHistory.module.css'
// import '../css/OrderHistory.module.css'

const OrderHistory = () => {
  const { users, currentUser } = useContext(UserContext)
  
  console.log(users)

  return (
    <div>
      <div>
        <h1 className={styles.h1}>Order History</h1>
        <div className={styles.boxfirst}>
        <h3>Latest Order</h3>
        <hr className={styles.hrcolor} />
        {users.map((user, index) => {
          if (user.email === currentUser.email) {
            return (
              user.previousOrders.map((order) => (
                <Order key={index} order={order} />  
              ))
            )
          }
        })}

        {/* <p> Total Price:............. kr </p>      */}
        </div>
     </div>
     </div>
   ); 
 } 

export default OrderHistory;