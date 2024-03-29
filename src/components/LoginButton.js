import { useContext } from "react";
import { UserContext } from "../contexts/UserContext"

export default function LoginButton() {
    const { setToBeLogin } = useContext(UserContext)
    const handleOnclick = () => {
        setToBeLogin(true)
    }
    return (
        <p onClick={handleOnclick}>Login</p>
    )
}