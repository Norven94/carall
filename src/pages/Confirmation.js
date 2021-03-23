import { useContext} from 'react'
import Footer from '../components/Footer'
import { CartContext } from "../contexts/CartContext"
import styles from '../css/Confirmation.module.css'

const Confirmation = () => {
  const { orderDetails } = useContext(CartContext)
    
  return (
    <div className={styles.confirmation}>
      <img className={styles.logo} src="/assets/images/logo.svg" alt="Logo" />
      <img className={styles.confirm} src="/assets/icons/confirm.svg" alt="confirm icon" />
      <div className={styles.thanks}>
        <h1>Thank you for choosing us!</h1>
        <p>Below you will find information about your purchase</p>
      </div>

      <div className={styles.details}>
        <h4>Order details:</h4>
        <div className={styles.orderDetails}>
          <div className={styles.detailsLeft}>
            <p>Order Number:</p>
            <p>Order Date:</p>
            <p>Full Name:</p>
            <p>Delivery Address:</p>
          </div>
          <div className={styles.detailsRight}>
            <p> {orderDetails.orderNumber}</p>
            <p> {orderDetails.orderDate}</p>
            <p> {orderDetails.shippingDetails.ShippingName}</p>
            <p> {orderDetails.shippingDetails.ShippingAddress}</p>
            <p> {`${orderDetails.shippingDetails.ShippingCity}, ${orderDetails.shippingDetails.ShippingCountry}`}</p>
          </div>
        </div>

        <h4 >Car details:</h4>
        {orderDetails.cart.map((c,i) => (
          <div key={i} className={`${styles.carDetails} ${styles.carDetailsC}`}>
            <div className={styles.detailsLeft}>
              <p className={styles.left}>Article Number</p>
              <p className={styles.left}>Make, Model:</p>
              <p className={styles.left}>Price:</p>
            </div>
            <div className={styles.detailsRight} key={c.vin}>
              <p className={styles.right}>{c.vin}</p>
              <p className={styles.right}>{`${c.make} ${c.model}`}</p>
              <p className={styles.right}>{c.price} Kr</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.information}>
        <p>Oraganisation number : <span> 0000000</span></p>
        <p>Email : <span> info@Carall.se</span></p>
        <p>Telephone : <span> +46 000 000 00</span></p>
        <p>Address : <span> Adresslane 22A 21 2211 Stockholm</span></p>
      </div>

      <div className={styles.printButton}>
        <button className={styles.print} onClick={() => window.print()}>Print</button>
        <img className={styles.printIcon} src="assets/icons/print.svg" alt="" />
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default Confirmation;