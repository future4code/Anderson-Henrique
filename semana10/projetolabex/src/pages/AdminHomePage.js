import React from 'react'
import { useHistory } from 'react-router'
import { goToLoginPage } from '../routes/coordinator'

const AdminHomePage = () => {
const history= useHistory()


return(
    <div>
        <p>AdminHomePage</p>
    <button onClick={() => goToLoginPage(history)}>Mandar teste loginPage</button>        
    </div>
)

}

export default AdminHomePage