import {createContext, useState, useEffect} from "react"
export const CartContext = createContext();

const CartContextProvider = (props) => {
    
    const [cart, setCart] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalOrder, setTotalOrder] = useState(0)
    const [alert, setAlert] = useState("");

    // const addToCart = (product) => {
    //   setCart([...cart, product])
    // }
    const addToCart = (product) => {
      let addProduct = true;
      for(let i = 0; i < cart.length; i++){
        if (cart[i].id === product.id) addProduct = false;
      }
      if (addProduct){
        setCart([...cart, product])
        setAlert("");
      } else setAlert(`${product.name} is already in your cart`)
   
    }
    const removeProduct = (product) => {
      setCart(cart.filter((p) => p !== product));
    }
    
    useEffect(
      () =>{  
          setTotalProducts(cart.length)
          setTotalOrder(cart.reduce((acc,num) => {
            return acc+num.price          
          },0 ))
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
    }

    return(
        <CartContext.Provider value={values}>
        {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider