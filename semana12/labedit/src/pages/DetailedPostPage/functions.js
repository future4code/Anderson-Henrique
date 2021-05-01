import axios from 'axios'
import { BASE_URL } from '../../constants/urls'

export const upVote = async (postId, setIsLoading) => {
    setIsLoading(true)
    const body = { direction: 1 }
    const token = window.localStorage.getItem('token')
    try {
        const response = await axios.put(`${BASE_URL}posts/${postId}/vote`, body,
            {
                headers: {
                    Authorization: token
                }
            }
        )
        alert('IUUP!')
    } catch (error) {
        console.log("Erro encontrado: ", error)
    }
    setIsLoading(false)
}

export const upVoteComment = async (postId, commentId, setIsLoading) => {
    setIsLoading(true)
    const body = { direction: 1 }
    const token = window.localStorage.getItem('token')
    try {
        const response = await axios.put(`${BASE_URL}posts/${postId}/comment/${commentId}/vote`, body,
            {
                headers: {
                    Authorization: token
                }
            }
        )
    } catch (error) {
        console.log("Erro encontrado: ", error)
    }
    setIsLoading(false)
}

export const downVoteComment = async (postId, commentId, setIsLoading) => {
    setIsLoading(true)
    const body = { direction: -1 }
    const token = window.localStorage.getItem('token')
    try {
        const response = await axios.put(`${BASE_URL}posts/${postId}/comment/${commentId}/vote`, body,
            {
                headers: {
                    Authorization: token
                }
            }
        )
    } catch (error) {
        console.log("Erro encontrado: ", error)
    }
    setIsLoading(false)

}

export const downVote = async (postId, setIsLoading) => {
    setIsLoading(true)
    const body = { direction: -1 }
    const token = window.localStorage.getItem('token')
    try {
        const response = await axios.put(`${BASE_URL}posts/${postId}/vote`, body,
            {
                headers: {
                    Authorization: token
                }
            }
        )
    } catch (error) {
        console.log("Erro encontrado: ", error)
    }
    setIsLoading(false)

}