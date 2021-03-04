import { useContext, useState } from "react"
import {CarContext }from "../contexts/CarContext"
function SearchFields() {
  const cars = useContext(CarContext)

//   const searchList =(e)=>{    
//     setNewCars(cars.filter((car)=>{
//      return car.make.toLowerCase().search(e.target.value.toLowerCase()) !==-1 ;
//     }) 
//     )                    
// }
  return (
    <div className="search-container">
    <div>
      <input  type="text" placeholder="search" name="search" />
    </div>
   
  </div>
  )
}

export default SearchFields
