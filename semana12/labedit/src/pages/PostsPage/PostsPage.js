import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import PostCard from '../../components/PostCard'
import { ButtonForm } from '../../components/ButtonForm'
import { BASE_URL } from '../../constants/urls'
import { goToDetailedPostPage } from '../../routes/coordinator'
import { MainContainer, ContainerPostMessage, Input, Form, Button } from './styled'
import useForm from '../../hooks/useForm'
import useProtectedPage from '../../hooks/useProtectedPage'
import Header from '../../components/Header'
import { Loading } from '../../components/Loading'
import { downVote, upVote } from './functions'

const PostsPage = () => {
    useProtectedPage()
    const [display, setDisplay] = useState('block')
    const history = useHistory()
    const [form, onChange, clear] = useForm({ text: "", title: "" })
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        setDisplay('block')
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
        setDisplay('none')
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

    const CreatePost = async (evt) => {
        evt.preventDefault()
        const token = window.localStorage.getItem('token')
        const body = form
        try {
            const response = await axios.post(`${BASE_URL}posts`, body, {
                headers: {
                    Authorization: token
                }
            })
            console.log("Response do CreatePost: ", response.data)
            alert("Post criado!")
        } catch (error) {
            console.log("Erro encontrado: ", error)
        }
    }
    return (
        <MainContainer>
            <Loading style={{ display: `${display}` }} />

            <Header />
            <ContainerPostMessage>
                <Form onSubmit={CreatePost}>
                    <Input name='title' value={form.title} type={"text"} placeholder="Título" onChange={onChange} required pattern={"^.{4,}"} title="Título precisa ter no mínimo 4 caracteres" />
                    <Input name='text' value={form.text} type={"text"} placeholder="Comentário" onChange={onChange} required pattern={"^.{10,}"} title="O texto precisa ter no mínimo 19 caracteres" />
                    <ButtonForm>Enviar</ButtonForm>
                </Form>
            </ContainerPostMessage>
            {posts.length > 0 && renderPosts}
        </MainContainer>
    )
}
export default PostsPage

