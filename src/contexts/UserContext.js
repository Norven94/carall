import {createContext, useState, useContext, useEffect } from "react"
import { CartContext } from "../contexts/CartContext";
import { useHistory } from 'react-router-dom'

export const UserContext = createContext();

const UserContextProvider = (props) => {  
    const history = useHistory();
    const { orderDetails, previousOrderDetails, setPreviousOrderDetails} = useContext(CartContext);
    const [loginState, setLoginState] = useState(false);
    const [isMember, setIsMember] = useState(false);
    const [users, setUsers] = useState ([
        {
            email: "oskar@gmail.com",
            password: "1234"
        }, 
        {
            email: "celil@gmail.com",
            password: "celil123"
        }, 
        {
            email: "mikaela@gmail.com",
            password: "mikaela123"
        }, 
    ])
    const [currentUser, setCurrentUser] = useState ({});

    const addToRegistration = (e, email, password) => {
        e.preventDefault()
        const member = {
            email, 
            password
        } 
        let isAlreadyMember =false   
        for(let i =0; i< users.length; i++){
            if(users[i].email === member.email) {
                isAlreadyMember=true         
            }
        }   
  
        if (!isAlreadyMember) {
            setUsers([member, ...users])
            setLoginState(true)
            history.push("/");
        } 
        else{
            setIsMember(true)
        }
    }
      console.log(users)
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
        addToRegistration,
        isMember
    }

    return(
        <UserContext.Provider value={values}>
        {props.children}
        </UserContext.Provider>
    )

}

export default UserContextProvider