import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'





const ApplicationFormPage = () => {
    const [trips, setTrips] = useState([])
    const [countryNames, setCountryNames] = useState([])
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
            console.log("Resultado do countryNames: ", response.data)
            setCountryNames(response.data)
        } catch (error) {
            console.log("Erro encontrado : ", error)
        }

    }


    const options = trips.map((trip) => {
        return (
            <option value={trip.planet}>
                {trip.name}
            </option>
        )
    })

    const renderCountries = countryNames.map( (country) => {
        return (
            <option value={country.name}>
                {country.name}
            </option>
        )
    })

    return (
        <Container>
            <p>ApplicationFormPage</p>

            <select name="trip" id="trip">
                <option value="">Escolha uma viagem</option>
                {options}
            </select>


            <Input placeholder="Nome" />
            <Input placeholder="Idade" />
            <Input placeholder="Profissão" />
            <Textarea placeholder="Texto de candidatura" />
            
            <select name="country" id="country">
                <option value="">Escolha uma país</option>
                {renderCountries}
            </select>
            {/* <button onClick={countryNames}>Teste countrynames</button> */}

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