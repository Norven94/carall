import {createContext, useState} from "react"
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
      miles:car.miles,
      isDiscount:car.price < 200000 ? true : false,
      image:`/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`,
    }
  }))
  
  const findProduct = (productId) => {
    return cars.find((p) => p.vin === productId);
  }

  // const [orders, setOrders] = useState([
  //   {
  //     make: "Chevrolet",
  //     vin: "1D4PT5GK0BW487259"
  //   },
  //   {
  //     make: "Pontiac",
  //     vin: "JN1CV6FE7DM360307"
  //   },
  // ])

  const addNewOrders = (newOrders) => setCars([newOrders, ...cars]);
  const values =
  {
    cars,
    findProduct,
    addNewOrders,
  }

  return(
    <CarContext.Provider value={values}>
      {props.children}
    </CarContext.Provider>
  )
}

export default CarContextProvider