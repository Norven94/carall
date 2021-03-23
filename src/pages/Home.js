import { useContext } from "react";
import{ CartContext } from "../contexts/CartContext";
import CarList from "../components/CarList";
import DiscountCarList from "../components/DiscountCarList";

import AddedToCartBox from "../components/AddedToCartBox";

function Home(ref) {  
  const { addedToCart } = useContext(CartContext)

  return (
    <div>

      <DiscountCarList />
      <CarList />
      {addedToCart ? <AddedToCartBox /> : ""}     
    </div>      
  )
}
export default Home


