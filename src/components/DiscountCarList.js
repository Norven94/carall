import { useContext } from "react"
import { CarContext } from '../contexts/CarContext'
import Car from './Car'

import Carousel from 'react-elastic-carousel'
import '../css/DiscountCarList.module.css'
import { alignPropType } from "react-bootstrap/esm/DropdownMenu"

const DiscountCarList = () => {
  const {carDiscount} = useContext(CarContext)
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1},
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 }
  ];

  return (
    <div className="cardiscount-container">
      <h2>Discount Cars</h2>
      <Carousel breakPoints={breakPoints}>
        {carDiscount.map((car) =>(
            <Car key={car.vin} car={car} />
        ))}
      </Carousel>
    </div>
  );
  
}

export default DiscountCarList;