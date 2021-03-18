import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Alert, Container, Form, Button} from "react-bootstrap"
import styles from "../css/login.module.css"

const Register = () => {
  const { addToRegistration, isMember, setIsMember } = useContext(UserContext)
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const emailChange = (e) => {
    setEmail(e.target.value)
    setIsMember(false)
  } 

  const passwordChange = (e) => {
    setPassword(e.target.value)
  } 

  return (
    <div className="container col-md-6 py-5">
       <h1 className="text-center">BECOME A MEMBER</h1>
      <Form onSubmit={(e) => addToRegistration(e, email, password)}>
       <Alert variant={"danger"} className={`${styles.errorBox} ${isMember ? styles.active : styles.inactive}`}>This email already exist</Alert>
       <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={emailChange} type="email" placeholder="Enter email"  required/>               
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={passwordChange} type="password" placeholder="Password" required/>
        </Form.Group>
        <Container className="text-center">
          <Button className={styles.singInButton} variant="primary" type="submit">
             Register
          </Button>
        </Container>
      </Form>
    </div>
  );
}

export default Register;