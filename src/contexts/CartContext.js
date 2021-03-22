import {createContext, useContext, useState, useEffect, useRef } from "react"
import { CarContext } from "./CarContext"

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const { tempCars, setTempCars, cars, setCars} = useContext(CarContext);
    const [cart, setCart] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalOrder, setTotalOrder] = useState(0)
    const [orderDetails, setOrderDetails] = useState(null)
    const [billingDetails, setBillingDetails] = useState({})
    const [shippingDetails, setShippingDetails] = useState({})
    const [previousOrderDetails, setPreviousOrderDetails] = useState([])
    const [errorLogin, setErrorLogin] = useState(false)
    const [formWarning, setFormWarning] = useState(true)
    const firstRender = useRef(true); 

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

          if (!firstRender.current) {
            localStorage.setItem('cart', JSON.stringify(cart));
         }
         firstRender.current = false; 
      }, [cart]   
    )

    // Local Storage
    useEffect(() => {
      if (localStorage.getItem('cart')) {
        const cart = JSON.parse(localStorage.getItem('cart'));
        cart.forEach(product => {
          setCars(cars.map((car) => {
            if (car.vin === product.vin) {
              car.purchased = true;          
            }
            return car
          }))   
        });
        setCart(cart);
      }
      }, []); 

    const values =
    {
        cart,
        setCart,
        addToCart,
        removeProduct,
        totalProducts,
        totalOrder,
        orderDetails,
        setOrderDetails,
        billingDetails, 
        setBillingDetails,
        shippingDetails, 
        setShippingDetails,
        previousOrderDetails, 
        setPreviousOrderDetails,
        errorLogin, 
        setErrorLogin, 
        formWarning,
        setFormWarning
    }

    return(
        <CartContext.Provider value={values}>
        {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider