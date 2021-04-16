import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { useProtectedPage } from '../hooks/useProtectedPage'
import axios from 'axios'
import styled from 'styled-components'
import {Check} from '@styled-icons/boxicons-regular/Check'
import { DeleteOutline } from '@styled-icons/typicons/DeleteOutline'

const TripsDetailPage = () => {
    useProtectedPage()
    const [trips, setTrips] = useState({})
    const [pendentCandidates, setPendentCandidates] = useState([])
    const [approvedCandidates, setApprovedCandidates] = useState([])


    const history = useHistory()
    const params = useParams()
    console.log("params: ", params)
    useEffect(() => {
        getSelectedTrip()
    }, [])


    const getSelectedTrip = async () => {
        const token = window.localStorage.getItem("token")
        try {
            // console.log("params:",params.id)
            const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trip/${params.id}`, {
                headers: {
                    auth: token
                }
            })
            console.log("response do getSelectedTrip :", response.data)
            setTrips(response.data.trip)
            setApprovedCandidates(response.data.trip.approved)
            setPendentCandidates(response.data.trip.candidates)
            console.log("trips: ", trips)
            console.log("pendingCand:", pendentCandidates)
            console.log("approved:", approvedCandidates)

        } catch (error) {
            console.log("error: ", error)
        }
    }

    const decideAboutCandidate = async (candidate, choice) => {

        const body = {
            approve: choice
        }
        const token = window.localStorage.getItem("token")
        try {
            const response = await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips/${trips.id}/candidates/${candidate.id}/decide`, body, {
                headers: {
                    auth: token
                } })
                console.log("response:",response)
                if(choice==="true"){
                    alert("Candidato aprovado")
                }else{
                    alert("Candidato reprovado")
                }
        } catch (error) {
            console.log("O êro é: ", error)
        }

    }


    console.log("trips.candidates:", trips.candidates)
    // console.log("trips.approved:",trips.approved)
    // setTimeout( () => {
    const pendingCandidates = pendentCandidates.map((candidate) => {
        return (
            <div>
                {console.log("chakalaka?", candidate.name)}
                <ContainerCandidate>
                    <H4>{candidate.name}</H4>
                    <ContainerButtons>
                        <Approved title="Aprovar candidato" onClick={() => decideAboutCandidate(candidate, "true")}/>
                        <Delete   title="Reprovar candidato"onClick={() => decideAboutCandidate(candidate, "false")}/> 
                        </ContainerButtons>
                </ContainerCandidate>
            </div>
        )
    })

    const approvCandidates = approvedCandidates.map((candidate) => {
        return (
            <div>
                {console.log("chakalaka?", candidate.name)}
                <h4>{candidate.name}</h4>
            </div>
        )
    })
    // }, 1000)


    return (
        <div>
            {/* {console.log("detailtrip no inicio do render: ",detailedTrip)} */}
            <p>TripsDetailPage</p>
            {/* <div key={trip.id}> */}
            {/* {console.log("trip: ",trips)} */}

            <Container>
                {/* {console.log("trip: ",trips)} */}
                {console.log("pendingCand:", pendentCandidates)}

                {console.log("detailedtripssss: ", trips)}
                {console.log("approved:", approvedCandidates)}
                <Div><Span>Nome</Span> <P>{trips.name}</P></Div>
                <Div><Span>Descricao</Span> <P>{trips.description}</P></Div>
                <Div><Span>Planeta</Span> <P>{trips.planet}</P></Div>
                <Div><Span>Duracao</Span> <P>{trips.durationInDays} dias</P></Div>
                <Div><Span>Data</Span> <P>{trips.date}</P></Div>

                <H2>Candidatos Pendentes</H2>
                {pendingCandidates.length && pendingCandidates}

                <H2Green>Candidatos Aprovados</H2Green>
                {approvCandidates}

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
width: max(75%,330px)

`
const Span = styled.span`
color:blue;
display:flex;
align-items:center;
min-width:85px;
padding-left:12px;
/* font-family:"Roboto" */
`

const Div = styled.div`
display:flex;
/* border:1px solid black; */
width:max(75%,330px);
margin: 0 auto;
min-height:64px;
/* margin-bottom:12px; */

`

const P = styled.p`
/* background-color:red; */
width:100%;
@media(max-width:400px){
font-size:14px;
padding-right:8px;
display:flex;
align-items:center;
}

`

const H2 = styled.h2`
color:grey;
display: flex;
justify-content:center;
`

const H4 = styled.h4`
/* background-color:pink; */
margin: 12px 0 8px;
`
const ContainerCandidate = styled.div`
/* background-color:darkblue; */
display:flex;
flex-direction:column;
width:max(80%,300px);
margin: auto;
border:1px solid black;
border-radius:8px;
margin-bottom:24px;
`

const ContainerButtons = styled.div`

`

const Approved = styled(Check)`
color:green;
width:30px;

`

const Delete = styled(DeleteOutline)`
color:red;
width:30px;
`

const H2Green= styled(H2)`
    color:green;
    `