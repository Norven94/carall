import CarList from "../components/CarList"
import DiscountCarList from "../components/DiscountCarList"
import WelcomeText from "../components/WelcomeText"
import Footer from '../components/Footer'
import footerstyle from '../css/Footer.module.css'

function Home() {  
  return (
    <div>
      <WelcomeText />
      <DiscountCarList />
      <CarList />  
      <div className={footerstyle.sticky}>
<Footer />
</div>
    </div>      
  )
}

export default Home


