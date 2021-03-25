import React, { useContext } from "react"
import CartProduct from "../components/CartProduct";
import BillingFields from "../components/BillingFields";
import PreventPurchase from "../components/PreventPurchase";
import { CartContext } from "../contexts/CartContext";
import ShippingFields from "../components/ShippingFields";
import styles from '../css/CartPage.module.css';
import { Container, Form } from "react-bootstrap";



const FilledCart = ({ handleClick }) => {
  const { cart, errorLogin } = useContext(CartContext);
  return (
    <div className={styles["filled-cart"]}>
      <div className={styles["product-container"]}>
        <h1 className={styles["cart-rubrik"]}>SHOPPING CART</h1>
        <div className={styles["product"]}>
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
            <Container>
              <button type="submit" className={styles.buyButton} >BUY</button>
            </Container>
          </div>
        </Form>
      </div>
      {errorLogin ? <PreventPurchase /> : ""}

    </div>
  );
}
export default FilledCart;