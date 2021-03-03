import React, { useContext } from "react"
import CartProduct from "../components/CartProduct";
import BillingFields from "../components/BillingFields";
import { CarContext } from "../contexts/CarContext";
import ShippingFields from "../components/ShippingFields";
import styles from '../css/CartPage.module.css';
import { Col, Container, Row } from "react-bootstrap";

const CartPage = () => {
const carContext = useContext(CarContext);
  return ( 
    <div className={styles["cartPage-style"]}>
      <span className={styles["cart-rubrik"]}>SHOPPING CART</span>
      <Container>
        <Row>
        <Col>
      {carContext.cart.map(product =><CartProduct key={product.vin} product={product}/>)}
      </Col>
      <Col>
      <BillingFields />
      <ShippingFields />
      </Col>
      </Row>
      </Container>
    </div>
   );
}
 
export default CartPage;