import React from 'react'
import styled from 'styled-components'
import useForm from '../../hooks/useForm'
import ButtonTemplate from '../../components/ButtonTemplate'
import { useHistory } from 'react-router-dom'
import { goToPostsPage, goToSignUpPage } from '../../routes/coordinator'
import { Container,BodyContainer,Form,Input} from './styled'



import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
const LoginPage = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const history = useHistory()

    const onSubmit = async (evt) => {
        evt.preventDefault()
        console.log("FORM: ", form)
        const body = form
        try {
            const response = await axios.post(`${BASE_URL}login`, body)
            console.log("RESPONSE: ", response.data.token)
            const token = response.data.token
            window.localStorage.setItem("token", token)
            alert("Logado com sucesso.")
            goToPostsPage(history)

        } catch (error) {
            console.log('error', error.response)
            alert(error.response.data.message)
        }
    }


    return (
        <Container>
            <BodyContainer>
                <h1>LoginPage</h1>
                <Form onSubmit={onSubmit}>
                    <Input value={form.email} type={"email"} name='email' placeholder="E-mail Ex: jose@gmail.com" onChange={onChange} pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"} title="Formato incorreto, preencha novamente" required />
                    <Input value={form.password} type={"password"} name='password' placeholder="Password" onChange={onChange} required pattern={"^.{4,}"} title="Mínimo 4 caracteres" />
                    <ButtonTemplate
                        text={"Enviar"}
                    // onClick={onSubmit}
                    />
                </Form>


                <ButtonTemplate
                    text={"Cadastre-se"}
                    onClick={() => goToSignUpPage(history)}
                />


            </BodyContainer>

        </Container>
    )
}

export default LoginPage
