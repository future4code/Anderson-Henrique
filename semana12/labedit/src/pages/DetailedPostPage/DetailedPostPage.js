import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router'
import { BASE_URL } from '../../constants/urls'



const DetailedPostPage = () => {
    const history = useHistory()
    const params = useParams()
    

    useEffect( () => {
getDetailedPost()
console.log("Params: ",params)
    },[])

    const getDetailedPost = async () => {
        const token = window.localStorage.getItem('token')

        try {
            const response = await axios.get(`${BASE_URL}posts/${params.id}`, {
                headers: {
                    Authorization: token
                }

            })
            console.log("Response do response: ", response.data)
        } catch (error) {
            console.log("Erro encontrado: ", error)
        }
    }
    return (
        <div>
            <h1>DetailedPostPage</h1>
        </div>
    )
}

export default DetailedPostPage