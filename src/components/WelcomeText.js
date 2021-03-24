import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import styles from "../css/WelcomeText.module.css";

export default function WelcomeText () {
  const { loginState } = useContext(UserContext);

  if (loginState) {
    return (
      <div className={styles.welcomeBox}>
      </div>     
    )
  }
  else {
    return(
      <div className={styles.welcomeInactive}>
      </div>
    )
  }
  
}