import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useTripsList } from '../hooks/useTripsList'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { goToLoginPage, goToTripsDetailsPage } from '../routes/coordinator'
import axios from 'axios'
import styled from 'styled-components'
import { DeleteOutline } from '@styled-icons/typicons/DeleteOutline'
import { Error } from '@styled-icons/material-twotone'
import {Detail} from '@styled-icons/boxicons-regular/Detail'



const AdminHomePage = () => {

    useEffect(() => {
        getTripsList()
    }, [])

    useProtectedPage()

    const history = useHistory()
    
    console.log(window.localStorage)

    const [trips, setTrips] = useState([])

    const getTripsList = async () => {
        try {
            const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips ")
            console.log("Ver a response: ", response)
            setTrips(response.data.trips)
            console.log("so confirmando mesmo se passou:", trips)

        } catch (error) {
            console.log("erro é ..... : ", error)
        }
    }

    const goToSelectedPage = (id) => {
        console.log("Id q foi : ",id)
        history.push(`/admin/trips/${id}`)

    }


    const renderTrips = trips.map((trip) => {
        return <div key="trip.id" id="trip.id" >{trip.name} <Details onClick={() => goToSelectedPage(trip.id)}/><Delete />
        <button onClick={() => goToTripsDetailsPage(history)}>Go to details teste</button></div>
    })

    const deleteTrip = async (id) => {
        // if(confirm(`Você tem certeza que quer deletar esta viagem?`))
        // {

        const token = window.localStorage.getItem("token")
        try{
            const response = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips/${id}`,
            {
                headers: {
                    auth:token
                }
            })
            console.log("Resultado da requisição: ",response)
        }catch(error){
            console.log("Erro: ",error)
        }
    }
    // }


    return (
        <div>
            <p>AdminHomePage</p>
            <button onClick={() => goToLoginPage(history)}>Mandar teste loginPage</button>
            { renderTrips}
        </div>
    )

}

export default AdminHomePage


const Delete = styled(DeleteOutline)`
color:red;
width:30px;
`

const Details = styled(Detail)`
width:30px;
color:blue
`