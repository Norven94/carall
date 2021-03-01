import {useContext} from "react"
import {CarContext }from "../contexts/CarContext"
import Car from "./Car"

function CarList() {
  const {cars} =useContext(CarContext)
  return (         
     <div className="carlist-container">
        {cars.map((car)=>(        
          <Car key={car.vin} car={car} />          
          ))}      
      </div>
  )
}

export default CarList