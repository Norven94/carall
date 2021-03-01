import { useContext } from React
import CarContext from '../contexts/CarContext'

import Car from '../components/Car'

const DiscountCarList = () => {
  const { cars } = useContext(CarContext);
  // const [isDiscount, setIsDicount] = useState(() => cars.filter((car) => car.isDiscount === true))
  {cars.filter((car) => car.isDiscount === true)}

  return (
    <div>
      
    </div>
  );
}

export default DiscountCarList;