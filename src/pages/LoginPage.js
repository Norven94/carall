import  { useContext }from "react";
import Login from "../components/Login";
import Register from '../components/Register';
import {Container } from "react-bootstrap"
import { UserContext } from "../contexts/UserContext"
import styles from "../css/login.module.css"
export default function LoginPage() {
const {toBeLogin, setToBeLogin} = useContext(UserContext)  
  const toggle = () => {
    setToBeLogin(!toBeLogin)   
    }
    return (
      <div>
        <Container className="py-0">
          {toBeLogin ? <Login /> : <Register />}          
            <p className={styles.toggleText} onClick={toggle}>{toBeLogin ? "Are you not a member yet?" :" Back to login"}</p>          
        </Container>
      </div>      
    )
  }