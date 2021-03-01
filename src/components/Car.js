import { useHistory } from "react-router-dom";

export default function Car (props) {
  const history = useHistory();

  const goToProduct = () => {
    history.push("/product/" + props.vin)
  }

  return (
    <div>
      Car.js component
      <img onClick={goToProduct} img="" alt="" />
    </div>
  )
}