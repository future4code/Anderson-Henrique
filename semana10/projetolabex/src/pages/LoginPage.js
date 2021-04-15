import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { goToAdminHomePage } from '../routes/coordinator'

const LoginPage = () => {
    console.log(window.localStorage)

    const history = useHistory()

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

    const login = async (event) => {
        event.preventDefault()
        const body = {
            email,
            password
        }
        try {
            const response = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/login", body)
            console.log("Response: ", response)
            window.localStorage.setItem("token", response.data.token)
            // history.push('/')
            goToAdminHomePage(history)
        } catch (error) {
            console.log("O êro é: ", error)
        }
    }


    return (
        <Container>
            <H1>Pagina de Login</H1>
            <Form onSubmit={login}>
                <Input type="email" value={email} onChange={handleEmail} pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"} placeholder="E-mail" required />
                <Input type="password" value={password} onChange={handlePassword} placeholder="Senha" required />
                <ContainerButtons>
                    <Button text={"Voltar"} onClick={history.goBack} />
                    <Button text={"Entrar"} />
                </ContainerButtons>

            </Form>

            {/* pattern={"(.*[a-z]){2}"} */}
        </Container>
    )

}

export default LoginPage

const Container = styled.div`
display:flex;
flex-direction:column;
background-color:pink;
max-width:800px;
margin: auto;
`

const H1 = styled.h1`
/* width: 80%;  */
/* margin: 0 auto; */
text-align:center;
`

const ContainerButtons = styled.div`
width:70%;
display:flex;
justify-content:space-between;
margin:  30px auto;
`


const Form = styled.form`
display:flex;
flex-direction:column;
height:500px;
/* background-color:red; */
`


const Input = styled.input`
height:60px;
padding-left: 24px;
border-radius:12px;
margin: 20px auto;
width:80%;
`