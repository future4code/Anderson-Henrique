import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useForm } from '../hooks/useForm'





const ApplicationFormPage = () => {
    const [trips, setTrips] = useState([])
    const [countryNames, setCountryNames] = useState([])
    const [id, setId] = useState("")

    const initialForm = {
        name: "", age: "", profession:"", country: "", applicationText:""
    }

    const [form, onChange] = useForm(initialForm)
    console.log("form: ",form)
    useEffect(() => {
        getTripsList()
        getCountryNames()
    }, [])

    const getTripsList = async () => {
        try {
            const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips ")
            setTrips(response.data.trips)
        } catch (error) {
            console.log("erro é ..... : ", error)
        }
    }


    const getCountryNames = async () => {
        try {
            const response = await axios.get("https://restcountries.eu/rest/v2/all")
            // console.log("Resultado do countryNames: ", response.data)
            setCountryNames(response.data)
        } catch (error) {
            console.log("Erro encontrado : ", error)
        }

    }

    const handleId = (event) => {
        setId(event.target.value)
        console.log(event.target.value)
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

    const email = 'astrodev@gmail.com'
    const password = '123456'


    return (
        <Container>
            <p>ApplicationFormPage</p>
<form>

            <select name="trip" onChange={handleId} value={id} id="trip">
                <option value="">Escolha uma viagem</option>
                {planetOptions}
            </select>


            <Input name="name" value={form.name} onChange={onChange} placeholder="Nome" required pattern={"(.*[a-z]){3}"} />
            <Input name="age" type ="number" value={form.age} onChange={onChange} placeholder="Idade" required  min={18}/>
            <Input name="profession" value={form.profession} onChange={onChange} placeholder="Profissão" required pattern={"(.*[a-z]){10}"} />
            <Textarea name="applicationText" value={form.applicationText} onChange={onChange} placeholder="Texto de candidatura" required  pattern={"(.*[a-z]){30}"} />

            <select name="country" value={form.country} onChange={onChange} id="country"required  >
                <option value="">Escolha uma país</option>
                {renderCountries}
            </select>
        <button>Enviar</button>
</form>

            {/* <button onClick={countryNames}>Teste countrynames</button> */}
            {/* <button onClick={createUser}>Criar o signup</button> */}
        </Container>
    )

}

export default ApplicationFormPage


const Container = styled.div`
display:flex;
max-width: 800px;
flex-direction:column;
`

const Input = styled.input`
width:500px;
height:32px;
`

const Select = styled.select`
width:500px;

`
const Textarea = styled.textarea`
width:500px;

`