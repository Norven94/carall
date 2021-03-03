import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { CarContext }from "../contexts/CarContext"


export default function CartProduct(props) {
    const { removeProduct } = useContext(CarContext)

    return (
        <div className="cart-container">
            <Container>
                <Row>
                    <Col>
                    <div className="bild-price">
                    <div className="bild"></div>
                    <p className="cart-price">{props.product.price} Kr</p>
                    <button onClick={() => removeProduct(props.product)} className="delete-button">Delete</button>
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
            <hr size="8" width="90%"></hr>
        </div>
    )
    
}