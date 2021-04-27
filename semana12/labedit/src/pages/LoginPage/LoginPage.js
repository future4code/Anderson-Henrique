import React from 'react'
import styled from 'styled-components'
import useForm from '../../hooks/useForm'
import ButtonTemplate from '../../components/ButtonTemplate'
import {useHistory} from 'react-router-dom'
import {goToSignUpPage} from '../../routes/coordinator'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
const LoginPage = () => {
const [form,onChange, clear] = useForm({email: "",password: ""})

const history = useHistory()

const onSubmit= async (evt) => {
    evt.preventDefault()
    console.log("FORM: ",form)
const body = form
try{
    const response= await axios.post(`${BASE_URL}login`,body)
    console.log("RESPONSE: ",response.data.token)
    const token = response.data.token
    localStorage.setItem("token", token)
}catch(error){
    console.log("Erro encontrado: ",error.response.data)
}

}


    return (
        <div>
<h1>LoginPage</h1>
<Input value={form.email} type={"email"} name='email' placeholder="E-mail" onChange={onChange}/>
<Input value={form.password} type={"password"} name='password' placeholder="Password" onChange={onChange}/>
    <ButtonTemplate
    text={"Enviar"}
    onClick={onSubmit}
    />
    <ButtonTemplate
    text={"Cadastre-se"}
    onClick={() => goToSignUpPage(history)}
    />
    
    
        </div>
    )
}

export default LoginPage


const Input = styled.input`
background-color:pink;



`