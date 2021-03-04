import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { CarContext } from "../contexts/CarContext"
import styles from '../css/CartProduct.module.css';

export default function CartProduct(props) {
    const { removeProduct } = useContext(CarContext)

    return (
        <div className="cart-container">
            <Container>
                <Row>
                    <Col>
                        <div className={styles["bild-price"]}>
                            <div className={styles["product-image"]}>
                                <img src={props.product.image} alt={"Image of " + props.product.make + " " + props.product.model + " " + props.product.year} />
                            </div>
                            <p className={styles["cart-price"]}>{props.product.price} Kr</p>
                            <button onClick={() => removeProduct(props.product)} className={styles["delete-button"]}>Delete</button>
                        </div>
                    </Col>
                    <Col className={styles["info-col"]}>
                        <span className={styles["product-make"]}>{props.product.make}</span>
                        <br />
                        <span className={styles["product-info"]}>{props.product.model} / {props.product.year} / {props.product.miles}</span>
                        <br />
                        <span className={styles["product-city"]}>{props.product.city}</span>
                        <p className={styles["product-desc"]}>{props.product.descShort}</p>
                    </Col>
                </Row>
            </Container>
            <hr size="8" width="90%"></hr>
        </div>
    )
}