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
      <Back/>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h1 className={styles["cart-rubrik"]}>SHOPPING CART</h1>
            <div className={styles["product-container"]}>
              {cart.map(product => <CartProduct key={product.vin} product={product} />)}
            </div>
          </Col>
          <Col xs={9} md={4}>
            <div className={styles["forms"]}>
              <Form onSubmit={handleClick}>
                <BillingFields />
                <ShippingFields />
                <Container className="text-center">
                <button type="submit" className={styles.buyButton} >BUY</button>
                </Container>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CartPage;