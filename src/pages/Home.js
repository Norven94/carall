import CarList from "../components/CarList"
import DiscountCarList from "../components/DiscountCarList"

function Home() {  
  return (
    <div>
      <DiscountCarList />
      <CarList />     
    </div>      
  )
}

export default Home


