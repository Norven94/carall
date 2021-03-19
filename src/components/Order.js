import { Container } from 'react-bootstrap'
import styles from '../css/Order.module.css'

export default function Order (props) {
    console.log(props)
    return (
        <div>
            <div className={styles.boxorder}>
            <h4> {props.order.orderDate} </h4>
                <div className={styles.firstinfo}>
                    <div className={styles.order1}>
                        <p> Order Number : </p>
                        <p> Order Date : </p> 
                        <p> Delivery Address : </p> 
                    </div>
                    <div className={styles.order2}>
                        <p> {props.order.orderNumber} </p>
                        <p> {props.order.orderDate} </p> 
                        <p>{props.order.shippingDetails.ShippingAddress} </p> 
                    </div>
                </div>
            <p className={styles.p}>Car details:</p>
            {props.order.cart.map((car) => (
                <div className={`${styles.secondInfo} ${styles.secondInfoS}`}>
                    <div className={styles.order1}>
                        <p> Article Number : </p>
                        <p> Make, Model : </p>
                        <p> Price :</p>
                    </div>
                    <div className={styles.order2}>
                        <p> {car.vin} </p>
                        <p> {car.make} {car.model} </p>
                        <p> {car.price} kr </p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}