import CarList from "../components/CarList"
import DiscountCarList from "../components/DiscountCarList"
import WelcomeText from "../components/WelcomeText"
import Footer from '../components/Footer'

function Home() {  
  return (
    <div>
      <WelcomeText />
      <DiscountCarList />
      <CarList />  
      <Footer/>   
    </div>      
  )
}

export default Home


