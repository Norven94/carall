import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export default function WelcomeText () {
  const { loginState } = useContext(UserContext);
  return (   
      <h1 className="text-center" style={{color:"#FE7F50" }}>{loginState && "Welcome To CARALL ! !"}</h1>
  )
}