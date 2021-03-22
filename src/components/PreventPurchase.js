import { useContext } from "react"
import { CartContext } from "../contexts/CartContext";
import { useHistory } from 'react-router-dom';
import styles from '../css/PreventPurchase.module.css';

export default function PreventPurchase () {
    const { errorLogin, setErrorLogin} = useContext(CartContext);
    const history = useHistory();

    const redirectToLogin = () => {
        setErrorLogin(false)
        history.push("/login");
    }

    const closeErrorBox = () => {
        setErrorLogin(false)
    }
    
    return (
        <div className={styles.loginErrorBox}>
            <div className={styles.messageBox}>
                <img src="/assets/images/purchaseError.svg" alt="Purchase Error" />
                <span>Would you like to login?</span>
                <button className={styles.yesButton} onClick={redirectToLogin}>Yes</button>
                <img className={styles.exitButton} onClick={closeErrorBox} src="/assets/icons/purchaseErrorExit.svg" alt="Exit Purchase Error" />
            </div>         
        </div>
    )
}