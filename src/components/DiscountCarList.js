import { useContext } from "react"
import { CarContext } from '../contexts/CarContext'
import Car from './Car'
//import Carousel from 'react-elastic-carousel'

const DiscountCarList = () => {
  /*
  const {carDiscount} = useContext(CarContext)
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2},
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ]
  */
  return (
    /*
    <div className="cardiscount-container">
      <Carousel breakPoints={breakPoints}>
        {carDiscount.map((car) =>(
            <Car key={car.vin} car={car} />
        ))}
      </Carousel>
    </div>
    */
   <div>
     <h1>This is DiscountCarList</h1>
   </div>
  );
  
}

export default DiscountCarList;