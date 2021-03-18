import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

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
      <form onSubmit={(e) => addToRegistration(e, email, password)}>
        <input onChange={emailChange}  placeholder="Email" required/>
        <input type="password" onChange={passwordChange} placeholder="Password" required/>
        <button type="submit">Register</button>
        <p >{isMember && "this email already exist"}</p>
      </form>
  );
}

export default Register;