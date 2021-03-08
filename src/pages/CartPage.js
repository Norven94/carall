import React, { useContext } from "react"
import CartProduct from "../components/CartProduct";
import BillingFields from "../components/BillingFields";
import { CartContext } from "../contexts/CartContext";
import ShippingFields from "../components/ShippingFields";
import styles from '../css/CartPage.module.css';
import { Col, Container, Row } from "react-bootstrap";

const CartPage = () => {
  const cartContext = useContext(CartContext);
  return ( 
    <div className={styles["cartPage-style"]}>
      <span className={styles["cart-rubrik"]}>SHOPPING CART</span>
      <Container>
        <Row>
        <Col xs={12} md={8}>
      {cartContext.cart.map(product =><CartProduct key={product.vin} product={product}/>)}
      </Col>
      <Col fluid xs={6} md={4}>
      <div className="sticky-top">
      <BillingFields />
      <ShippingFields />
      </div>
      
      </Col>
      </Row>
      </Container>
    </div>
   );
}
 
export default CartPage;