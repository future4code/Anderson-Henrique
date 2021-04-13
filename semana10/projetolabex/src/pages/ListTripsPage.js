import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ListTripsPage = () => {

    const [trips, setTrips] = useState([])


    useEffect(() => {
        getTripsList()
    }, [])


    const getTripsList = async () => {
        try {
            const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips ")
            console.log("Ver a response: ", response)
            setTrips(response.data.trips)
            console.log("so confirmando mesmo se passou:", trips)

        } catch (error) {
            console.log("erro é ..... : ", error)
        }
    }


    // const tripsToRender = trips.map(
    //     <ul>
    //         <li>trips.date</li>
    //     </ul>
    // )
    return (


        <div>
            <p>ListTripsPage</p>
            <button onClick={getTripsList}>Ver o response da API</button>

        </div>
    )

}

export default ListTripsPage