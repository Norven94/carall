import {createContext, useState, useEffect} from "react"
import data from "../assets/json/cars.json"
export const CarContext = createContext();

const CarContextProvider =(props)=>{
  const [totalProducts, setTotalProducts] = useState(0)
  const [totalOrder, setTotalOrder] = useState(0)
 
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

  useEffect(
    () =>{  
        setTotalProducts(cart.length)
        setTotalOrder(cart.reduce((acc,num) => {
          console.log(acc)
          return acc+num.price
          
        },0 ))
    }, [cart]   
)
// acc = totala värdet i cart (börjar alltid på 0)
// num = objektet (bilen) 
// returnerar det nya priset

  const [carDiscount, setCarDicount] = useState(() => cars.filter((car) => car.isDiscount === true))

  const values =
  {
    cars,
    findProduct,
    carDiscount, 
    cart,
    addToCart,
    removeProduct,
    totalProducts,
    totalOrder,
  }

  return(
    <CarContext.Provider value={values}>
      {props.children}
    </CarContext.Provider>
  )
}

export default CarContextProvider