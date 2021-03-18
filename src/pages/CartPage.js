import React, { useContext } from "react"
import { useHistory } from 'react-router-dom'
import CartProduct from "../components/CartProduct";
import BillingFields from "../components/BillingFields";
import { CartContext } from "../contexts/CartContext";
import { CarContext } from "../contexts/CarContext";
import ShippingFields from "../components/ShippingFields";
import styles from '../css/CartPage.module.css';
import { Col, Container, Row, Form } from "react-bootstrap";
import Back from '../components/Back'

const CartPage = () => {
  const { cart, setCart, setOrderDetails, billingDetails, shippingDetails} = useContext(CartContext);
  const { cars, setCars } = useContext(CarContext);
  const history = useHistory();

  const handleClick = () => {
    history.push("/confirmation")
    let timestamp = new Date().toLocaleDateString();
    let id = Math.floor(Math.random() * 100000);
    setOrderDetails({billingDetails, shippingDetails, orderDate: timestamp, orderNumber: id, cart});    
    
    //Reset car list and empty the cart after purchase 
    setCart([]);
    setCars(cars.map((car) => {
      car.purchased = false;
      return car
    }));
  } 


  return (
    <div className={styles["cartPage-style"]}>
      <div className={styles["back-button"]}>
        <Back />
      </div>
      <div className={styles["div"]}>
        <div className={styles["product-container"]}>
          <h1 className={styles["cart-rubrik"]}>SHOPPING CART</h1>
          <div className={styles["product"]}>
            {cart.map(product => <CartProduct key={product.vin} product={product} />)}
          </div>
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