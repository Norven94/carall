import { useContext, useRef } from "react"
import { CartContext } from "../contexts/CartContext";
import { useHistory } from 'react-router-dom';
import styles from '../css/PreventPurchase.module.css';

import useOutsideAlerter from "./useOutsideAlerter"

export default function PreventPurchase () {
    const { setErrorLogin} = useContext(CartContext);
    const history = useHistory();

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const redirectToLogin = () => {
        setErrorLogin(false)
        history.push("/login");
    }

    const closeErrorBox = () => {
        setErrorLogin(false)
    }
    
    return (
        <div ref={wrapperRef} className={styles.loginErrorBox}>
            <div className={styles.messageBox}>
                <img src="/assets/icons/purchaseError.svg" alt="Purchase Error" />
                <span>You need to login in order to make a purchase</span>
                <span>Would you like to login?</span>
                <button className={styles.yesButton} onClick={redirectToLogin}>Yes</button>
                <img className={styles.exitButton} onClick={closeErrorBox} src="/assets/icons/purchaseErrorExit.svg" alt="Exit Purchase Error" />
            </div>         
        </div>
    )
}