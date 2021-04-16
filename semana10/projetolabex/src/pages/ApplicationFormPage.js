import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useForm } from '../hooks/useForm'
import { Button } from "../components/Button"
import { useHistory } from 'react-router'




const ApplicationFormPage = () => {
    const [trips, setTrips] = useState([])
    const [countryNames, setCountryNames] = useState([])
    const [id, setId] = useState("")
    const history = useHistory()


    const initialForm = {
        name: "", age: "", profession: "", country: "", applicationText: ""
    }

    const [form, onChange] = useForm(initialForm)
    console.log("form: ", form)
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
            <Form>

                <Select name="trip" onChange={handleId} value={id} id="trip">
                    <option value="">Escolha uma viagem</option>
                    {planetOptions}
                </Select>


                <Input name="name" value={form.name} onChange={onChange} placeholder="Nome" required pattern={"(.*[a-z]){3}"} />
                <Input name="age" type="number" value={form.age} onChange={onChange} placeholder="Idade" required min={18} />
                <Input name="profession" value={form.profession} onChange={onChange} placeholder="Profissão" required pattern={"(.*[a-z]){10}"} />
                <Textarea name="applicationText" value={form.applicationText} onChange={onChange} placeholder="Texto de candidatura" required pattern={"(.*[a-z]){30}"}/>

                <Select name="country" value={form.country} onChange={onChange} id="country" required  >
                    <option value="">Escolha uma país</option>
                    {renderCountries}
                </Select>
                <ContainerButtons>
                    <Button text="voltar" onClick={history.goBack} />
                    <Button text="Enviar" />
                </ContainerButtons>

            </Form>

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
border:1px solid black;
border-radius:12px;
margin: auto;
`


const Form = styled.form`
/* background-color:red; */
width:max(75%,330px);
margin:auto;
display:flex;
flex-direction:column;
justify-content:center;
`

const Input = styled.input`
width:max(75%,300px);
height:40px;
/* margin-bottom: 24px; */
margin: 0 auto 24px;
`

const Select = styled.select`
width:max(75%,300px);
margin: 24px auto;
height:40px;


`
const Textarea = styled.textarea`
width:max(75%,300px);
height:40px;
margin: auto;

`

const ContainerButtons = styled.div`
width:70%;
display:flex;
justify-content:space-between;
margin:  30px auto;
`