import  { useContext }from "react";
import Login from "../components/Login";
import Register from '../components/Register';
import {Container } from "react-bootstrap"
import { UserContext } from "../contexts/UserContext"
import styles from "../css/login.module.css"
import footerstyle from '../css/Footer.module.css'

import Footer from '../components/Footer'
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
        <div className={footerstyle.sticky}>
        <Footer />
      </div>
      </div>      
    )
  }