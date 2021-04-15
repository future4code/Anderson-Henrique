import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Trip from '../components/Trip'
import { useProtectedPage } from '../hooks/useProtectedPage'
import styled from 'styled-components'
import {Button} from '../components/Button'
import { goToApplicationFormPage } from '../routes/coordinator'
const ListTripsPage = () => {
    const [trips, setTrips] = useState([])


    useEffect(() => {
        getTripsList()
    }, [])

    const history= useHistory()

    const getTripsList = async () => {
        try {
            const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips ")
            // console.log("Ver a response: ", response)
            setTrips(response.data.trips)
            // console.log("so confirmando mesmo se passou:", trips)

        } catch (error) {
            console.log("erro é ..... : ", error)
        }
    }


    const tripsToRender = trips.map( (trip) => {
        return(
        <Trip
        key={trip.id}
        name={trip.name}
        date={trip.date}
        description={trip.description}
        planet={trip.planet}
        durationInDays={trip.durationInDays}
        
        />
)
}
    )

    
    return (


        <Container>
            <H1>ListTripsPage</H1>
            {/* <button onClick={getTripsList}>Ver o response da API</button> */}
            
        { tripsToRender}
        <ContainerButtons>
            <Button onClick={history.goBack} text={"Voltar"}></Button>
            <Button onClick={()=> goToApplicationFormPage(history)} text={"Inscrever-se"}></Button>
            </ContainerButtons>
            
        </Container>
    )

}

export default ListTripsPage


const Container = styled.div`
display:flex;
/* max-width:800px; */
width:max(50%,375px);
flex-direction:column;
margin: 12px auto;
/* background-color:red; */

`

const ContainerButtons = styled.div`
/* max-width: 600px;
min-width: 400px; */
width:max(50%,375px);

display:flex;
justify-content: space-evenly;
margin: auto;

`
const H1 = styled.h1`
width: 200px;
margin: auto;
`