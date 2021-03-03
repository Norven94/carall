import {createContext, useState} from "react"
import data from "../assets/json/cars.json"
export const CarContext = createContext();

const CarContextProvider =(props)=>{

 
  const [cars] = useState(()=>data.map((car) => {          
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

/* Did a fake cart so i had something to loop out in CartProduct */
const [cart, setCart] = useState([])

const addToCart = (product) => {
  setCart([...cart, product])
}

  const removeProduct = (product) => {
    setCart(cart.filter((p) => p !== product));
  }


  const [carDiscount, setCarDicount] = useState(() => cars.filter((car) => car.isDiscount === true))

  const values =
  {
    cars,
    findProduct,
    carDiscount, 
    cart,
    addToCart,
    removeProduct,
  }

  return(
    <CarContext.Provider value={values}>
      {props.children}
    </CarContext.Provider>
  )
}

export default CarContextProvider