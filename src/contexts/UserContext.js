import {createContext, useState, useContext, useEffect, useRef } from "react"
import { CartContext } from "../contexts/CartContext";
import { useHistory } from 'react-router-dom'

export const UserContext = createContext();

const UserContextProvider = (props) => {  
    const history = useHistory();
    const { orderDetails, previousOrderDetails, setPreviousOrderDetails} = useContext(CartContext);
    const [loginState, setLoginState] = useState(false);
    const [isMember, setIsMember] = useState(false);
    const [toBeLogin, setToBeLogin]=useState(true);
    const firstRender = useRef(true);
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
            setCurrentUser(member);
            history.push("/");
        } 
        else{
            setIsMember(true)
        }
    }

    let userOrders = null; 

    useEffect(() => {
        if ( orderDetails ) {              
            users.map((user) => {
                if(user.email === currentUser.email) {                 
                    if(user.previousOrders) { 
                        userOrders = user.previousOrders
                        setPreviousOrderDetails([...userOrders, orderDetails])
                    }
                    else {
                        setPreviousOrderDetails([...previousOrderDetails, orderDetails])
                    }                                    
                }
            })                 
        }                    
    },[orderDetails])

    useEffect(() => {
        setUsers(users.map((user) => {
            if (user.email === currentUser.email) {   
                return {
                    ...user,
                    previousOrders: previousOrderDetails
                }               
            } 
            else {
                return user
            }
        }))
    },[previousOrderDetails])

    useEffect(() => {
        console.log("Current User", currentUser);
        if (!firstRender.current) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
        firstRender.current = false;  
    }, [currentUser]);

    useEffect(() => {
        console.log("Current User", currentUser);
        if (localStorage.getItem('currentUser')) {
            setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
            setLoginState(true);
        }
    }, []);

    useEffect(() => {
        if (!loginState) {
            localStorage.removeItem('currentUser');
        }
    }, [loginState]);

    const values =
    {
        loginState,
        setLoginState,
        users,
        setUsers,
        currentUser,
        setCurrentUser,
        addToRegistration,
        isMember,
        setIsMember,
        toBeLogin,
        setToBeLogin
    }

    return(
        <UserContext.Provider value={values}>
        {props.children}
        </UserContext.Provider>
    )

}

export default UserContextProvider