import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { Loading } from '../components/Loading'
import { goToAdminHomePage } from '../routes/coordinator'

const LoginPage = () => {

    useEffect(() => {
        setTimeout(() => {
            setLoading({ display: "none" })

        }, 400);
    }, [])

    const history = useHistory()
    const [loading, setLoading] = useState({})
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = async (event) => {
        event.preventDefault()
        setLoading({ display: "flex" })
        const body = {
            email,
            password
        }
        try {
            const response = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/login", body)
            window.localStorage.setItem("token", response.data.token)
            goToAdminHomePage(history)
        } catch (error) {
            console.log("O êro é: ", error)
        }
        setLoading({ display: "none" })

    }


    return (
        <Container>
            <Loading style={loading} />
            <H1>Pagina de Login</H1>
            <Form onSubmit={login}>
                <Input type="email" value={email} onChange={handleEmail} pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"} placeholder="E-mail" required />
                <Input type="password" value={password} onChange={handlePassword} placeholder="Senha" required pattern={"^.{4,}"} />
                <ContainerButtons>
                    <Button text={"Voltar"} onClick={history.goBack} />
                    <Button text={"Entrar"} />
                </ContainerButtons>

            </Form>
        </Container>
    )

}

export default LoginPage

const Container = styled.div`
display:flex;
flex-direction:column;
background-color:pink;
width:max(60%,360px);
margin: auto;
`

const H1 = styled.h1`
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
`

const Input = styled.input`
height:60px;
padding-left: 24px;
border-radius:12px;
margin: 20px auto;
width:80%;
`