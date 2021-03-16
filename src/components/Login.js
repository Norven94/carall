import { useState, useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function Login () {
    const { loginState } = useContext(UserContext); //users
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
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

    const handleUsernameChange = (e) => {
        setUserName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const login = () => {
        users.map((user) => {
            if (user.username === userName && user.password === password) {
                console.log(user);

                //return ""
            }
        })
        //alert("You did not choose a valid username or password");
    }

    return (
        <div>
            <input onChange={handleUsernameChange} placeholder="username/email"/>
            <input onChange={handlePasswordChange} placeholder="password" type="password" />
            <button onClick={login} >Sign in</button>
        </div>    
    )
}