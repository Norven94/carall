import React, { useContext } from "react"
import { useHistory } from 'react-router-dom'
import CartProduct from "../components/CartProduct";
import BillingFields from "../components/BillingFields";
import { CartContext } from "../contexts/CartContext";
import ShippingFields from "../components/ShippingFields";
import styles from '../css/CartPage.module.css';
import { Form } from "react-bootstrap";

const CartPage = () => {
  const { cart, orderDetails, setOrderDetails } = useContext(CartContext);
  const history = useHistory();

  const handleClick = () => {
    history.push("/confirmation")
    let timestamp = new Date().toLocaleDateString();
    let id = Math.floor(Math.random() * 100000);
    setOrderDetails({ ...orderDetails, orderDate: timestamp, orderNumber: id });
  }

  return (
    <div className={styles["cartPage-style"]}>
      <div className={styles["div"]}>
        <h1 className={styles["cart-rubrik"]}>SHOPPING CART</h1>
        <div className={styles["product-container"]}>
          {cart.map(product => <CartProduct key={product.vin} product={product} />)}
        </div>
      </div>
        <div className={styles["forms"]}>
          <Form onSubmit={handleClick}>
            <div className={styles["billing"]}>
              <BillingFields />
            </div>
            <div className={styles["shipping"]}>
              <ShippingFields />
              <button type="submit" className={styles.buyButton} >BUY</button>
            </div>
          </Form>
        </div>
      </div>
  );
}

export default CartPage;