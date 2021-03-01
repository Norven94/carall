import { useContext } from "react"
import CarContext from '../contexts/CarContext'

import Car from '../components/Car'

const DiscountCarList = () => {
  const {carDiscount} = useContext(CarContext)

  return (
    <div>
      {carDiscount.map((car) =>(
        <Car key={car.vin} car={car} />
      ))}
    </div>
  );
}

export default DiscountCarList;