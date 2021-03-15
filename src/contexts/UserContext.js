import {createContext, useState} from "react"

export const UserContext = createContext();

const UserContextProvider = (props) => {  
    const [loginState, setLoginState] = useState(false);
    const [currentUser, setCurrentUser] = useState ({});

    const values =
    {
        loginState,
        setLoginState,
        currentUser,
        setCurrentUser
    }

    return(
        <UserContext.Provider value={values}>
        {props.children}
        </UserContext.Provider>
    )

}

export default UserContextProvider