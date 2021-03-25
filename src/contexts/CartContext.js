import { createContext, useContext, useState, useEffect, useRef } from "react"
import { CarContext } from "./CarContext"

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const { cars, setCars } = useContext(CarContext);
  const [cart, setCart] = useState([])
  const [totalProducts, setTotalProducts] = useState(0)
  const [totalOrder, setTotalOrder] = useState(0)
  const [orderDetails, setOrderDetails] = useState(null)
  const [billingDetails, setBillingDetails] = useState({})
  const [shippingDetails, setShippingDetails] = useState({})
  const [previousOrderDetails, setPreviousOrderDetails] = useState([])
  const [errorLogin, setErrorLogin] = useState(false)
  const [formWarning, setFormWarning] = useState(true)
  const [addedToCart, setAddedToCart] = useState(false)
  const firstRender = useRef(true);

  const addToCart = (product) => {
    if (!product.purchased) {
      setCart([...cart, product])
      setAddedToCart(true)

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

  //Runs when cart updates, and saves the new item in Cart Local Storage 
  useEffect(
    () => {
      setTotalProducts(cart.length)
      setTotalOrder(cart.reduce((acc, num) => {
        return acc + num.price
      }, 0))

      if (!firstRender.current) {
        localStorage.setItem('cart', JSON.stringify(cart));
      }
      firstRender.current = false;
    }, [cart]
  )

  // When i get cart från Local Storage, i do a loop over the cart and puts a car as purchased foreach 
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
    addedToCart,
    setAddedToCart,
    formWarning,
    setFormWarning
  }

  return (
    <CartContext.Provider value={values}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider