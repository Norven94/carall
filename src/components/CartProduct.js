import {useContext} from "react"
import { Col, Container, Row } from "react-bootstrap";
import {CarContext }from "../contexts/CarContext"


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
                    <div className="bild"></div>
                    <p className="cart-price">{props.product.price} Kr</p>
                    <button>Delete</button>
                    </Col>
                    <Col xs={6}>
                    <span className="product-make">{props.product.make}</span>
                    <span className="product-info">{props.product.model} / {props.product.year} / {props.product.miles} / {props.product.city}</span>
                    <p className="longdesc-cart">"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",</p>
                    </Col>
                    <Col>
                        Billing and shipping
                    </Col>
                </Row>
            </Container>
            
            
            
           {/* <button onClick={() => removeProduct(props)}>Remove</button> */}
        </div>
    )
    
}