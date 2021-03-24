import styles from "../css/CarAnimation.module.css"

export default function CarAnimation () {
    return (
        <div className={styles.carBox}>
            <img className={styles.car} src="/assets/icons/car.gif" alt="Cart" />            
        </div>
    )
}