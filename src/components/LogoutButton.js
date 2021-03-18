import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function LogoutButton () {
    const { setLoginState, setCurrentUser } = useContext(UserContext);

    const logout = () => {
        setLoginState(false)
        setCurrentUser({})
        setOrderDetails(null)
        setBillingDetails({})
        setShippingDetails({})
        setPreviousOrderDetails([])
    }
    
    return (
        <p onClick={logout}>Logout</p>
    )
}