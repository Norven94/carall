import { CarContext } from "../contexts/CarContext";
import { CartContext } from "../contexts/CartContext";
import { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../css/productpage.module.css";
import { cartBox1 } from "../css/productpage.module.css";
import Back from './Back'

export default function ProductPage(props) {
  const { findProduct } = useContext(CarContext);
  const { addToCart } = useContext(CartContext);
  const [product] = useState(findProduct(props.productId));
  const priceWithSpace = product.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const spanStyle = {
    color: "#FE7F50",
  };

  const ReadMore = ({ children, maxChar }) => {
    const text = children;

    const [isTruncated, setIsTruncated] = useState(true);
    const resultString = isTruncated ? text.slice(0, maxChar) : text;

    function toggleIsTruncated() {
      setIsTruncated(!isTruncated);
    }
    return (
      <p>
        {resultString}
        <span style={spanStyle} onClick={toggleIsTruncated}>
          {isTruncated ? " Read More" : " Read Less"}
        </span>
      </p>
    );
  };

  return (
    <>
    <Back/>
    <Container className={styles["product-page"]}>
      <Row>
        <Col md={4} className={styles["image-container"]}>
          <span className={`${styles.discountTag} ${product.isDiscount ? styles.isdiscount : styles.undiscount}`}>Sale</span>    
          <span className={`${styles.purchasedBox} ${product.purchased ? styles.purchased : styles.notPurchased}`}>In your cart</span>
          <img
            src={product.image}
            alt={
              "Image of " +
              product.make +
              " " +
              product.model +
              " " +
              product.year
            }
          />
        </Col>
        <Col md={8} className={styles["product-details"]}>
          {/* <h2 className={styles['product-heading']}>{product.make}</h2> */}
          <h1 className={styles["product-info"]}>{product.model}</h1>
          <div className={styles["product-makemiles"]}>
            <h4>{product.make}</h4>
            <h4>{product.miles + " miles"}</h4>
          </div>
          <div className={styles["product-city-year"]}>
            <h6 className={styles["product-city"]}>{product.city}</h6>
            <h6 className={styles["product-year"]}>{product.year}</h6>
          </div>

          <ReadMore maxChar="100">{product.descLong}</ReadMore>

          <span className={styles["product-price"]}>{priceWithSpace}Kr</span>

          <button className={cartBox1} onClick={() => addToCart(product)}>
            <img
              src="../assets/icons/cart.svg"
              alt="Cart"
              className={cartBox1}
              onClick={() => addToCart(product)}
            />
          </button>
        </Col>
      </Row>
    </Container>
      </>
  );
      
  
}
