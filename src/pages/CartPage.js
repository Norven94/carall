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

const expRE=/^[0-9]{2}\/[0-9]{2}$/; 
const cvcRE=/^[0-9]{3}$/; 

const CartPage = () => {
  const { cart, setCart, setOrderDetails, billingDetails, shippingDetails, errorLogin, setErrorLogin, formWarning, setFormWarning} = useContext(CartContext);
  const { cars, setCars } = useContext(CarContext);
  const { loginState } = useContext(UserContext);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault()
    // checks if billingDetails have proper characters in its fields
    if(!expRE.test(billingDetails.billingExdate)){
      console.log('please enter correct info')
      // return false; 
      setFormWarning(false);
      return formWarning;
    } 

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

export default CartPage;