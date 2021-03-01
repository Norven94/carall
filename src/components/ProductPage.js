import { CarContext } from "../contexts/CarContext";
import { useState, useContext } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function ProductPage (props) {
    const { findProduct } = useContext(CarContext);
    const [product] = useState(findProduct(props.productId))
    
    return (
        <Container className="product-page">
            <Row>
                <Col lg={6} md={12}>
                    <img src={product.image} alt={"Image of " + product.make + " " + product.model + " " + product.year}/>
                </Col>
                <Col lg={6} md={12}>
                    <h2>{product.make}</h2>
                    <span>{product.model + "/" + product.year + "/" + product.miles + " miles"}</span>
                    <span>{product.city}</span>
                    <p>{product.descLong}</p>
                    <span>{product.price}</span>
                    <button>Add to cart</button>
                </Col>   
            </Row>         
        </Container>
    )
}