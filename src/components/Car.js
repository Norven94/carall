import { useHistory } from "react-router-dom";
import { car, boxDetails } from '../css/Car.module.css'
import { Col } from 'react-bootstrap'


export default function Car (props) {
  const history = useHistory();
  const goToProduct = () => {
    history.push("/product/" + props.car.vin)
  }


  return (
    <Col lg={3} md={4} sm={12} >
      <div className={car}>
        <img onClick={goToProduct} src={props.car.image} alt={"Image of " + props.car.make + " " + props.car.model + " " + props.car.year} />
        
        <div className={boxDetails}>             
          <h2>{props.car.make + " " + props.car.model}</h2>
          <h3>{props.car.year} / {props.car.miles}km {props.car.city}</h3>
          <h4>{props.car.price} kr</h4>
          <button>Add to Cart</button>
        </div>
      </div>
    </Col>

  );
}