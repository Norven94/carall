import React, { useContext } from "react"
import CartProduct from "../components/CartProduct";
import { CarContext } from "../contexts/CarContext";

const CartPage = () => {
const carContext = useContext(CarContext);
  return ( 
    <div>
      {carContext.cart.map(product =><CartProduct key={product.vin} product={product}/>)}
    </div>
   );
}
 
export default CartPage;