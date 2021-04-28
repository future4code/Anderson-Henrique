import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router'
import { BASE_URL } from '../../constants/urls'
import PostCard from '../../components/PostCard'
import CommentCard from '../../components/CommentCard'
import useForm from '../../hooks/useForm'

const DetailedPostPage = () => {
    const history = useHistory()
    const params = useParams()
    const [detailedPostInfo, setDetailedPostInfo] = useState([])
    const [comments, setComments] = useState([])
const [form,onChange, clear] = useForm({text: ""})

    useEffect(() => {
        getDetailedPost()
        console.log("Params: ", params)
    }, [])

    const getDetailedPost = async () => {
        const token = window.localStorage.getItem('token')

        try {
            const response = await axios.get(`${BASE_URL}posts/${params.id}`, {
                headers: {
                    Authorization: token
                }
            })
            console.log("Response do response: ", response.data.post.comments)
            setDetailedPostInfo(response.data.post)
            setComments(response.data.post.comments)
            console.log("data.post: ",response.data.post)
        } catch (error) {
            console.log("Erro encontrado: ", error)
        }
    }



    const upVote = async (postId) => {
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
        } catch (error) {
            console.log("Erro encontrado: ", error)
        }

    }


    const downVote = async (postId) => {
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
    // const comments = detailedPostInfo.comments
    // console.log("Comments: ", comments)
    const renderComents = comments.map((comment) => {
        return <CommentCard
            key={comment.id}
            text={comment.text}
            username={comment.username}
            votesCount={comment.votesCount}
        />
    })

    const CreateComment = async () => {
        const token = window.localStorage.getItem('token')
        const body = form
        try {
            const response = await axios.post(`${BASE_URL}posts/${detailedPostInfo.id}/comment`, body, {
                headers: {
                    Authorization: token
                }
            })
            console.log("Response do CreateComment: ", response.data)
        } catch (error) {
            console.log("Erro encontrado: ", error)
        }
    }



    return (
        <div>
            <h1>DetailedPostPage</h1>
            <PostCard key={detailedPostInfo.id}
                title={detailedPostInfo.title}
                text={detailedPostInfo.text}
                username={detailedPostInfo.username}
                votesCount={detailedPostInfo.votesCount}
                commentsCount={detailedPostInfo.commentsCount}
                onClickUp={() => upVote(detailedPostInfo.id)}
                onClickDown={() => downVote(detailedPostInfo.id)}
            // onClickDetails={() => goToDetailedPostPage(history, params.id)}
            />


            <ContainerPostMessage>
                <Input name='text' value={form.text} type={"text"} placeholder="Comentário" onChange={onChange} />
                <button onClick={CreateComment}>Enviar</button>
            </ContainerPostMessage>


            {renderComents.length > 0 && renderComents}


        </div>
    )
}

export default DetailedPostPage



const ContainerPostMessage = styled.div`

`
const Input = styled.input`

`