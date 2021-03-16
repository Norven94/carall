import {createContext, useState, useEffect} from "react"

export const UserContext = createContext();

const UserContextProvider = (props) => {  
    const [loginState, setLoginState] = useState(false);
    const [users, setUsers] = useState([]);

    const addToRegistration = (e, email, password) => {
        e.preventDefault()
        const member = {
            email, 
            password
        }
        setUsers([member, ...users])
        
        users.map((user) => {
            if(user.email === member.email) {
                console.log('this email already exist. try another' );
            }
        })
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