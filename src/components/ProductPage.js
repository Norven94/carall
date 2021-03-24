import { CarContext } from "../contexts/CarContext";
import { CartContext } from "../contexts/CartContext";
import { useState, useContext } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import styles from "../css/productpage.module.css";
import Back from './Back'
import Car from './Car'
import Footer from './Footer'
import footerstyle from '../css/Footer.module.css'
import Carousel from 'react-elastic-carousel'

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

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 450, itemsToShow: 1 },
    { width: 630, itemsToShow: 2 },
    { width: 1100, itemsToShow: 3 },
    { width: 1550, itemsToShow: 4 },
    { width: 1900, itemsToShow: 5 }
  ]

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
          <h1 className={styles["product-info"]}>Make  : {product.make}</h1>
            <div className={styles["details1"]}>
              <div className={styles.productmakemiles}>
                <h4>Model : {product.model} </h4>
                <h4>Year : {product.year} </h4>
                <h4>Mileage : {product.miles} miles </h4>
                <h4 className={styles["product-city"]}>Location : {product.city} </h4>
              </div>
              {/* <div className={styles["product-city-year"]}>
                  <h4>{product.miles} miles</h4>
                  <h6 className={styles["product-year"]}>{product.year}</h6>
                </div> */}
            </div>
            <ReadMore maxChar="100">{`Description: ${product.descLong}`}</ReadMore>

            <span className={styles["product-price"]}>Price : {priceWithSpace} Kr </span>

            <button className={`${product.sold ? styles.isSold : styles.cartBox1}`} onClick={() => addToCart(product)}>
              <img
                src="../assets/icons/cart-orange.svg"
                alt="Cart"
                className={styles.cartBox1}
                onClick={() => addToCart(product)}
              />
            </button>
          </Col>
          {/* <Col>
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
            </Col> */}
        </Row>
        {/* <Col> */}
        {/* <div className={styles.value}> */}
            
        {/* </div> */}
            {/* </Col> */}
      </Container>
      {/* <Col> */}
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
            {/* </Col> */}

      <div>
        <h1 className={styles.h1Carousel}>Another {product.make} model</h1>
      </div>

      <Carousel className={styles.carousel} breakPoints={breakPoints}>
        {/* <Carousel.Item> */}
          {cars.map((car) => {
            if (product.make === car.make && product.vin !== car.vin) {
            return (
                <Car key={car.vin} car={car} />
              )
            }
          })}
        {/* </Carousel.Item> */}
      </Carousel>

      <div>
        <h1 className={styles.h1Carousel}>You may also like this</h1>
      </div>

      <Carousel className={styles.carousel} breakPoints={breakPoints}>
        {/* <Carousel.Item> */}
          {cars.map((car) => {
            if (product.year === car.year && product.vin !== car.vin) {
            return (
                <Car key={car.vin} car={car} />
              )
            }
          })}
        {/* </Carousel.Item> */}
      </Carousel>

      <h4 className={styles.formH4}>Subscribe our newsletter and get the best deals for your car.</h4>
      <Form className={styles.subscribe}>
        <input type="text" className={styles.inputEmail} name="emailaddress" placeholder="Your email address here..."></input><button>SEND</button>
      </Form>
      <div>
      <div className={footerstyle.sticky}>
            <Footer />
          </div>
      </div>

    </>
  );


}
