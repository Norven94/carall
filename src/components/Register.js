import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Register = () => {
  const { addToRegistration } = useContext(UserContext)
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  return (
      <form onSubmit={(e) => addToRegistration(e, email, password)}>
        <input onChange={(e) => setEmail(e.target.value)}  placeholder="Email" required/>
        {/* <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/> */}
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
        <button type="submit">Register</button>
      </form>
  );
}

export default Register;