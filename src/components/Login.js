import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"
import styles from "../css/login.module.css"

export default function Login () {
    const history = useHistory()
    const { users, loginState, setLoginState, currentUser, setCurrentUser } = useContext(UserContext); //users
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");    

    const handleUsernameChange = (e) => {
        setUserName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
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
            }
        })
        console.log(currentUser);
    }

    return (
        <div>
            <span className={`${styles.errorBox} ${!loginState ? styles.active : styles.inactive}`}>You did not enter the correct credentials</span>
            <input onChange={handleUsernameChange} placeholder="username/email"/>
            <input onChange={handlePasswordChange} placeholder="password" type="password" />
            <button onClick={login} >Sign in</button>
        </div>    
    )
}