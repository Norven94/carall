import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"
import styles from "../css/login.module.css"
import { Alert, Form, Button } from "react-bootstrap"

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

    const login = (e) => {
        e.preventDefault();
        users.map((user) => {
            if ((/*user.username === userName ||*/ user.email === userName) && user.password === password) {                
                setLoginState(true)
                setCurrentUser({
                    // username: user.username,
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
        <div className={styles.loginContainer}>
        <h1 className="login-header">Login</h1>
        <Form onSubmit={login}>
            <Alert variant={"danger"} className={`${styles.errorBox} ${isError ? styles.active : styles.inactive}`}>You did not enter the correct credentials</Alert>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleUsernameChange} type="email" placeholder="Enter email"  required/>               
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" required/>
            </Form.Group>
        <Button className={styles.singInButton} variant="primary" type="submit">
            Sing in
        </Button>
        </Form>

        </div>
        // <form onSubmit={login}>
        //     <span className={`${styles.errorBox} ${isError ? styles.active : styles.inactive}`}>You did not enter the correct credentials</span>
        //     <input onChange={handleUsernameChange} placeholder="email" required/>
        //     <input onChange={handlePasswordChange} placeholder="password" type="password" required/>
        //     <button>Sign in</button>
        // </form>    
    )
}