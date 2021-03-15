// import { Users } from '../contexts/UserContext'

const Register = () => {
  return (
    <div className="register">
      <input onChange={handleRegisterName} placeholder="Name" value="" required/>
      <input onChange={handleRegisterEmail} placeholder="Email" value="" required/>
      <input onChange={handleRegisterPassword} placeholder="Password" value="" required/>
    </div>
  );
}

export default Register;