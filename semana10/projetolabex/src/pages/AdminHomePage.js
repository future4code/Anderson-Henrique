import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useTripsList } from '../hooks/useTripsList'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { goToLoginPage, goToTripsDetailsPage } from '../routes/coordinator'
import axios from 'axios'
import styled from 'styled-components'
import { DeleteOutline } from '@styled-icons/typicons/DeleteOutline'
import { Error } from '@styled-icons/material-twotone'
import { Detail } from '@styled-icons/boxicons-regular/Detail'
import { Button } from '../components/Button'


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
            const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips")
            // console.log("Ver a response: ", response)
            setTrips(response.data.trips)
            // console.log("so confirmando mesmo se passou:", trips)

        } catch (error) {
            console.log("erro é ..... : ", error)
        }
    }

    const goToSelectedPage = (id) => {
        console.log("Id q foi : ", id)
        history.push(`/admin/trips/${id}`)

    }


    const renderTrips = trips.map((trip) => {
        return (
            <Div key="trip.id" id="trip.id" >
                {trip.name}

                <ContainerButtons>
                    <Details onClick={() => goToSelectedPage(trip.id)} />
                    <Delete onClick={() => deleteTrip(trip.id)} />
                </ContainerButtons>

            </Div>
        )
    })
    const logout = () => {
        window.localStorage.removeItem("token")
        history.push("/login")
    }
    const deleteTrip = async (id) => {
        // if(confirm(`Você tem certeza que quer deletar esta viagem?`))
        // {

        

        const token = window.localStorage.getItem("token")
        try {
            const response = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips/${id}`,
                {
                    headers: {
                        auth: token
                    }
                })
            console.log("Resultado da requisição: ", response)
            alert("Viagem deletada")
            history.push("/admin/trips/list")
        } catch (error) {
            console.log("Erro: ", error)
        }
    }
    // }


    return (
        <div>
            <P>AdminHomePage</P>
            <ContainerButtons>
                <Button text={"Voltar"}  onClick={history.goBack}/>
                <Button text={"Criar Viagem"}  onClick={() => history.push("/admin/trips/create")}/>
                <Button text={"Logout"}  onClick={logout}/>
            </ContainerButtons>
            { renderTrips}
        </div>
    )

}

export default AdminHomePage

const Div = styled.div`
width:max(50%,330px);
border:1px solid pink;
border-radius:8px;
display:flex;
margin:24px auto;
min-height:40px;
align-items:center;
padding: 0 12px;
font-size:24px;
color:gray;

`

const P = styled.p`
/* font-family:'Roboto' */
`

const Delete = styled(DeleteOutline)`
color:red;
width:30px;
`

const Details = styled(Detail)`
width:30px;
color:blue
`
const ContainerButtons = styled.div`
/* display:fle */
/* background-color:gray; */
margin:0 0 0 auto;
min-width:80px;
`