import React, { useContext, useState } from "react"
import { useHistory } from 'react-router-dom'
import CartProduct from "../components/CartProduct";
import BillingFields from "../components/BillingFields";
import PreventPurchase from "../components/PreventPurchase";
import { CartContext } from "../contexts/CartContext";
import { CarContext } from "../contexts/CarContext";
import { UserContext } from "../contexts/UserContext";
import ShippingFields from "../components/ShippingFields";
import styles from '../css/CartPage.module.css';
import { Col, Container, Row, Form } from "react-bootstrap";
import Back from '../components/Back'

const CartPage = () => {
  const { cart, setCart, setOrderDetails, billingDetails, shippingDetails, errorLogin, setErrorLogin} = useContext(CartContext);
  const { cars, setCars } = useContext(CarContext);
  const { loginState } = useContext(UserContext);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault()
    if (loginState) {
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
    } else {
      setErrorLogin(true);
      console.log("You need to login");
    }
    
  } 

  return (
    <div className={styles["cartPage-style"]}>
      <Back/>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h1 className={styles["cart-rubrik"]}>SHOPPING CART</h1>
            <div className={styles["product-container"]}>
              {cart.map(product => <CartProduct key={product.vin} product={product} />)}
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className={styles["forms"]}>
              <Form onSubmit={handleClick}>
                <BillingFields />
                <ShippingFields />
                <button type="submit" className={styles.buyButton} >BUY</button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      {errorLogin ? <PreventPurchase /> : ""}
    </div>
  );
}

export default CartPage;