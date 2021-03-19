import styles from "../css/addedToCart.module.css";
import { useContext } from "react";
import{ CartContext } from "../contexts/CartContext";
import { useHistory } from 'react-router-dom';

export default function AddedToCartBox () {
    const { setAddedToCart } = useContext(CartContext)
    const history = useHistory();

    const closeAddedToCartBox = () => {
        setAddedToCart(false)
    }

    const redirectToCart = () => {
        history.push("/cartpage")
    }

    return (
        <div className={styles.addedToCartBox}>
            <div className={styles.messageBox}>
            <img src="/assets/icons/AddedToCart.svg" alt="Checkmark" />
            <span>A car have been added to your cart</span>
            <button className={styles.yesButton} onClick={redirectToCart}>Take me there</button>
            <img className={styles.exitButton} onClick={closeAddedToCartBox} src="/assets/icons/purchaseErrorExit.svg" alt="Close added tp cart box" />
            </div>
        </div>
    )
}