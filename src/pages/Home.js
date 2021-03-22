import { useContext } from "react";
import{ CartContext } from "../contexts/CartContext";
import CarList from "../components/CarList";
import DiscountCarList from "../components/DiscountCarList";

import AddedToCartBox from "../components/AddedToCartBox";

import WelcomeText from "../components/WelcomeText"
import Footer from '../components/Footer'
import footerstyle from '../css/Footer.module.css'

function Home() {  
  const { addedToCart } = useContext(CartContext)
  return (
    <div>

      <DiscountCarList />
      <CarList />
      {addedToCart ? <AddedToCartBox /> : ""}     
      <div className={footerstyle.sticky}>
<Footer />
</div>
    </div>      
  )
}
export default Home


