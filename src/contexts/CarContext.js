import {createContext, useState, useEffect} from "react"
import data from "../assets/json/cars.json"
export const CarContext = createContext();

const CarContextProvider =(props)=>{  
 
  const [cars, setCars] = useState(()=>data.map((car) => {          
    return{
      make:car.make,
      model:car.model,
      year:car.year,
      vin:car.vin,
      city:car.city,
      descShort:car.descShort,
      descLong:car.descLong,
      price:car.price,
      miles:car.miles === undefined ? 10000 : car.miles,
      isDiscount:car.price < 200000 ? true : false,
      image:`/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`,
      purchased: false,
      sold:false,
    }
  }))
  const [tempCars, setTempCars] = useState(cars)
  const [carDiscount] = useState(() => cars.filter((car) => car.isDiscount === true))
  
  const findProduct = (productId) => {
    return cars.find((p) => p.vin === productId);
  }
  
  const values =
  {
    cars,
    setCars,
    tempCars,
    setTempCars,
    findProduct,
    carDiscount, 
  }

  return(
    <CarContext.Provider value={values}>
      {props.children}
    </CarContext.Provider>
  )
}

export default CarContextProvider