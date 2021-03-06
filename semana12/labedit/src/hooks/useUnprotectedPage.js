import React, {useEffect} from 'react'
import { useHistory } from 'react-router'
import { goToLoginPage, goToPostsPage } from '../routes/coordinator'

const useUnprotectedPage = () => {

    const history = useHistory()
    useEffect( () => {
const token = window.localStorage.getItem('token')

if(token){
    goToPostsPage(history)
}
    },[history])
}

export default useUnprotectedPage