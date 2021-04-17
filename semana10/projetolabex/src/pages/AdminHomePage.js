import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useProtectedPage } from '../hooks/useProtectedPage'
import axios from 'axios'
import styled from 'styled-components'
import { DeleteOutline } from '@styled-icons/typicons/DeleteOutline'
import { Detail } from '@styled-icons/boxicons-regular/Detail'
import { Loading } from '../components/Loading'

const AdminHomePage = () => {

    useEffect(() => {
        getTripsList()
    }, [])

    useProtectedPage()

    const history = useHistory()
    const [loading, setLoading] = useState({})



    const [trips, setTrips] = useState([])

    const getTripsList = async () => {
        setLoading({ display: 'flex' })
        try {
            const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips")
            setTrips(response.data.trips)
            setLoading({ display: 'none' })
        } catch (error) {
            console.log("erro é ..... : ", error)
        }
    }

    const goToSelectedPage = (id) => {
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
        const token = window.localStorage.getItem("token")
        setLoading({ display: 'flex' })

        try {
            const response = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips/${id}`,
                {
                    headers: {
                        auth: token
                    }
                })
            alert("Viagem deletada")
            history.push("/admin/trips/list")
        } catch (error) {
            console.log("Erro: ", error)
        }
        setLoading({ display: 'none' })
        window.location.reload()
    }



    return (
        <Container>
            <Loading style={loading} />
            <P>Admin Home Page</P>
            <ContainerBigButtons>
                <BigButton onClick={history.goBack} >Voltar</BigButton>
                <BigButton onClick={() => history.push("/admin/trips/create")} >Criar Viagem</BigButton>
                <BigButton onClick={logout} >Logout</BigButton>
            </ContainerBigButtons>

            { renderTrips}
        </Container>
    )

}

export default AdminHomePage

const Container = styled.div`
width:max(60%,330px);
margin:0 auto;
`
const ContainerBigButtons = styled.div`
width:max(50%,330px);
margin:0 auto;
`

const Div = styled.div`
width:max(60%,330px);
border:1px solid pink;
border-radius:8px;
display:flex;
margin:24px auto;
min-height:40px;
align-items:center;
padding: 0 10px 0 5px;
font-size:24px;
color:gray;
`

const P = styled.p`
color:gray;
font-size:2.2rem;
`

const Delete = styled(DeleteOutline)`
color:red;
width:30px;
&:hover{
    cursor:pointer;
}
`

const Details = styled(Detail)`
width:30px;
color:blue;
&:hover{
    cursor:pointer;
}
`
const ContainerButtons = styled.div`
margin:0 0 0 auto;
min-width:80px;
&:hover{
    cursor:pointer;
}
`

const LoaderContainer = styled.div`
width:max(100%,330px);
background-color:white;
height:100vh;
position:absolute;
margin: 0 ; 
`

const BigButton = styled.button`
background-color:blue;
font-size:1.0rem;
height:40px;
padding: 0 5px;
border-radius: 20px;
color:white;
width:150px;

@media(max-width:400px){
    font-size:1rem;
    height:40px;
    padding:0 5px;
    width:150px;
}
&:hover{
    cursor:pointer;
}
`