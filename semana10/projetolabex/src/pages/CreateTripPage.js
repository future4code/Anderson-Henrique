import React from 'react'
import { useHistory, useParams } from 'react-router'

const CreateTripPage = () => {

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