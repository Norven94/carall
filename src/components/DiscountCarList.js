import { useContext } from "react"
import { CarContext } from '../contexts/CarContext'
import Car from './Car'

const DiscountCarList = () => {
  const {carDiscount} = useContext(CarContext)

  return (
    <div classname="cardiscount-container">
      {carDiscount.map((car) =>(
        <Car key={car.vin} car={car} />
      ))}
    </div>
  );
}

export default DiscountCarList;