import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { LetterL } from './LetterL'
import { LogOut } from '@styled-icons/boxicons-solid/LogOut'
import { LogIn } from '@styled-icons/boxicons-solid/LogIn'
import { UserPlus } from '@styled-icons/boxicons-regular/UserPlus'
import { goToLoginPage, goToPostsPage, goToSignUpPage } from '../routes/coordinator'
import { useHistory } from 'react-router'


const Header = () => {
    const [token, setToken] = useState('')
    const history = useHistory()
    useEffect(() => {
        setToken(window.localStorage.getItem('token'))
    })
    const logOut = () => {
        let confirmLogout = window.confirm("Tem certeza que quer deslogar?")
        console.log("Confirm: ", confirmLogout)
        if (confirmLogout) {
            window.localStorage.removeItem('token')
            goToLoginPage(history)
        }
    }

    return (
        <Container>
            <HomeContainer>
                <SmallLetterL onClick={() => goToPostsPage(history)} title="Home Page" />

            </HomeContainer>
            <LogsContainer>
                {token ? <LogOutButton onClick={logOut} title="Logout" /> :
                    <>
                        <LogInButton onClick={() => null} title="Login" />
                        <NewUser onClick={() => goToSignUpPage(history)} title="Criar nova Conta" />
                    </>}
            </LogsContainer>

        </Container>
    )
}
export default Header

const SmallLetterL = styled(LetterL)`
color:#E1E1E1;
width:50px;
&:hover{
    cursor:pointer
}
`

const Container = styled.div`
background-color:white;
display:flex;
justify-content:space-between;
width:80%;
margin:auto;
border-radius:8px;
height:70px;
align-items:center;

`
const LogsContainer = styled.div`
`
const HomeContainer = styled.div`
margin-left:12px;
width:100px;
&:hover{
    cursor:pointer
}
`

const LogInButton = styled(LogIn)`
width:50px;
color:#004369;
&:hover{
    cursor:pointer
}
`

const LogOutButton = styled(LogOut)`
width:50px;
color:red;
&:hover{
    cursor:pointer
}
`
const NewUser = styled(UserPlus)`
width:50px;
color:green;
&:hover{
    cursor:pointer
}
`