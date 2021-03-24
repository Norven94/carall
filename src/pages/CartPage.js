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

  if (cart.length === 0) {
    return (
      <div className={styles["cartPage-style"]}>
        <div className={styles["back-button"]}>
          <Back />
        </div>

          <div className={styles.EmptyCartBox}>
            <img src="/assets/icons/emptyBasket.svg" alt="Empty Basket Icon" />
            <span>oops!</span>
            <p>Your Cart Is Empty</p>
          </div>
        

        <div className={footerstyle.sticky}>
          <Footer />
        </div>
      </div>
    );
  }
  else {
    return (
      <div>
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
          <div>
          </div>
        </div>
        <div className={footerstyle.sticky}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default CartPage;