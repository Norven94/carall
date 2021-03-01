import { useHistory } from "react-router-dom";
import React, { useContext, useState } from "react";
import { CarContext } from "../contexts/CarContext";

export default function Car (props) {
  const history = useHistory();
  const goToProduct = () => {
    history.push("/product/" + props.car.vin)
  }


  return (
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
      
    
  );
}