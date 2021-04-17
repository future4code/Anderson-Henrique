import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useForm } from '../hooks/useForm'
import { Button } from "../components/Button"
import { useHistory } from 'react-router'
import { Loading } from '../components/Loading'




const ApplicationFormPage = () => {
    const [trips, setTrips] = useState([])
    const [countryNames, setCountryNames] = useState([])
    const [idTrip, setIdTrip] = useState("")
    const history = useHistory()


    const initialForm = {
        name: "", age: "", applicationText: "", profession: "", country: ""
    }

    const [form, onChange] = useForm(initialForm)
    useEffect(() => {
        getTripsList()
        getCountryNames()
    }, [])
    const [loading, setLoading] = useState({})

    const getTripsList = async () => {
        setLoading({display:"flex"})
        try {
            const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips ")
            setTrips(response.data.trips)
        } catch (error) {
            console.log("erro é ..... : ", error)
        }
        setLoading({display:"none"})

    }


    const getCountryNames = async () => {
        try {
            const response = await axios.get("https://restcountries.eu/rest/v2/all")
            setCountryNames(response.data)
        } catch (error) {
            console.log("Erro encontrado : ", error)
        }

    }

    const handleId = (event) => {
        setIdTrip(event.target.value)
    }

    const planetOptions = trips.map((trip) => {
        return (
            <option value={trip.id}>
                {trip.name}
            </option>
        )
    })

    const renderCountries = countryNames.map((country) => {
        return (
            <option value={country.name}>
                {country.name}
            </option>
        )
    })

    const submitCandidate = async (event) => {
        event.preventDefault()
        const body = form
        const id = idTrip
        setLoading({display:""})
        
            if (idTrip === "") {
                alert("Preencha o campo 'Escolha uma viagem'")
            } else {
                try {
                    const response = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips/${id}/apply`, body)
                    alert("Pedido enviado! Agora é torcer para ser aprovado!")
                    history.push("/trips/list")
                } catch (error) {
                    console.log("O êro é: ", error)
                }
            }
            setLoading({display:""})
        }

    return (
        <Container>
            <Loading style={loading}/>
            <P>Formulário</P>
            <Form onSubmit={submitCandidate}>

                <Select name="trip" onChange={handleId} value={idTrip} id="trip">
                    <option value="">Escolha uma viagem</option>
                    {planetOptions}
                </Select>


                <Input name="name" value={form.name} onChange={onChange} placeholder="Nome" required pattern={"(.*[a-z]){3}"} />
                <Input name="age" type="number" value={form.age} onChange={onChange} placeholder="Idade" required min={18} />
                <Input name="profession" value={form.profession} onChange={onChange} placeholder="Profissão" required pattern={"(.*[a-z]){10}"} />
                <Input name="applicationText" value={form.applicationText} onChange={onChange} placeholder="Texto de candidatura" required pattern={"^.{30,}"} />
                <Select name="country" value={form.country} onChange={onChange} id="country" required  >
                    <option value="">Escolha uma país</option>
                    {renderCountries}
                </Select>
                <ContainerButtons>
                    <Button text="Voltar" onClick={history.goBack} />
                    <Button text="Enviar" />
                </ContainerButtons>

            </Form>
        </Container>
    )

}

export default ApplicationFormPage


const Container = styled.div`
display:flex;
width:max(60%,330px);
flex-direction:column;
border:1px solid black;
border-radius:12px;
margin:  0 auto ;
`
const P = styled.p`
color:gray;
font-size:2.2rem;
`

const Form = styled.form`
width:max(75%,330px);
margin:auto;
display:flex;
flex-direction:column;
justify-content:center;
`

const Input = styled.input`
width:max(75%,300px);
height:40px;
margin: 0 auto 24px;
box-sizing:border-box;
`

const Select = styled.select`
width:max(75%,300px);
margin: 0 auto 24px ;
height:40px;
`

const ContainerButtons = styled.div`
width:70%;
display:flex;
justify-content:space-between;
margin:  30px auto;
`