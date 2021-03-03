import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { CarContext }from "../contexts/CarContext"


export default function CartProduct(props) {

    
    //Add when cart array is availible in CarContext.js

   // const {removeProduct} = useContext(CarContext)
    console.log("HEREEE");
    console.log(props);
    return (
        <div className="cart-container">
            <span className="cart-rubrik">SHOPPING CART</span>
            <Container>
                <Row>
                <Col>
                    <div className="bild-price">
                    <div className="bild"></div>
                    <p className="cart-price">{props.product.price} Kr</p>
                    <button className="delete-button">Delete</button>
                    </div>
                    </Col>
                    <Col>
                    <span className="product-make">{props.product.make}</span>
                    <br />
                    <span className="product-info">{props.product.model} / {props.product.year} / {props.product.miles}</span>
                    <br/>
                    <span>{props.product.city}</span>
                    <p className="longdesc-cart">{props.product.descLong}</p>
                    </Col>
                    
                </Row>
            </Container>
            
            
            
           {/* <button onClick={() => removeProduct(props)}>Remove</button> */}
        </div>
    )
    
}