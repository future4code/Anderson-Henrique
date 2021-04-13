import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Trip from '../components/Trip'

const ListTripsPage = () => {

    const [trips, setTrips] = useState([])


    useEffect(() => {
        getTripsList()
    }, [])

    const history= useHistory()

    const getTripsList = async () => {
        try {
            const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips ")
            // console.log("Ver a response: ", response)
            setTrips(response.data.trips)
            // console.log("so confirmando mesmo se passou:", trips)

        } catch (error) {
            console.log("erro é ..... : ", error)
        }
    }


    const tripsToRender = trips.map( (trip) => {
        return(
        <Trip
        key={trip.id}
        name={trip.name}
        date={trip.date}
        description={trip.description}
        planet={trip.planet}
        durationInDays={trip.durationInDays}
        
        />
)
}
    )

    
    return (


        <div>
            <p>ListTripsPage</p>
            <button onClick={getTripsList}>Ver o response da API</button>
            <button onClick={history.goBack}>Voltar</button>
        { tripsToRender}
        </div>
    )

}

export default ListTripsPage