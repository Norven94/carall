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
  /* 
  function Map(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 2 12 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>								
    );
  } */

  const errorMessage = () => {
    //alert("noooo");
  }

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
            {props.car.year} / {props.car.miles}{" "}km {/* <Map /> */}
          </h3>
          <h4 style={{paddingTop: "30px"}} className={props.car.isDiscount ? isdiscount : undiscount}>
            {priceWithSpace} kr{" "}
            <button className={cartBox} onClick={handleClick}>
            <img src="/assets/icons/cart.svg" alt="Cart"  className={cartBox} onClick={() => addToCart(props.car)}/>
            </button>
            
          </h4>
          
          <hr />
          {/*  <button onClick={() => addToCart(props.car)}>Add to Cart</button> */}
          <div className={location} style={{ paddingLeft: "0px" }}>{props.car.city}</div>
        </div>
      </div>
    </div>
  );
}
