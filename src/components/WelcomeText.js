import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from "react";
import styles from "../css/WelcomeText.module.css"

export default function WelcomeText () {
  const { loginState } = useContext(UserContext);

  return (
    <div className="d-flex flex-row-reverse">
       <p className="text-center col-12" style={{ margin:"0", color:"white", backgroundColor:"#FE7F50" }}>{loginState && "You are logged in"}</p>
       {/* <p className={styles.pContact}>{loginState && "Test"}</p> */}
       {/* <div className={styles.pContact}>{loginState && "Test"}</div> */}
       {/* <p className={styles.pContact}></p>  */}
       {/* <p className={styles.pContact}>{loginState && "Contact us 24/7"}</p> */}
     
    </div>   
  )
}