export default function Login () {

    const handleUsernameChange = (e) => {
        console.log(e.target.value)
    }

    const handlePasswordChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <input onChange={handleUsernameChange} placeholder="username/email"/>
            <input onChange={handlePasswordChange} placeholder="password"/>
        </div>    
    )
}