import axios from 'axios'
import React from 'react'
import { useHistory, useParams } from 'react-router'
import { Button } from '../components/Button'
import { useForm } from '../hooks/useForm'
import { useProtectedPage } from '../hooks/useProtectedPage'



const CreateTripPage = () => {
    useProtectedPage()
    const history = useHistory()
    const params = useParams()
const planetNames= ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter" ,"Saturno" ,"Urano", "Netuno"]
    const renderPlanets = planetNames.map( (planet) => {
        return <option value={planet}>{planet}</option>

    })

    const initialForm = {
        name:"", planet:"",date:"",description:"",durationInDays:""
    }
    const [form, onChange] = useForm(initialForm)
    console.log("form: ",form)
    
    // console.log("Paramns:",params)
    const token = window.localStorage.getItem("token")
    const createTrip = async () => {
        const response = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips`, {
            headers: {
                auth: token
            }
        })
    }


    return (
        <div>
            <p>CreateTripPage</p>
            <form>
            <p><input placeholder="Nome da viagem" pattern={"(.*[a-z]){5}"} required onChange={onChange}/></p>
            {/* <input placeholder="Nome do Planeta"  required onChange={onChange}/> */}
            <select onChange={onChange}>
                <option >Escolha um planeta</option>
                {renderPlanets}
            </select>
            <input type="date" min={"2022-01-01"} title ="Viagens a partir de 01/01/2022" placeholder="Data ( mm/dd/yyyy )"  required onChange={onChange}/>
            <input type="number" placeholder="Duração em dias" min={50} required onChange={onChange}/>
            <input placeholder="Breve descrição" pattern={"(.*[a-z]){30}"} required onChange={onChange}/>
            <button>Criar</button>
            </form>
        <div><Button text={"voltar"}/> </div>
        </div>
    )

}

export default CreateTripPage

