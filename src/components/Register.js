import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Register = (props) => {
  const { addToRegistration, isMember } = useContext(UserContext)
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const handleOnclick=(props)=>{
   
  }
  return (
      <form onSubmit={(e) => addToRegistration(e, email, password)}>
        <input onChange={(e) => setEmail(e.target.value)}  placeholder="Email" required/>
        {/* <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/> */}
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
        <p onClick={handleOnclick}>Are you already member?</p>
        <button type="submit">Register</button>
        <p >{isMember ? "this email already exist":"welcome"}</p>
      </form>
  );
}

export default Register;