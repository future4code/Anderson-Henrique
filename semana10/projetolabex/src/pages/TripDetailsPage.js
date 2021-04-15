import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { useProtectedPage } from '../hooks/useProtectedPage'
import axios from 'axios'
import styled from 'styled-components'
const TripsDetailPage = () => {
    useProtectedPage()
    const [trips, setTrips] = useState({})

    
    const history = useHistory()
    const params = useParams()
    // console.log("params: ", params)
    useEffect(() => {
        getSelectedTrip()
    }, [history])


    const getSelectedTrip = async () => {
        const token = window.localStorage.getItem("token")
        // console.log("token :",token)
        try {
            // console.log("params:",params.id)
            const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trip/${params.id}`, {
                headers: {
                    auth: token
                }
            })
            console.log("response do getSelectedTrip :", response.data)
            setTrips(response.data.trip)
            console.log("trips: ",trips)

        } catch (error) {
            console.log("error: ", error)
        }
    }

    // console.log("trips.candidates:",trips.candidates)
    // console.log("trips.approved:",trips.approved)
// setTimeout( () => {
//     const pendingCandidates = trips.candidates.map((candidate) => {

//         return <h4>{candidate.name}</h4>
//     })
// }, 1000)
     
//    console.log("trips.approved.lenght:",trips.approved.lenght)
    

//     if(trips.approved.lenght>0){
// console.log("Entrei no if")
//    console.log("trips.approved.lenght:",trips.approved.lenght)
//     const approvedCandidates = trips.approved.map((approved) => {
//         console.log("aproved: ",approved)
//         return <h4>{approved.name}</h4>
//     })
// }



    // const getTripsList = async () => {
    //     try {
    //         const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips")
    //         // console.log("Ver a response: ", response.data.trips)
    //         response.data.trips.filter(trip => {
    //             if(trip.id === params.id){
    //                 // console.log("que que to fazendo? vamo ver se deu esse filter aqui: ",trip)
    //                 setTrips(trip)
    //             }
    //         })
    //         // setTrips(response.data.trips)
    //         // console.log("so confirmando mesmo se passou:", trips)

    //     } catch (error) {
    //         console.log("erro é ..... : ", error)
    //     }
    // }

    // const detailedTrip = trips.filter((trip) => {
    //     if (trip.id === params.id) {
    //         // console.log("chakalaka, zueira")
    //         // console.log("ver se deu certo o filter:", trip.id)
    //         console.log("Trip: ", trip)
    //         // console.log("params.id: ", params)
    //         return    trip
    //             // <div key={trip.id}>
    //             //     <p>TripsDetailPage</p>
    //             //     <div><span>Nome</span> <p>{trip.name}</p></div>
    //             //     <div><span>Descricao</span> <p>{trip.description}</p></div>
    //             //     <div><span>Planeta</span> <p>{trip.planet}</p></div>
    //             //     <div><span>Duracao</span> <p>{trip.durationInDays}</p></div>
    //             //     <div><span>Data</span> <p>{trip.date}</p></div>
    //             //     {/* {detailedTrip} */}
    //             // </div>

    //     }
    // })




    return (
        <div>
            {/* {console.log("detailtrip no inicio do render: ",detailedTrip)} */}
            <p>TripsDetailPage</p>
            {/* <div key={trip.id}> */}
            {/* {console.log("trip: ",trips)} */}

            <Container>
                {/* {console.log("trip: ",trips)} */}

                {console.log("detailedtrip: ", trips)}
                <Div><Span>Nome</Span> <p>{trips.name}</p></Div>
                <Div><Span>Descricao</Span> <p>{trips.description}</p></Div>
                <Div><Span>Planeta</Span> <p>{trips.planet}</p></Div>
                <Div><Span>Duracao</Span> <p>{trips.durationInDays}</p></Div>
                <Div><Span>Data</Span> <p>{trips.date}</p></Div>
                
                <H2>Candidatos Pendentes</H2>
                {/* {pendingCandidates.lenght && pendingCandidates} */}
                
                <H2>Candidatos Aprovados</H2>
                {/* {approvedCandidates} */}
                {/* <button onClick={getSelectedTrip}>Testando a requisicao do getSelectedTrip</button> */}

            </Container>
        </div>
    )

}

export default TripsDetailPage

const Container = styled.div`
border:1px solid black;
/* display:flex; */
flex-direction:column;
margin: auto;
justify-content:center;
`
const Span = styled.span`
color:red;
display:flex;
align-items:center;
width:80px;
padding-left:12px;
/* font-family:"Roboto" */
`

const Div = styled.div`
display:flex;
/* border:1px solid black; */
max-width:800px;
min-width:365px;
margin: 0 auto;
height:64px;
margin-bottom:24px;

`

const H2 = styled.h2`
color:grey;
display: flex;
justify-content:center;
`