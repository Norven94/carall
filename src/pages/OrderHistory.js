import Order from "../components/Order"
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import styles from '../css/OrderHistory.module.css'
import Footer from '../components/Footer'

const OrderHistory = () => {
  const { users, currentUser } = useContext(UserContext)

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.box2}>
          <h1 className={styles.h1}>Order History</h1>
          <div className={styles.boxfirst}>
            <h3>Latest Order</h3>
            <hr className={styles.hrcolor} />
            {users.map((user) => {
              if (user.email === currentUser.email) {
                if (user.previousOrders) {
                  return (
                    user.previousOrders.map((order, index) => (
                      <Order key={index} order={order} />
                    ))
                  )
                } else {
                  return (
                    <p>You do not have any previous orders</p>
                  )
                }
              }
            })}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;