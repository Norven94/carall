import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from "react";
export default function WelcomeText () {
  const { loginState } = useContext(UserContext);

  return (
    <div className="d-flex flex-row-reverse">
       <p className="text-center col-12" style={{ margin:"0", color:"white", backgroundColor:"#FE7F50" }}>{loginState && "You are logged in"}</p>
    </div>     
  )
}