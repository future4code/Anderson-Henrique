import axios from 'axios'
import { BASE_URL } from '../../constants/urls'





export const upVote = async (postId) => {
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
        console.log("Response do Up Vote:  ", response)
        alert('IUUP!')
    } catch (error) {
        console.log("Erro encontrado: ", error)
    }

}

export const upVoteComment = async (postId, commentId) => {
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
        console.log("Response do Up Vote:  ", response)
        // alert('Up neste')

    } catch (error) {
        console.log("Erro encontrado: ", error)
    }

}

export const downVoteComment = async (postId, commentId) => {
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
        console.log("Response do Down Vote:  ", response)
    } catch (error) {
        console.log("Erro encontrado: ", error)
    }

}

 export const downVote = async (postId) => {
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
        console.log("Response do Down Vote:  ", response)

    } catch (error) {
        console.log("Erro encontrado: ", error)
    }
}