import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { goToApplicationFormPage, goToHomePage, goToListTripsPage, goToLoginPage, goToAdminHomePage, goToTripsDetailsPage, goToCreateTripPage } from '../routes/coordinator'
import styled from 'styled-components'
import {Loading} from '../components/Loading'
import {Button} from '../components/Button'
const HomePage = () => {
    const history = useHistory()
 const [loading,setLoading] = useState({})
useEffect( ( ) => {
setTimeout(() => {
    setLoading({display:'none'})
}, 400);
},[])

    return (
        <div>

        <ContainerBody>
            <Loading style={loading}/>
            <P>LabeX</P>
            <FlexContainer>
                <Button text={"Ver Viagens"} onClick={() => goToListTripsPage(history)}/>
                {/* <Button onClick={() => goToApplicationFormPage(history)}>Apllication Form Page</Button> */}
                <Button text={"Login Page"} onClick={() => goToLoginPage(history)}/>
                {/* <Button onClick={() => goToAdminHomePage(history)}>AdminHomePage</Button>
                <Button onClick={() => goToTripsDetailsPage(history)}>TripsDetailPage</Button>
                <Button onClick={() => goToCreateTripPage(history)}>CreateTripPage</Button> */}
            </FlexContainer>
        </ContainerBody>
        </div>

    )

}

export default HomePage


const ContainerBody = styled.div`
/* max-width:800px; */
width:max(60%,330px);
/* background-color:red; */
display:flex;
flex-direction:column;
margin: 300px auto ;
/* align-items:center; */
border:1px solid black;
border-radius:8px;
box-sizing:border-box;
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
/* 
const Button = styled.button`
background-color:blue;
font-size:1.5rem;
height:50px;
padding: 0 20px;
border-radius: 30px;
color:white;
width:250px;
`
 */

