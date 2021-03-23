import { CarContext } from "../contexts/CarContext";
import { CartContext } from "../contexts/CartContext";
import { useState, useContext } from "react";
import { Container, Col, Row, Carousel, Form } from "react-bootstrap";
import styles from "../css/productpage.module.css";
import Back from './Back'
import Car from './Car'
import Footer from './Footer'
// import Carousel from 'react-bootstrap/Carousel'

export default function ProductPage(props) {
  const { cars } = useContext(CarContext);
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
        <span className={styles.pointer} style={spanStyle} onClick={toggleIsTruncated}>
          {isTruncated ? " Read More" : " Read Less"}
        </span>
      </p>
    );
  };

  return (
    <>
      <Back />

      <Container className={styles["product-page"]}>
        <Row className={styles.rowContainer}>
          <Col xs={11} sm={8} lg={5} className={styles["image-container"]}>
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
          <Col xs={11} sm={8} lg={6} className={styles["product-details"]}>
            <h1 className={styles["product-info"]}>{product.make}</h1>
            <div className={styles["details1"]}>
              <div className={styles["product-makemiles"]}>
                <h4>{product.model} / {product.year} / {product.miles} miles </h4>
                <h6 className={styles["product-city"]}>{product.city}</h6>
              </div>
              {/* <div className={styles["product-city-year"]}>
                  <h4>{product.miles} miles</h4>
                  <h6 className={styles["product-year"]}>{product.year}</h6>
                </div> */}
            </div>
            <ReadMore maxChar="100">{product.descLong}</ReadMore>

            <span className={styles["product-price"]}>{priceWithSpace}Kr</span>

            <button className={styles.cartBox1} onClick={() => addToCart(product)}>
              <img
                src="../assets/icons/cart.svg"
                alt="Cart"
                className={styles.cartBox1}
                onClick={() => addToCart(product)}
              />
            </button>
          </Col>
        </Row>
        {/* <Col> */}
        {/* <div className={styles.value}> */}
            <div className={styles.top1}>
            <img className={styles.check} src="/assets/icons/confirm.svg" alt="confirm icon" />
            <h4>Driving test service</h4>
            </div>
            <div className={styles.top2}>
            <img className={styles.check} src="/assets/icons/confirm.svg" alt="confirm icon" />
            <h4>Quick delivery</h4>
            </div>
            <div className={styles.top3}>
            <img className={styles.check} src="/assets/icons/confirm.svg" alt="confirm icon" />
            <h4>Get more discount as member</h4>
            </div>
        {/* </div> */}
            {/* </Col> */}
      </Container>

      <div>
        <h1 className={styles.h1Carousel}>You may also like this</h1>
      </div>

      <Carousel className={styles.carousel}>
        <Carousel.Item className={styles.carousel}>
          {cars.map((car) => {
            if (product.make === car.make && product.vin !== car.vin ) {
            } else if (product.year === car.year && product.vin !== car.vin) {
              return (
                <Car key={car.vin} car={car} />
              )
            }
          })}
        </Carousel.Item>
      </Carousel>

      <h4 className={styles.formH4}>Subscribe our newsletter and get the best deals for your car.</h4>
      <Form className={styles.subscribe}>
        <input type="text" className={styles.inputEmail} name="emailaddress" placeholder="Your email address here..."></input><button>SEND</button>
      </Form>
      <div>
      <Footer />
      </div>

    </>
  );


}
