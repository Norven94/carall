import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CarList from "../components/CarList";
import DiscountCarList from "../components/DiscountCarList";

import AddedToCartBox from "../components/AddedToCartBox";

import Footer from '../components/Footer'
import footerstyle from '../css/Footer.module.css'
import CarAnimation from "../components/CarAnimation";

function Home() {
  const { addedToCart } = useContext(CartContext)

  return (
    <div>

      <DiscountCarList />
      <CarAnimation />
      <CarList />
      {addedToCart && <AddedToCartBox />}
      <div className={footerstyle.sticky}>
        <Footer />
      </div>
    </div>
  )
}
export default Home


