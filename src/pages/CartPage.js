import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import CartProduct from "../components/CartProduct";
import BillingFields from "../components/BillingFields";
import PreventPurchase from "../components/PreventPurchase";
import { CartContext } from "../contexts/CartContext";
import { CarContext } from "../contexts/CarContext";
import { UserContext } from "../contexts/UserContext";
import ShippingFields from "../components/ShippingFields";
import styles from '../css/CartPage.module.css';
import { Container, Form } from "react-bootstrap";
import Back from '../components/Back'
import Footer from '../components/Footer'
import footerstyle from '../css/Footer.module.css'
import EmptyCart from '../components/EmptyCart'
import FilledCart from '../components/FilledCart'

const CartPage = () => {
  const { cart, setCart, setOrderDetails, billingDetails, shippingDetails, errorLogin, setErrorLogin, formWarning } = useContext(CartContext);
  const { cars, setCars, setTempCars } = useContext(CarContext);
  const { loginState } = useContext(UserContext);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault()
    // checks if billingDetails have proper characters in its fields
    if (!formWarning) {      
      if (loginState) {
        let timestamp = new Date().toLocaleDateString();
        let id = Math.floor(Math.random() * 100000);
        console.log(id);
        setOrderDetails({ billingDetails, shippingDetails, orderDate: timestamp, orderNumber: id, cart });
        history.push("/confirmation")
        //Reset filtering tempcar after purchase
        setTempCars(cars)
        //Reset car list and empty the cart after purchase 
        setCart([]);
        setCars(cars.map((car) => {
          if (car.purchased) {
            car.sold = true;
          }
          car.purchased = false;
          return car
        }));
      } else {
        setErrorLogin(true);
      }
    }
  }

  useEffect(() => {
    if (loginState) {
      setErrorLogin(false);
    }
  }, [])

  //let emptyCart = false;

    return (
      <div className={styles["cartPage-style"]}>
        <div className={styles["back-button"]}>
          <Back />
        </div>
        {cart.length === 0 ? <EmptyCart /> : <FilledCart handleClick={handleClick}/> }
        <Footer />
      </div>
    );
  }
  

export default CartPage;