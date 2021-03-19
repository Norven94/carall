import { useHistory } from "react-router-dom";
import {
  car,
  boxDetails,
  isdiscount,
  undiscount,
  cartBox,
  location,
  purchased,
  notPurchased,
  purchasedBox,
  imageBox,
  discountTag
} from "../css/Car.module.css";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Car(props) {
  const { addToCart } = useContext(CartContext);
  const history = useHistory();
  const goToProduct = () => {
    history.push("/product/" + props.car.vin);
  };
  const handleClick = (e) => {
    e.stopPropagation()
    addToCart(props.car)
  }
  const priceWithSpace = props.car.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <div>
      <div onClick={goToProduct} className={car}>
        <div className={imageBox}>
          <span className={`${discountTag} ${props.car.isDiscount ? isdiscount : undiscount}`}>Sale</span>    
          <span className={`${purchasedBox} ${props.car.purchased ? purchased : notPurchased}`}>In your cart</span>
          <img
            
            src={props.car.image}
            alt={
              "Image of " +
              props.car.make +
              " " +
              props.car.model +
              " " +
              props.car.year
            }
          />
        </div>
        <div className={boxDetails}>
          <h2>{props.car.make + " " + props.car.model}</h2>
          <h3>
            {props.car.year} / {props.car.miles}{" "}km
          </h3>
          <h4 style={{paddingTop: "30px"}} className={props.car.isDiscount ? isdiscount : undiscount}>
            {priceWithSpace} kr{" "}
            <button className={cartBox} onClick={handleClick}>
            <img src="/assets/icons/cart.svg" alt="Cart"  className={cartBox} onClick={() => addToCart(props.car)}/>
            </button>
            
          </h4>
          
          <hr />
          <div className={location} style={{ paddingLeft: "0px" }}><img src="/assets/icons/mapicon.svg" alt="map symbol"/>{props.car.city}</div>
        </div>
      </div>
    </div>
  );
}
