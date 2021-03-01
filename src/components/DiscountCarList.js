import { useContext } from React
import CarContext from '../contexts/CarContext'

import Car from '../components/Car'

const DiscountCarList = () => {
  const { isDiscount } = useContext(CarContext);

  return (
    <div>
      {isDiscount.map((car) =>(
        <Car key={car.vin} car={car} />
      ))}
    </div>
  );
}

export default DiscountCarList;