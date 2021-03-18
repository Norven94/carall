import { useState } from "react";
import Login from "../components/Login";
import Register from '../components/Register';
import {Container } from "react-bootstrap"
import styles from "../css/login.module.css"
export default function LoginPage() {
  const [toBeLogin, setToBeLogin]=useState(true) 
  const toggle = () => {
    setToBeLogin(!toBeLogin)   
    }
    return (
      <div>
        <Container>
          {toBeLogin ? <Login /> : <Register />}          
            <p className={styles.toggleText} onClick={toggle}>{toBeLogin ? "Are you not a member yet?" :" Back to login"}</p>          
        </Container>
      </div>      
    )
  }