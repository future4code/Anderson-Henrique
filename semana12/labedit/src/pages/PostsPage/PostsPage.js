import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import PostCard from '../../components/PostCard'
import { BASE_URL } from '../../constants/urls'
import { goToDetailedPostPage } from '../../routes/coordinator'
import styled from 'styled-components'
import useForm from '../../hooks/useForm'


const PostsPage = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ text: "", title: "" })
    useEffect(() => {
        getPosts()
    }, [])
    const [posts, setPosts] = useState([])


    const getPosts = async () => {
        const token = window.localStorage.getItem('token')
        try {

            const response = await axios.get(`${BASE_URL}posts`, {
                headers: {
                    Authorization: token
                }
            })
            console.log("Response: ", response.data.posts)
            setPosts(response.data.posts)
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
                })
            console.log("Response do Down Vote:  ", response)

        } catch (error) {
            console.log("Erro encontrado: ", error)
        }

    }


    const renderPosts = posts.map((post) => {
        return <PostCard key={post.id}
            title={post.title}
            text={post.text}
            username={post.username}
            votesCount={post.votesCount}
            commentsCount={post.commentsCount}
            onClickUp={() => upVote(post.id)}
            onClickDown={() => downVote(post.id)}
            onClickDetails={() => goToDetailedPostPage(history, post.id)}
        />
    })

  
    const CreatePost = async () => {
        const token = window.localStorage.getItem('token')
        const body = form
        try {
            const response = await axios.post(`${BASE_URL}posts`, body, {
                headers: {
                    Authorization: token
                }
            })
            console.log("Response do CreatePost: ", response.data)
        } catch (error) {
            console.log("Erro encontrado: ", error)
        }
    }
    return (
        <div>
            <h1>PostPage</h1>
            {/* <button onClick={testeFunc}> Teste com 1 id especifico</button> */}

            {/* <form></form> */}
            <ContainerPostMessage>
                <Input name='title' value={form.title} type={"text"} placeholder="Título" onChange={onChange} />
                <Input name='text' value={form.text} type={"text"} placeholder="Comentário" onChange={onChange} />
                <button onClick={CreatePost}>Enviar</button>
            </ContainerPostMessage>

            <PostCard />

            {posts.length > 0 && renderPosts}

        </div>
    )
}

export default PostsPage

const ContainerPostMessage = styled.div`

`
const Input = styled.input`

`