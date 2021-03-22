import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Alert, Container, Form, Button} from "react-bootstrap"
import styles from "../css/login.module.css"

const Register = () => {
  const { addToRegistration, isMember, setIsMember } = useContext(UserContext)
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword]=useState("")
  const [isValid, setIsValid]=useState(false)
  
  useEffect(() => {
   setIsMember(false)
  }, [])

  useEffect(()=>{
    if(password!="" && password===confirmPassword){
      setIsValid(true)
    }
    else{
      setIsValid(false)
    }

  },[password,confirmPassword ])

  const emailChange = (e) => {
    setEmail(e.target.value)
  } 

  const passwordChange = (e) => {
    setPassword(e.target.value) 
  } 

  const checkPassword=(e)=>{ 
    setConfirmPassword(e.target.value)  
  }

  const handleSubmit=(e)=>{
    if(isValid){
    addToRegistration(e, email, password)
    }
    else{
      e.preventDefault();
    }
  }
 
  return (
    <div className="container col-md-6 py-5">
       <h1 className="text-center">Become a Member</h1>
      <Form onSubmit={handleSubmit}>
       <Alert variant={"danger"} className={`${styles.errorBox} ${isMember ? styles.active : styles.inactive}`}>This email already exist.</Alert>
       <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={emailChange} type="email" placeholder="Enter email"  required/>               
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Create a password</Form.Label>
          <Form.Control onChange={passwordChange} type="password" name="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm the password</Form.Label>
          <Form.Control className={isValid ? "is-valid" : "is-invalid"} onChange={checkPassword} type="password" name="confirm" placeholder="Confirm Password" required/>
        <Form.Control.Feedback className={`${styles.errorBox} ${isValid ? styles.active : styles.inactive}`}>OK! Click Submit</ Form.Control.Feedback>
        </Form.Group>
        <Container className="text-center">
          <Button className={styles.singInButton} variant="primary" type="submit">
             Submit
          </Button>
        </Container>
      </Form>
    </div>
  );
}

export default Register;