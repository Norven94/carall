import { CarContext } from "../contexts/CarContext";
import { CartContext } from "../contexts/CartContext";
import { useState, useContext } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import styles from '../css/productpage.module.css';


export default function ProductPage (props) {
    const { findProduct } = useContext(CarContext);
    const { addToCart } = useContext(CartContext);
    const [product] = useState(findProduct(props.productId));
    const priceWithSpace=product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    return (
        <Container className={styles['product-page']}>
            <Row>
                <Col md={4} className={styles['image-container']}>
                    <img src={product.image} alt={"Image of " + product.make + " " + product.model + " " + product.year}/>
                </Col>
                <Col md={8} className={styles['product-details']}>
                    <h2 className={styles['product-heading']}>{product.make}</h2>
                    <h3 className={styles['product-info']}>{product.model + "/" + product.year + "/" + product.miles + " miles"}</h3>
                    <span className={styles['product-city']}>{product.city}</span>
                    <p>{product.descLong}</p>
                    <span className={styles['product-price']}>{priceWithSpace}Kr</span>
                    <button onClick={() => addToCart(product)}>Add to cart</button>                 
                </Col>   
            </Row>         
        </Container>
    )
}