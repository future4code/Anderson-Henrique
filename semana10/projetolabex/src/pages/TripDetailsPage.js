import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { useProtectedPage } from '../hooks/useProtectedPage'
import axios from 'axios'
import styled from 'styled-components'
import { Check } from '@styled-icons/boxicons-regular/Check'
import { DeleteOutline } from '@styled-icons/typicons/DeleteOutline'
import { Loading } from '../components/Loading'
import { Button } from '../components/Button'
const TripsDetailPage = () => {
    useProtectedPage()
    const [trips, setTrips] = useState({})
    const [pendentCandidates, setPendentCandidates] = useState([])
    const [approvedCandidates, setApprovedCandidates] = useState([])
    const [displayDiv, setDisplayDiv] = useState("none")

    const showDiv = () => {
        setDisplayDiv("block")
    }
    const history=useHistory()
    const hideDiv = () => {
        setDisplayDiv("none")
    }

    const [loading, setLoading] = useState({})

    const params = useParams()
    useEffect(() => {
        getSelectedTrip()
    }, [])

    const getSelectedTrip = async () => {
        setLoading({ display: 'flex' })

        const token = window.localStorage.getItem("token")
        try {
            const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trip/${params.id}`, {
                headers: {
                    auth: token
                }
            })
            setTrips(response.data.trip)
            setApprovedCandidates(response.data.trip.approved)
            setPendentCandidates(response.data.trip.candidates)
            setLoading({ display: 'none' })

        } catch (error) {
            console.log("error: ", error)
            setLoading({ display: 'none' })
        }
    }

    const decideAboutCandidate = async (candidate, choice) => {
        setLoading({ display: 'flex' })

        const body = {
            approve: choice
        }
        const token = window.localStorage.getItem("token")
        try {
            const response = await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips/${trips.id}/candidates/${candidate.id}/decide`, body, {
                headers: {
                    auth: token
                }
            })
            if (choice === true) {
                alert("Candidato aprovado")
            } else {
                alert("Candidato reprovado")
            }
            setLoading({ display: 'none' })

        } catch (error) {
            console.log("O êro é: ", error)
            setLoading({ display: 'none' })
        }
        window.location.reload()
    }


    const pendingCandidates = pendentCandidates.map((candidate) => {
        return (
            <div>
                <ContainerCandidate
                    onMouseEnter={event => showDiv(event)}
                    onMouseLeave={event => hideDiv(event)}>
                    <H4>{candidate.name}</H4>
                    <DivCandidate style={{ display: displayDiv }}>
                        <p>Idade: {candidate.age}</p>
                        <p>País: {candidate.country}</p>
                        <p>Profissão: {candidate.profession}</p>
                        <p>Motivação: {candidate.applicationText}</p>
                    </DivCandidate>
                    <ContainerButtons>
                        <Approved title="Aprovar candidato" onClick={() => decideAboutCandidate(candidate, true)} />
                        <Delete title="Reprovar candidato" onClick={() => decideAboutCandidate(candidate, false)} />
                    </ContainerButtons>
                </ContainerCandidate>
            </div>
        )
    })

    const approvCandidates = approvedCandidates.map((candidate) => {
        return (
            <div>
                <h4>{candidate.name}</h4>
            </div>
        )
    })

    return (

            <Container>
                <Loading style={loading} />
                <Pt>Detalhes da viagem</Pt>

                <Div><Span>Nome</Span> <P>{trips.name}</P></Div>
                <Div><Span>Descrição</Span> <P>{trips.description}</P></Div>
                <Div><Span>Planeta</Span> <P>{trips.planet}</P></Div>
                <Div><Span>Duração</Span> <P>{trips.durationInDays} dias</P></Div>
                <Div><Span>Data</Span> <P>{trips.date}</P></Div>

                <H2>Candidatos Pendentes</H2>
                {pendingCandidates.length && pendingCandidates}

                <H2Green>Candidatos Aprovados</H2Green>
                {approvCandidates}
                    <Button text={"Voltar"} onClick={history.goBack}/>
            </Container>
    )

}

export default TripsDetailPage

const Container = styled.div`
flex-direction:column;
margin: auto;
justify-content:center;
width: max(60%,330px);
border:1px solid black;
border-radius:8px;
`
const Pt = styled.p`
font-size:2rem;
color:gray;
`

const Span = styled.span`
color:blue;
display:flex;
align-items:center;
min-width:85px;
padding-left:12px;
`

const Div = styled.div`
display:flex;
width:max(75%,330px);
margin: 0 auto;
min-height:64px;
`

const DivCandidate = styled.div`
&:hover{
    color:green;
    transition:0.7s;
}
`

const P = styled.p`
width:100%;
align-items:center;
display:flex;
justify-content:center;
@media(max-width:400px){
font-size:14px;
padding-right:8px;
}
`

const H2 = styled.h2`
color:grey;
display: flex;
justify-content:center;
`

const H4 = styled.h4`
margin: 12px 0 8px;
`
const ContainerCandidate = styled.div`
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
cursor:pointer;
`

const Delete = styled(DeleteOutline)`
color:red;
width:30px;
cursor:pointer;
`

const H2Green = styled(H2)`
    color:green;
    `