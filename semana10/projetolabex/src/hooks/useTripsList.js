import React, { useEffect, useState } from 'react'
import axios from 'axios'



export const useTripsList = async () => {
    const [trips,setTrips] = useState([])
    // useEffect(  async () => {
        try {
            const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-oliveira-cruz/trips ")
            // console.log("Ver a response: ", response)
            setTrips(response.data.trips)
            // console.log("so confirmando mesmo se passou:", trips)
    
        } catch (error) {
            console.log("erro é ..... : ", error)
        }
    // },[])
    
}
