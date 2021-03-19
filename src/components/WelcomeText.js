import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
export default function WelcomeText () {
  const { loginState } = useContext(UserContext);
  return (
    <div className="d-flex flex-row-reverse">
       <p className="text-center col-12 col-md-2" style={{ margin:"0", color:"white", backgroundColor:"#FE7F50" }}>{loginState && "LOGGED IN"}</p>
    </div>     
  )
}