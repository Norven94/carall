import {createContext, useState, useContext, useEffect, useRef } from "react"
import { CartContext } from "../contexts/CartContext";
import { CarContext } from "../contexts/CarContext";
import { useHistory } from 'react-router-dom'
export const UserContext = createContext();
const UserContextProvider = (props) => {  
    const history = useHistory();
    const { orderDetails, previousOrderDetails, setPreviousOrderDetails} = useContext(CartContext);
    const { cars, setCars } = useContext(CarContext);
    const [loginState, setLoginState] = useState(false);
    const [isMember, setIsMember] = useState(false);
    const [toBeLogin, setToBeLogin]=useState(true);
    const firstRender = useRef(true);
    const loggedIn = useRef(false);
    const [users, setUsers] = useState ([
        {
            email: "oskar@gmail.com",
            password: "1234"
        }, 
        {
            email: "celil@gmail.com",
            password: "celil123"
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
                    } else {
                        setPreviousOrderDetails([...previousOrderDetails, orderDetails])
                    }                                    
                }
            })                 
        }                    
    },[orderDetails])
    //Combined the users in Local storage with the hardcoded users
    useEffect(() => {
        let localStorageUsers = JSON.parse(localStorage.getItem('users'));
        let combinedUsers;
        if (localStorageUsers) {
            combinedUsers = localStorageUsers.map(user => ({ ...user, ...users.find(user2 => user2.email === user.email) }))
        } else {
            combinedUsers = users;
        }
        let finalCombinedUsers = combinedUsers.map((user) => {
            if (user.email === currentUser.email) {
                let currUser = {
                    ...user,
                    previousOrders: previousOrderDetails
                }
                setCurrentUser(currUser);
                return currUser;
            } else {
                return {
                    ...user
                }
            }
        });
// Looping all the cars. Check foreach car if there is a users with an old order. 
        cars.map((car) => {
            finalCombinedUsers.forEach(user => {
                if (user.previousOrders) {
                user.previousOrders.forEach(order => {
                    order.cart.forEach(cartItem => {
                        if (car.vin == cartItem.vin) {
                            car.sold = true;
                        }
                    })
                })
            }
            });
            return car;
        });

        setCars(cars);
        setUsers(finalCombinedUsers);
        localStorage.setItem('users', JSON.stringify(finalCombinedUsers));
    }, [previousOrderDetails])

    // When currentUser changes this codeblock runs, and puts the right users as as loggedin and saves it to Local Storage
    useEffect(() => {
        if (!firstRender.current) {
            users.map((user) => {
                if (user.email === currentUser.email) {
                    user.loggedIn = true;
                } return {
                    ...user,
                    previousOrders: previousOrderDetails
                };
            });
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            localStorage.setItem('users', JSON.stringify(users));
            setUsers(users);
        }
        firstRender.current = false;
    }, [currentUser]);

    // Runs when the page reloads, and goes thru the users and if user is set as LoggedIn. It put's them as actice user 
    useEffect(() => {
        let userList = JSON.parse(localStorage.getItem('users'));
        if (!userList) {
            return; }
        let user = userList.find(user => user.loggedIn === true);
        if (user) {
            setCurrentUser(user);
            setLoginState(true);
        }
    }, []);
// If You Log out, this put you Logged Out in Local storage
    useEffect(() => {
        if (!loginState && loggedIn.current) {
            users.map((user) => {
                user.loggedIn = false;
                return {
                    ...user,
                    previousOrders: previousOrderDetails
                }
            });
            localStorage.setItem('users', JSON.stringify(users));
        } 
        loggedIn.current = true;
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