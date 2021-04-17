import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { goToListTripsPage, goToLoginPage } from '../routes/coordinator'
import styled from 'styled-components'
import { Loading } from '../components/Loading'
import { Button } from '../components/Button'
const HomePage = () => {
    const history = useHistory()
    const [loading, setLoading] = useState({})
    useEffect(() => {
        setTimeout(() => {
            setLoading({ display: 'none' })
        }, 400);
    }, [])

    return (
        <div>

            <ContainerBody>
                <Loading style={loading} />
                <P>LabeX</P>
                <FlexContainer>
                    <Button text={"Ver Viagens"} onClick={() => goToListTripsPage(history)} />
                    <Button text={"Login Page"} onClick={() => goToLoginPage(history)} />
                </FlexContainer>
            </ContainerBody>
        </div>
    )
}

export default HomePage


const ContainerBody = styled.div`
width:max(60%,330px);
display:flex;
flex-direction:column;
margin: 300px auto ;
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