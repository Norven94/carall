import React, { useContext, useState } from "react";
import { CarContext } from "../contexts/CarContext";

export default function Car(props) {
  const value = useContext(CarContext);
  const [products] = value.products;
  //console.log(value)

  const [index, setIndex] = useState(0);

  const cars = products.filter((product, index) => {
    return props.product.vin;
  });

  return (
    <div>
      {cars.map((product) => (
        <div className="car" key={props.product.vin}>
          <div
            className="img-container"
            style={{ backgroundImage: `url(${props.product.images[index]})` }}
          />
          <div className="box-details">
            <h2 title={props.produc.title}>{props.product.title}</h2>
            <h3>{props.product.price} kr</h3>
            <p>{props.product.descShort}</p>
            <p>{props.product.descLong}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
