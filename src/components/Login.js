import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"
import styles from "../css/login.module.css"

export default function Login () {
    const history = useHistory()
    const { loginState, setLoginState, currentUser, setCurrentUser } = useContext(UserContext); //users
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [users] = useState ([
        {
            username: "Oskar",
            email: "oskar@gmail.com",
            password: "1234"
        }, 
        {
            username: "Celil",
            email: "celil@gmail.com",
            password: "celil123"
        }, 
        {
            username: "Mikaela",
            email: "mikaela@gmail.com",
            password: "mikaela123"
        }, 
    ])

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
        if (loginState) {
            
        }
        console.log(loginState);
    }

    const displayError = (state) => {
        if (!state) {
            return (<span >You did not enter the correct credentials</span>)
        }
    }

    return (
        <div>
            <div>{displayError(loginState)}</div>            
            <input onChange={handleUsernameChange} placeholder="username/email"/>
            <input onChange={handlePasswordChange} placeholder="password" type="password" />
            <button onClick={login} >Sign in</button>
        </div>    
    )
}