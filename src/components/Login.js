import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"
import styles from "../css/login.module.css"
import { Alert, Container, Form, Button} from "react-bootstrap"

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
            if ((user.email === userName) && user.password === password) {                
                setLoginState(true)
                setCurrentUser({
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
        <div className="container col-md-6 py-5">
            <h1 className="text-center">Login</h1>
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
                <Container className="text-center">
                    <Button className={styles.singInButton} variant="primary" type="submit">
                        Sign in
                    </Button>
                </Container>
            </Form>
        </div>
  
    )
}