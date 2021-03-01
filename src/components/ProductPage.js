import { CarContext } from "../contexts/CarContext";
import { useState } from "react";

export default function ProductPage (props) {
    const { findProduct } = useContext(CarContext);
    const [product] = useState(findProduct(parseInt(props.productId)))

    return (
        <h1>{product}</h1>
    )
}