import { useHistory } from "react-router-dom";
<<<<<<< HEAD
import { car, boxDetails } from '../css/Car.module.css'
=======
>>>>>>> dev

export default function Car (props) {
  const history = useHistory();
  const goToProduct = () => {
    history.push("/product/" + props.car.vin)
  }


  return (
<<<<<<< HEAD
    <div className={car}>
      <img onClick={goToProduct} src={props.car.image} alt={"Image of " + props.car.make + " " + props.car.model + " " + props.car.year} />
      
          <div className={boxDetails}>
            
            <h2>{props.car.make + " " + props.car.model}</h2>
            <h3>{props.car.year} {props.car.city}</h3>
            <h4>{props.car.price} kr</h4>
            <button>Add to Cart</button>
          </div>
        </div>
      
    
=======
    <div className="car">
      <img onClick={goToProduct} src={props.car.image} alt={"Image of " + props.car.make + " " + props.car.model + " " + props.car.year} />      
      <div className="box-details">        
        <h2>{props.car.make + " " + props.car.model}</h2>
        <h3>{props.car.price} kr</h3>
        <p>{props.car.descShort}</p>
        <p>{props.car.descLong}</p>
        <button>Add to Cart</button>
      </div>
    </div>
>>>>>>> dev
  );
}