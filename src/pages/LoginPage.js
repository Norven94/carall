import { useState } from "react";
import Login from "../components/Login";
import Register from '../components/Register';

export default function LoginPage() {
  const [toBeLogin, setToBeLogin]=useState(true) 
  const toggle = () => {

    setToBeLogin(!toBeLogin)
    
    }
    return (
      <div>
       {toBeLogin ? <Login /> : <Register />}

       <button onClick={toggle}>{toBeLogin ? "Register here" :" Login here"}</button> 
      </div>      
    )
  }