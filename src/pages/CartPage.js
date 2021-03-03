import React, { useContext } from "react"
import CartProduct from "../components/CartProduct";
import BillingFields from "../components/BillingFields";
import { CarContext } from "../contexts/CarContext";
import ShippingFields from "../components/ShippingFields";


const CartPage = () => {
const carContext = useContext(CarContext);
  return ( 
    <div>
      {carContext.cart.map(product =><CartProduct key={product.vin} product={product}/>)}
    <BillingFields />
    <ShippingFields />
    </div>
   );
}
 
export default CartPage;