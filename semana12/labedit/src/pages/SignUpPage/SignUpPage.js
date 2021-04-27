import React from 'react'
import styled from 'styled-components'
import useForm from '../../hooks/useForm'
import ButtonTemplate from '../../components/ButtonTemplate'
import { useHistory } from 'react-router-dom'
import { goToSignUpPage } from '../../routes/coordinator'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'



const SignUpPage = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" ,username: ""})

    const history = useHistory()

    const onSubmit = async (evt) => {
        evt.preventDefault()
        console.log("FORM: ", form)
        const body = form
        try {
            const response = await axios.post(`${BASE_URL}signup`, body)
           
            console.log("Response.data: ", response.data)
        } catch (error) {
            console.log("ERRO:", error.response.data.message)
            alert(error.response.data.message)
        }

    }


    return (
        <div>
            <h1>SignUpPage</h1>
            <Input value={form.username} type={"text"} name='username' placeholder="Nome do usuário" onChange={onChange} />
            <Input value={form.email} type={"email"} name='email' placeholder="E-mail" onChange={onChange} />
            <Input value={form.password} type={"password"} name='password' placeholder="Password" onChange={onChange} />
            {/* <ButtonTemplate
                text={"Enviar"}
                onClick={onSubmit}
            /> */}
            <ButtonTemplate
                text={"Cadastre-se"}
                onClick={onSubmit}
            />


        </div>
    )
}

export default SignUpPage


const Input = styled.input`
background-color:pink;



`