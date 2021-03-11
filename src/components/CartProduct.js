import { useHistory } from "react-router-dom";
import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext"
import styles from '../css/CartProduct.module.css';
import { VscTrash } from 'react-icons/vsc';

export default function CartProduct(props) {
    const { removeProduct } = useContext(CartContext)
    const priceWithSpace=props.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    const history = useHistory();
    const goToProduct = () => {
        history.push("/product/" + props.product.vin);
      };
      const handleClick = (e) => {
        e.stopPropagation()
        removeProduct(props.product)
      }

    return (
        <div onClick={goToProduct} className={styles["cart-container"]}>
            <div className={styles["product-image"]}>
            <img src={props.product.image} alt={"Image of " + props.product.make + " " + props.product.model + " " + props.product.year} />
            </div> 
                        
            <div className={styles["product-info"]}>
                
                <div className={styles["make-year"]}>
                <span className={styles["product-model"]}>{props.product.model}</span>
                <br />
                    <p>{props.product.make}</p>
                    <p>{props.product.year}</p>
                 </div> 
                    <div className={styles["miles-city"]}>
                    <p>{props.product.miles} miles</p>
                    <p>{props.product.city}</p>
                    </div>
                
                        
                       
            </div>
            
            <div className={styles["remove-product"]}><span>{priceWithSpace} </span><VscTrash  onClick={handleClick} className={styles["trashcan"]} size={30} style={{ fill: 'black' }} /></div>  
            
            
        </div>
    )
}