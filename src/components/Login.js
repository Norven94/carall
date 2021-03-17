import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"
import styles from "../css/login.module.css"

export default function Login () {
    const history = useHistory()
    const { users, setLoginState, setCurrentUser } = useContext(UserContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");    

    const [isError, setIsError] = useState(false)

    const handleUsernameChange = (e) => {
        setUserName(e.target.value)
        setIsError(false);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setIsError(false);
    }

    const login = () => {
        users.map((user) => {
            if ((user.username === userName || user.email === userName) && user.password === password) {                
                setLoginState(true)
                setCurrentUser({
                    username: user.username,
                    email: user.email,
                    password: user.password
                });               
                history.push("/");                
            } else {
                setIsError(true);
            }
        })
    }

    return (
        <form onSubmit={login}>
            <span className={`${styles.errorBox} ${isError ? styles.active : styles.inactive}`}>You did not enter the correct credentials</span>
            <input onChange={handleUsernameChange} placeholder="username/email" required/>
            <input onChange={handlePasswordChange} placeholder="password" type="password" required/>
            <button>Sign in</button>
        </form>    
    )
}