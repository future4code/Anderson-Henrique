import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import PostCard from '../../components/PostCard'
import { ButtonForm } from '../../components/ButtonForm'
import { BASE_URL } from '../../constants/urls'
import { goToDetailedPostPage } from '../../routes/coordinator'
import { MainContainer, ContainerPostMessage, Input, Form, InputContainer } from './styled'
import useForm from '../../hooks/useForm'
import useProtectedPage from '../../hooks/useProtectedPage'
import Header from '../../components/Header'
import { Loading } from '../../components/Loading'
import { CreatePost, downVote, upVote } from './functions'

const PostsPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({ text: "", title: "" })
    const [posts, setPosts] = useState([])
    const [showPosts, setShowPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [style, setStyle] = useState({ display: 'block', opacity: '1' })

    useEffect(() => {
        getPosts()
    }, [isLoading])

    const getPosts = async () => {
        setStyle({ display: 'block' })
        const token = window.localStorage.getItem('token')
        try {
            const response = await axios.get(`${BASE_URL}posts`, {
                headers: {
                    Authorization: token
                }
            })
            setPosts(response.data.posts)
            setShowPosts(response.data.posts)
        } catch (error) {
            console.log("Erro encontrado: ", error)
        }
        setStyle({ display: 'none' })
    }

    const filterPosts = (event) => {
        const letter = event.target.value.toLowerCase()
        const filtereds = posts.filter((comment) => comment.text.toLowerCase().indexOf(letter) >= 0 || comment.title.toLowerCase().indexOf(letter) >= 0 || comment.username.toLowerCase().indexOf(letter) >= 0)
        setShowPosts(filtereds)
    }

    const renderPosts = showPosts.map((post) => {
        return <PostCard key={post.id}
            title={post.title}
            text={post.text}
            username={post.username}
            votesCount={post.votesCount}
            commentsCount={post.commentsCount}
            buttonTitle={'Detalhes deste post'}
            onClickUp={() => upVote(post.id, setIsLoading)}
            onClickDown={() => downVote(post.id, setIsLoading)}
            onClickDetails={() => goToDetailedPostPage(history, post.id)}
        />
    })

    return (
        <MainContainer>
            {isLoading ? <Loading style={{ display: 'block' }} /> :
                <div>
                    <Loading style={style} />
                    <Header />
                    <InputContainer>
                        <input onChange={filterPosts} placeholder="Busque por Título/Usuário/Texto" />
                    </InputContainer>
                    <ContainerPostMessage>
                        <Form onSubmit={() => CreatePost(form, clear, setIsLoading)}>
                            <Input name='title' value={form.title} type={"text"} placeholder="Título" onChange={onChange} required pattern={"^.{4,}"} title="Título precisa ter no mínimo 4 caracteres" />
                            <Input name='text' value={form.text} type={"text"} placeholder="Comentário" onChange={onChange} required pattern={"^.{10,}"} title="O texto precisa ter no mínimo 10 caracteres" />
                            <ButtonForm title={"Enviar Comentario"}>Enviar</ButtonForm>
                        </Form>
                    </ContainerPostMessage>
                    {posts.length > 0 && renderPosts}
                </div>}
        </MainContainer>
    )
}
export default PostsPage

