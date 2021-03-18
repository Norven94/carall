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
                <span>You need to login in order to make a purchase</span>
                <span>Would you like to login?</span>
                <div className={styles.buttonBox}>
                    <button className={styles.yesButton} onClick={redirectToLogin}>Yes</button>
                    <button className={styles.noButton} onClick={closeErrorBox}>No</button>
                </div>
            </div>            
        </div>
    )
}