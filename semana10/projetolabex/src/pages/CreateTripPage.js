import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { Button } from '../components/Button'
import { useForm } from '../hooks/useForm'
import { useProtectedPage } from '../hooks/useProtectedPage'
import styled from 'styled-components'
import { Loading } from '../components/Loading'


const CreateTripPage = () => {
    useEffect(() => {
        setTimeout(() => {
            setLoading({ display: 'none' })
        }, 400);

        console.log("loading?", loading)
    }, [])
    useProtectedPage()
    const [loading, setLoading] = useState({})

    const history = useHistory()
    const params = useParams()
    const planetNames = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno"]
    const renderPlanets = planetNames.map((planet) => {
        return <option value={planet}>{planet}</option>
    })

    const initialForm = {
        name: "", planet: "", date: "", description: "", durationInDays: ""
    }
    const [form, onChange] = useForm(initialForm)
    const token = window.localStorage.getItem("token")

    const createTrip = async (event) => {
        event.preventDefault()
        setLoading({ display: 'flex' })

        const body = form
        console.log("entrei na func?")
        if (body.planet === "" || body.planet === "Escolha um planeta") {
            alert("Preencha o campo do planeta")
            console.log("body: ", body)
        } else {
            try {
                const response = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips`, body, {
                    headers: {
                        auth: token
                    }
                })
                console.log("Response da requisicao do CreateTripPage: ", response)
                alert("Viagem criada")

            } catch (error) {
                console.log("Erro: ", error)
            }
            form = initialForm
            history.push("/trips/list")
        }
        console.log("body fora if/else: ", body)
        setLoading({ display: 'none' })

    }



    return (
        <Container>
            <Loading style={loading} />
            <P>Criar Viagem</P>
            <Form onSubmit={createTrip}>
                <Input name="name" placeholder="Nome da viagem" pattern={"(.*[a-z]){5,}"} required onChange={onChange} />
                {/* <Input placeholder="Nome do Planeta"  required onChange={onChange}/> */}
                <Select name="planet" onChange={onChange}>
                    <option >Escolha um planeta</option>
                    {renderPlanets}
                </Select>
                <Input name="date" type="date" min={"2022-01-01"} title="Viagens a partir de 01/01/2022" placeholder="Data ( mm/dd/yyyy )" required onChange={onChange} />
                <Input name="durationInDays" type="number" placeholder="Duração em dias" min={50} required onChange={onChange} />
                <Input name="description" placeholder="Breve descrição" pattern={"^.{30,}"} required onChange={onChange} />
                <ButtonCreate>Criar</ButtonCreate>
            </Form>
            <div><Button text={"voltar"} onClick={history.goBack} /> </div>
        </Container>
    )
}

export default CreateTripPage


const Container = styled.div`
display:flex;
flex-direction:column;
/* background-color:pink; */
margin: 12px;
padding:12px;
width:max(60%,330px);
margin: 0 auto;
`

const P = styled.p`
color:gray;
font-size:2.2rem;
`

const Input = styled.input`
width:max(70%,320px);
height:40px;
margin:0 auto 24px;
box-sizing:border-box;
`

const Select = styled.select`
width:max(75%,320px);
height:40px;
margin:0 auto 24px;
`

const Form = styled.form`
display:flex;
flex-direction:column;
align-items:center;
`
const ButtonCreate = styled.button`
background-color:green;
font-size:1.5rem;
height:50px;
padding: 0 10px;
border-radius: 20px;
color:white;
width:200px;
margin-bottom:24px;

@media(max-width:400px){
    font-size:1rem;
    height:40px;
    padding:0 5px;
    width:150px;
}
`