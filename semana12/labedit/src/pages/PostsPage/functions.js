
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'


export const downVote = async (postId,setIsLoading) => {
    setIsLoading(true)
    const body = { direction: -1 }
    const token = window.localStorage.getItem('token')

    try {
        const response = await axios.put(`${BASE_URL}posts/${postId}/vote`, body,
            {
                headers: {
                    Authorization: token
                }
            })
        alert("Down neste Comentario!")


    } catch (error) {
        console.log("Erro encontrado: ", error)
    }
    setIsLoading(false)
}

export const upVote = async (postId,setIsLoading) => {
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
        alert("Up neste Comentario!")
    } catch (error) {
        console.log("Erro encontrado: ", error)
    }
    setIsLoading(false)

}
export const CreatePost = async (form,clear,setIsLoading) => {
    setIsLoading(true)
    const token = window.localStorage.getItem('token')
    const body = form
    try {
        const response = await axios.post(`${BASE_URL}posts`, body, {
            headers: {
                Authorization: token
            }
        })
        alert("Post criado!")
        clear()
    } catch (error) {
        console.log("Erro encontrado: ", error)
    }
    setIsLoading(false)
}