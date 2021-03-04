import { useHistory } from "react-router-dom";
import { car, boxDetails } from '../css/Car.module.css'
import { useContext } from "react"
import { CartContext }from "../contexts/CartContext"

export default function Car (props) {
  const { addToCart } = useContext(CartContext)
  const history = useHistory();
  const goToProduct = () => {
    history.push("/product/" + props.car.vin)
  }

  function Map(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 2 12 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>								
    );
  }

  return (
    <div className={car}>
      <img onClick={goToProduct} src={props.car.image} alt={"Image of " + props.car.make + " " + props.car.model + " " + props.car.year} />
      <div className={boxDetails}>             
        <h2>{props.car.make + " " + props.car.model}</h2>
        <h3>{props.car.year} / {props.car.miles}km <Map />{props.car.city}</h3>
        <h4>{props.car.price} kr</h4>
        <button onClick={() => addToCart(props.car)}>Add to Cart</button>
      </div>
    </div>
  );
}