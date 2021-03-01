import { useHistory } from "react-router-dom";

export default function Car (props) {
  const history = useHistory();

  const goToProduct = () => {
    history.push("/product/" + props.post.vin)
  }

  return (
    <div>
      Car.js component
      <img onClick={goToProduct} img={props.post.image} alt={"Image of " + props.car.make + " " + props.car.model + " " + props.car.year} />
    </div>
  )
}