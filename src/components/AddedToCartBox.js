import styles from "../css/addedToCart.module.css";
import { useContext, useRef } from "react";
import { CartContext } from "../contexts/CartContext";
import { useHistory } from 'react-router-dom';

import useOutsideAlerter from "./useOutsideAlerter"

export default function AddedToCartBox() {
    const { setAddedToCart } = useContext(CartContext)
    const history = useHistory();

    //Use the custom hook to disable the popup window when you click outside of the element
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const closeAddedToCartBox = () => {
        setAddedToCart(false)
    }

    const redirectToCart = () => {
        history.push("/cartpage")
        setAddedToCart(false)
    }
    return (
        <div ref={wrapperRef} className={styles.addedToCartBox}>
            <div className={styles.messageBox}>
                <img src="/assets/icons/confirm.svg" alt="Checkmark" />
                <span>A car have been added to your cart</span>
                <button className={styles.yesButton} onClick={redirectToCart}>Take me there</button>
                <img className={styles.exitButton} onClick={closeAddedToCartBox} src="/assets/icons/purchaseErrorExit.svg" alt="Close added tp cart box" />
            </div>
        </div>
    )
}