import { CarContext } from "../contexts/CarContext";
import { useState, useContext } from "react";

export default function ProductPage (props) {
    const { findProduct } = useContext(CarContext);
    const [product] = useState(findProduct(parseInt(props.productId)))

    return (
        <div className="product-page">
            <img src={product.image} alt={"Image of " + product.make + " " + product.model + " " + product.year}/>
            <h2>{product.make}</h2>
            <span>{product.model + "/" + product.year + "/" + product.miles + " miles"}</span>
            <span>{product.city}</span>
            <p>{product.descLong}</p>
            <span>{product.price}</span>
            <button>Add to cart</button>
        </div>
    )
}