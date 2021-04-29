import React from 'react'
import styled from 'styled-components'
import useForm from '../../hooks/useForm'
import ButtonTemplate from '../../components/ButtonTemplate'
import { useHistory } from 'react-router-dom'
import { goToPostsPage, goToSignUpPage } from '../../routes/coordinator'
import { BASE_URL } from '../../constants/urls'
import { Container,BodyContainer,Form,Input} from './styled'

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
            alert("Usuario criado.Realizando Login...")
            goToPostsPage(history)
        } catch (error) {
            console.log("ERRO:", error.response.data.message)
            alert(error.response.data.message)
            
        }

    }


    return (
        <Container>
            <BodyContainer>
            <h1>SignUpPage</h1>
            <Form onSubmit={onSubmit}>

            <Input value={form.username} type={"text"} name='username' placeholder="Nome do usuário" onChange={onChange}  required pattern={"^.{4,}"} title="Usuário precisa ter no mínimo 4 caracteres"/>
            <Input value={form.email} type={"email"} name='email' placeholder="E-mail" onChange={onChange} required   pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"} title="Formato incorreto, preencha novamente" />
            <Input value={form.password} type={"password"} name='password' placeholder="Password" onChange={onChange} required  required pattern={"^.{4,}"} title="Mínimo 4 caracteres"/>
            <ButtonTemplate
                text={"Enviar"}
                // onClick={onSubmit}
            />
            </Form>
            </BodyContainer>
            



        </Container>
    )
}

export default SignUpPage


