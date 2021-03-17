import {createContext, useState, useContext, useEffect } from "react"
import { CartContext } from "../contexts/CartContext";

export const UserContext = createContext();

const UserContextProvider = (props) => {  
    const { orderDetails, previousOrderDetails, setPreviousOrderDetails} = useContext(CartContext);
    const [loginState, setLoginState] = useState(false);
    const [users, setUsers] = useState ([
        {
            username: "Oskar",
            email: "oskar@gmail.com",
            password: "1234"
        }, 
        {
            username: "Celil",
            email: "celil@gmail.com",
            password: "celil123"
        }, 
        {
            username: "Mikaela",
            email: "mikaela@gmail.com",
            password: "mikaela123"
        }, 
    ])
    const [currentUser, setCurrentUser] = useState ({});

    const addToRegistration = (e, userName, password, email) => {
        e.preventDefault()
        const member = {
            userName,
            password,
            email
        }

        setUsers([member, ...users])
    }

    useEffect(() => {
        if ( orderDetails ) {            
            setPreviousOrderDetails([...previousOrderDetails, orderDetails])
            console.log(previousOrderDetails)
        }                    
    },[orderDetails])

    useEffect(() => {
        setUsers(users.map((user) => {
            if (user.email === currentUser.email) {     
              return {
                ...user,
                previousOrders: previousOrderDetails
              } 
            } else {
              return user
            }
          }))
          console.log(previousOrderDetails) 
    },[previousOrderDetails])

    const values =
    {
        loginState,
        setLoginState,
        users,
        setUsers,
        currentUser,
        setCurrentUser,
        addToRegistration
    }

    return(
        <UserContext.Provider value={values}>
        {props.children}
        </UserContext.Provider>
    )

}

export default UserContextProvider