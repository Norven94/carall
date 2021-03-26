import { useContext } from "react"
import { CarContext } from '../contexts/CarContext'
import Car from './Car'
import styles from '../css/DiscountCarList.module.css'

import Carousel from 'react-elastic-carousel'
import '../css/DiscountCarList.module.css'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 450, itemsToShow: 1 },
  { width: 630, itemsToShow: 2 },
  { width: 1100, itemsToShow: 3 },
  { width: 1550, itemsToShow: 4 },
  { width: 1900, itemsToShow: 5 }
]

const DiscountCarList = () => {
  const { carDiscount } = useContext(CarContext)

  return (
    <div className="discount">
      <h1 className={styles.h1}>Monthly Deals</h1>
      <Carousel itemPadding={[0, 0]} breakPoints={breakPoints}>
        {carDiscount.map((car) => (
          <Car key={car.vin} car={car} />
        ))}
      </Carousel>
    </div>
  );
}

export default DiscountCarList;

