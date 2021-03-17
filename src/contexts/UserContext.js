import {createContext, useState, useEffect} from "react"
export const UserContext = createContext();

const UserContextProvider = (props) => {  
    const [loginState, setLoginState] = useState(false);
    const [isMember, setIsMember] = useState(false);
    const [users, setUsers] = useState([]);
    const addToRegistration = (e, email, password) => {
        e.preventDefault()
        const member = {
            email, 
            password
        } 
        let isAlreadyMember =false   
        for(let i =0; i< users.length; i++){
            if(users[i].email === member.email) {
                  setIsMember(true);
                isAlreadyMember=true
                console.log('already_a_member')               
            }
        }   
   
        if (!isAlreadyMember) {
            console.log('new member')
            setUsers([member, ...users])
        } 
        else{
            setIsMember(true)
        }
    }
    console.log(users)

    const values =
    {
        loginState, 
        users,
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