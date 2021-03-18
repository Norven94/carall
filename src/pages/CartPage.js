import React, { useContext, useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import CartProduct from "../components/CartProduct";
import BillingFields from "../components/BillingFields";
import { CartContext } from "../contexts/CartContext";
import { CarContext } from "../contexts/CarContext";
import { UserContext } from "../contexts/UserContext";
import ShippingFields from "../components/ShippingFields";
import styles from '../css/CartPage.module.css';
import { Col, Container, Row, Form } from "react-bootstrap";
import Back from '../components/Back'

const CartPage = () => {
  const { cart, setCart, orderDetails, setOrderDetails, billingDetails, shippingDetails, previousOrderDetails, setPreviousOrderDetails} = useContext(CartContext);
  const { users, setUsers, currentUser } = useContext(UserContext);
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

  useEffect(() => {
      setUsers(users.map((user) => {
        if (user.email === currentUser.email) {          
          setPreviousOrderDetails([...previousOrderDetails, orderDetails])
          return {
            ...user,
            previousOrders: previousOrderDetails
          } 
        } else {
          return user
        }
      }))
  },[orderDetails])

  return (
    <div className={styles["cartPage-style"]}>
      <div className="back-button">
      <Back/>
      </div>
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