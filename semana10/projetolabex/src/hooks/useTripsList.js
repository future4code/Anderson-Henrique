import React, { useEffect, useState } from 'react'
import axios from 'axios'



export const useTripsList = async () => {
    const [trips,setTrips] = useState([])
        try {
            const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips ")
            setTrips(response.data.trips)
        } catch (error) {
            console.log("erro é ..... : ", error)
        }
}
