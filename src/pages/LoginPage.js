import { useState } from "react";
import Login from "../components/Login";
import Register from '../components/Register';
import {Container } from "react-bootstrap"
export default function LoginPage() {
  const [toBeLogin, setToBeLogin]=useState(true) 
  const toggle = () => {
    setToBeLogin(!toBeLogin)   
    }
    return (
      <div>
        <Container>
          {toBeLogin ? <Login /> : <Register />}
          <button onClick={toggle}>{toBeLogin ? "Register here" :" Login here"}</button> 
        </Container>
      </div>      
    )
  }