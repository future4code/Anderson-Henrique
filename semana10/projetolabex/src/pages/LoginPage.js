import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { goToAdminHomePage } from '../routes/coordinator'

const LoginPage = () => {
    console.log(window.localStorage)

const history= useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }

const login = async () => {
const body  = {
    email,
    password
}
    try{
        const response= await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/login",body) 
        console.log("Response: ",response)
        window.localStorage.setItem("token",response.data.token)
        // history.push('/')
        goToAdminHomePage(history)
    }catch(error){
        console.log("O êro é: ",error)
    }
}


    return (
        <div>
            <h1>Pagina de Login</h1>
            <form onSubmit={login}>
            <input  type ="email" value={email} onChange={handleEmail} pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"} placeholder="E-mail" required />
            <input  type="password" value={password} onChange={handlePassword} pattern={"(.*[a-z]){3}"}  placeholder="Senha"  required />
            <button >Enviar </button>
            </form>
            
            {/* pattern={"(.*[a-z]){2}"} */}
        </div>
    )

}

export default LoginPage