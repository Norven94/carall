import {createContext, useContext, useState, useEffect} from "react"
import { CarContext } from "./CarContext"

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const { tempCars, setTempCars, cars, setCars} = useContext(CarContext);
    const [cart, setCart] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalOrder, setTotalOrder] = useState(0)
    const [orderDetails, setOrderDetails] = useState({})
    

    const addToCart = (product) => {
      if (!product.purchased) {        
        setCart([...cart, product])

        setCars(cars.map((car) => {
          if (car.vin === product.vin) {
            car.purchased = true;          
          }
          return car
        }))        
      } 
    }

    const removeProduct = (product) => {
      setCart(cart.filter((p) => p !== product));
      setCars(cars.map((car) => {
        if (car.vin === product.vin) {
          car.purchased = false;         
        }
        return car
      }))
    }
    
    //Things that need to dynamicaly change when cart changes
    useEffect(
      () =>{  
          setTotalProducts(cart.length)
          setTotalOrder(cart.reduce((acc,num) => {
            return acc+num.price          
          },0 ))

          setOrderDetails({...orderDetails, cart});

      }, [cart]   
    )
    // acc = totala värdet i cart (börjar alltid på 0)
    // num = objektet (bilen) 
    // returnerar det nya priset

    const values =
    {
        cart,
        addToCart,
        removeProduct,
        totalProducts,
        totalOrder,
        alert,
        orderDetails,
        setOrderDetails
    }

    return(
        <CartContext.Provider value={values}>
        {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider