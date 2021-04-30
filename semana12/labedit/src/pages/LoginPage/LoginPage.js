import React, { useEffect, useState } from 'react'
import useForm from '../../hooks/useForm'
import ButtonTemplate from '../../components/ButtonTemplate'
import { useHistory } from 'react-router-dom'
import { goToPostsPage, goToSignUpPage } from '../../routes/coordinator'
import { Container, BodyContainer, Form, Input } from './styled'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { LetterL } from '../../components/LetterL'
import Header from '../../components/Header'
import { Loading } from '../../components/Loading'


const LoginPage = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const [display,setDisplay] = useState('block')
    const history = useHistory()

useEffect( () => {
setTimeout(() => {
    setDisplay('none')
}, 1000);
},[])


    const onSubmit = async (evt) => {
        evt.preventDefault()
        const body = form
        try {
            const response = await axios.post(`${BASE_URL}login`, body)
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
            <Loading style={{display: `${display}`}}/>
            <BodyContainer>
                <LetterL />
                <Form onSubmit={onSubmit}>
                    <Input value={form.email} type={"email"} name='email' placeholder="email address" onChange={onChange} pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"} title="Formato incorreto, preencha novamente" required />
                    <Input value={form.password} type={"password"} name='password' placeholder="password" onChange={onChange} required pattern={"^.{4,}"} title="Mínimo 4 caracteres" />
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
