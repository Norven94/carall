import React, { useContext } from "react"
import { useHistory } from 'react-router-dom'
import CartProduct from "../components/CartProduct";
import BillingFields from "../components/BillingFields";
import { CartContext } from "../contexts/CartContext";
import ShippingFields from "../components/ShippingFields";
import styles from '../css/CartPage.module.css';
import { Col, Container, Row } from "react-bootstrap";

const CartPage = () => {
  const { cart, orderDetails, setOrderDetails } = useContext(CartContext);
  const history = useHistory();

  const handleClick = () => {
    history.push("/confirmation")
    let timestamp = new Date().toLocaleDateString();
    let id = Math.floor(Math.random() * 100);
    setOrderDetails({...orderDetails, orderDate: timestamp, orderNumber: id});
    console.log(orderDetails)
  }

  return (
    <div className={styles["cartPage-style"]}>
      <span className={styles["cart-rubrik"]}>SHOPPING CART</span>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            {cart.map(product => <CartProduct key={product.vin} product={product} />)}
          </Col>
          <Col /*fluid*/ xs={6} md={4}>
            <div className={styles.stickyTop}>
              <BillingFields />
              <ShippingFields />
              <button className={styles.buyButton} onClick={handleClick}>BUY</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CartPage;