import React from 'react'
import { useHistory, useParams } from 'react-router'
import { useProtectedPage } from '../hooks/useProtectedPage'

const CreateTripPage = () => {
useProtectedPage()
    const history=useHistory()
    const params = useParams()
    console.log(params)
return(
    <div>
        <p>CreateTripPage</p>
       
        
    </div>
)

}

export default CreateTripPage

