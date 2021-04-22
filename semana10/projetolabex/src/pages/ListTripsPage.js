import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Trip from '../components/Trip'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { goToApplicationFormPage } from '../routes/coordinator'
import { Loading } from '../components/Loading'
const ListTripsPage = () => {

    useEffect(() => {
        getTripsList()
    }, [])

    const history = useHistory()
    const [loading, setLoading] = useState({})
    const [trips, setTrips] = useState([])

    const getTripsList = async () => {
        setLoading({ display: "flex" })
        try {
            const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips ")
            setTrips(response.data.trips)
        } catch (error) {
            console.log("erro é ..... : ", error)
        }
        setLoading({ display: "none" })
    }


    const tripsToRender = trips.map((trip) => {
        return (
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
            
            <Loading style={loading} />
            <H1>Lista de Viagens</H1>
            { tripsToRender}
            <ContainerButtons>
                <Button onClick={history.goBack} text={"Voltar"}></Button>
                <Button onClick={() => goToApplicationFormPage(history)} text={"Inscrever-se"}></Button>
            </ContainerButtons>

        </Container>
    )
}

export default ListTripsPage

const Container = styled.div`
display:flex;
width:max(60%,330px);
flex-direction:column;
margin: 12px auto;
`

const ContainerButtons = styled.div`
width:max(60%,330px);
display:flex;
justify-content: space-evenly;
margin: auto;
`
const H1 = styled.h1`
width: 250px;
margin: auto;
color:gray;
font-family: 'Roboto';
font-size:2rem;
`