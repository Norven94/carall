import { CarContext } from "../contexts/CarContext";
import { CartContext } from "../contexts/CartContext";
import { useState, useContext, useEffect } from "react";
import { Container, Col, Row, Form, Carousel } from "react-bootstrap";
import styles from "../css/productpage.module.css";
import Back from './Back'
import Car from './Car'
import Footer from "../components/Footer"
import footerstyle from '../css/Footer.module.css'

export default function ProductPage(props) {
  const { cars } = useContext(CarContext);
  const { findProduct } = useContext(CarContext);
  const { addToCart } = useContext(CartContext);
  // const [product] = useState(findProduct(props.productId));
  const { productId } = props.match.params
  const [product, setProduct] = useState(findProduct(productId));
  const [features, setFeatures]=useState([])

  useEffect(() => {
    setProduct(findProduct(productId))
  }, [productId])

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
    useEffect(() => {
      setFeatures(
        cars.filter((car)=>{
          return car.price < product.price + 40000 
          && car.price > product.price -40000 
          && car.price!=product.price
      })) 
    }, [product])
    

  return (
    <>
      <Back />

      <Container className={styles["product-page"]}>
        <Row>
          <Col className={styles.colContainer}>
            <Col xs={12} sm={12} lg={12} className={styles["image-container"]} style={{ padding:"0"}} >
              <span className={`${styles.discountTag} ${product.isDiscount ? styles.isdiscount : styles.undiscount}`}>Sale</span>
              <span className={`${styles.purchasedBox} ${product.purchased ? styles.purchased : styles.notPurchased}`}>In your cart</span>
              <span className={`${styles.soldBox} ${product.sold ? styles.sold : styles.notSold}`}>Sold Out</span>
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
            <Col>
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
            </Col>
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

            <button className={`${product.sold ? styles.isSold : styles.cartBox1}`} onClick={() => addToCart(product)}>
              <img
                src="../assets/icons/cart.svg"
                alt="Cart"
                className={styles.cartBox1}
                onClick={() => addToCart(product)}
              />
            </button>
          </Col>
        </Row>
      </Container>
      <div>
        <h1 className={styles.h1Carousel}>You may also like this</h1>
      </div>
     <Container fluid >
       <Row className="d-flex justify-content-center flex-wrap">
        {features.map((car) =>(     
            <Car key={car.vin} car={car} />
          ))}    
       </Row>
     </Container>

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
