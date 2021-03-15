import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Register = () => {
  const { addToRegistration } = useContext(UserContext)
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  return (
    
      <form onSubmit={(e) => addToRegistration(e, userName, password, email)}>
        <input onChange={(e) => setUserName(e.target.value)}  placeholder="Name" required/>
        <input onChange={(e) => setEmail(e.target.value)}  placeholder="Email" required/>
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
        <button type="submit">Register</button>
      </form>
    
  );
}

export default Register;