import CarList from "../components/CarList"
import DiscountCarList from "../components/DiscountCarList"
import WelcomeText from "../components/WelcomeText"
function Home() {  
  return (
    <div>
      <WelcomeText />
      <DiscountCarList />
      <CarList />     
    </div>      
  )
}
export default Home


