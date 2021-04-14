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
            <input value={email} onChange={handleEmail} placeholder="E-mail" />
            <input value={password} onChange={handlePassword} placeholder="Senha" />
            <button onClick={login}>Enviar </button>
        </div>
    )

}

export default LoginPage