import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { CartContext } from "../contexts/CartContext"

export default function LogoutButton () {
    const { setLoginState, setCurrentUser,setToBeLogin } = useContext(UserContext);
    const { setOrderDetails, setBillingDetails, setShippingDetails, setPreviousOrderDetails } = useContext(CartContext);

    const logout = () => {
        setLoginState(false)
        setCurrentUser({})
        setOrderDetails(null)
        setBillingDetails({})
        setShippingDetails({})
        setPreviousOrderDetails([])
        setToBeLogin(true)
    }
    
    return (
        <p onClick={logout}>Logout</p>
    )
}