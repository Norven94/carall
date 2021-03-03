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
const [cart, setCart] = useState([
  {
    make: "Chevrolet",
    model: "Camaro",
    year: 1973,
    vin: "1D4PT5GK0BW487259",
    city: "Santa Rosa",
    descShort: "in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
    descLong: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    price: 554963,
    miles: 15432
  }
])

const addToCart = (product) => {
  setCart([...cart, product])
 
}

const total = () =>{
  let totalVal = 0;
  for(let i = 0; i < cart.length; i++ ){
      totalVal += cart[i].price
  }
  setTotalOrder(totalVal)
}


  /*
  Add when cart array is added to this file

  const removeProduct = (product) => {
    setCart(cart.filter((p) => p !== product));
  }

  Also add removeProduct to values
  */

  const [carDiscount, setCarDicount] = useState(() => cars.filter((car) => car.isDiscount === true))

  const values =
  {
    cars,
    findProduct,
    carDiscount, 
    cart,
    addToCart,
  }

  return(
    <CarContext.Provider value={values}>
      {props.children}
    </CarContext.Provider>
  )
}

export default CarContextProvider