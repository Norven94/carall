import { useContext } from "react";
import{ CartContext } from "../contexts/CartContext";
import CarList from "../components/CarList";
import DiscountCarList from "../components/DiscountCarList";
import WelcomeText from "../components/WelcomeText";
import AddedToCartBox from "../components/AddedToCartBox";

function Home() {  
  const { addedToCart } = useContext(CartContext)
  return (
    <div>
      <WelcomeText />
      <DiscountCarList />
      <CarList />
      {addedToCart ? <AddedToCartBox /> : ""}     
    </div>      
  )
}

export default Home


