import React from 'react'
import { useHistory } from 'react-router'
import { goToApplicationFormPage, goToHomePage, goToListTripsPage, goToLoginPage, goToAdminHomePage, goToTripsDetailsPage, goToCreateTripPage } from '../routes/coordinator'
import styled from 'styled-components'

const HomePage = () => {
    const history = useHistory()
    return (
        <ContainerBody>
            <P>LabeX</P>
            <FlexContainer>
                <Button onClick={() => goToListTripsPage(history)}>Ver Viagens</Button>
                <Button onClick={() => goToApplicationFormPage(history)}>Apllication Form Page</Button>
                <Button onClick={() => goToLoginPage(history)}>LoginPage</Button>
                <Button onClick={() => goToAdminHomePage(history)}>AdminHomePage</Button>
                <Button onClick={() => goToTripsDetailsPage(history)}>TripsDetailPage</Button>
                <Button onClick={() => goToCreateTripPage(history)}>CreateTripPage</Button>
            </FlexContainer>
        </ContainerBody>
    )

}

export default HomePage


const ContainerBody = styled.div`
max-width:800px;
background-color:red;
display:flex;
flex-direction:column;
/* justify-content:center; */
margin: 300px auto ;
/* align-items:center; */
height:300px;
`

const P = styled.p`
text-align:center;
font-size:2.5rem
`

const FlexContainer = styled.div`
display:flex;
justify-content:space-evenly;
`

const Button = styled.button`
background-color:blue;
font-size:2rem;
height:80px;
padding: 0 20px;
border-radius: 30px;
color:gray;
width:250px;
`


