import { useHistory } from "react-router-dom";
import React, { useContext, useState } from "react";
import { CarContext } from "../contexts/CarContext";

export default function Car (props) {
  const history = useHistory();
  const goToProduct = () => {
    history.push("/product/" + props.car.vin)
  }

  const value = useContext(CarContext);
  const [products] = value.products;
  //console.log(value)

  const [index, setIndex] = useState(0);

  const cars = products.filter((product, index) => {
    return props.product.vin;
  });

  return (
    <div>
      <img onClick={goToProduct} img={props.post.image} alt={"Image of " + props.car.make + " " + props.car.model + " " + props.car.year} />
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