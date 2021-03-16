import {createContext, useState, useEffect} from "react"

export const UserContext = createContext();

const UserContextProvider = (props) => {  
    const [loginState, setLoginState] = useState(false);
    const [users, setUsers] = useState([]);

    const addToRegistration = (e, userName, password, email) => {
        e.preventDefault()
        const member = {
            userName,
            password,
            email
        }

        setUsers([member, ...users])
    }

    const values =
    {
        loginState, 
        users,
        addToRegistration
    }

    return(
        <UserContext.Provider value={values}>
        {props.children}
        </UserContext.Provider>
    )

}

export default UserContextProvider