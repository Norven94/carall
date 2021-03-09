import { useContext } from "react"
import { CarContext } from '../contexts/CarContext'
import Car from './Car'

import Carousel from 'react-elastic-carousel'
import '../css/DiscountCarList.module.css'
import { alignPropType } from "react-bootstrap/esm/DropdownMenu"


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 450, itemsToShow: 1 },
  { width: 630, itemsToShow: 2 },
  { width: 1100, itemsToShow: 3 }
]

const DiscountCarList = () => {
  const {carDiscount} = useContext(CarContext)

  return (
    <div className="discount">
      <h2>Discount Cars</h2>
      <Carousel itemPadding={[0, 0]} breakPoints={breakPoints}>
        {carDiscount.map((car) =>(
            <Car key={car.vin} car={car} />
        ))}
      </Carousel>
    </div>
  );
  
}

export default DiscountCarList;

