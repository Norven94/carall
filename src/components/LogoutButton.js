import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { CartContext } from "../contexts/CartContext"
import { CarContext } from "../contexts/CarContext";

export default function LogoutButton () {
    const { setLoginState, setCurrentUser,setToBeLogin } = useContext(UserContext);
    const { setOrderDetails, setBillingDetails, setShippingDetails, setPreviousOrderDetails } = useContext(CartContext);
    const { cars, setTempCars }=useContext(CarContext)

    const logout = () => {
        setLoginState(false)
        setCurrentUser({})
        setOrderDetails(null)
        setBillingDetails({})
        setShippingDetails({})
        setPreviousOrderDetails([])
        setToBeLogin(true)
        setTempCars(cars)
    }
    
    return (
        <p onClick={logout}>Logout</p>
    )
}