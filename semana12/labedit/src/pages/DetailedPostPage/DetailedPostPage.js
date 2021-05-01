import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router'
import { BASE_URL } from '../../constants/urls'
import PostCard from '../../components/PostCard'
import CommentCard from '../../components/CommentCard'
import { Container, ContainerPostMessage, Input, Form, DetailedPostCard, DetailedCommentCard, IconSearch, SearchContainer } from './styled'
import useForm from '../../hooks/useForm'
import useProtectedPage from '../../hooks/useProtectedPage'
import Header from '../../components/Header'
import { ButtonForm } from '../../components/ButtonForm'
import { Loading } from '../../components/Loading'
import { upVote, upVoteComment, downVoteComment, downVote } from './functions'

const DetailedPostPage = () => {

    useProtectedPage()
    const params = useParams()
    const [detailedPostInfo, setDetailedPostInfo] = useState([])
    const [comments, setComments] = useState([])
    const [form, onChange, clear] = useForm({ text: "" })
    const [style, setStyle] = useState({ display: 'block', opacity: '1' })
    const [showComments, setShowComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        getDetailedPost()
    }, [isLoading])

    const getDetailedPost = async () => {
        // setIsLoading(true)
        setStyle({ display: 'block' })
        const token = window.localStorage.getItem('token')
        try {
            const response = await axios.get(`${BASE_URL}posts/${params.id}`, {
                headers: {
                    Authorization: token
                }
            })

            setDetailedPostInfo(response.data.post)
            setComments(response.data.post.comments)
            setShowComments(response.data.post.comments)
            console.log("Detalhes: ", response.data.post)
        } catch (error) {
            console.log("Erro encontrado: ", error)
        }
        setStyle({ display: 'none' })
        // setIsLoading(false)

    }

    const CreateComment = async (evt) => {
        evt.preventDefault()
        const token = window.localStorage.getItem('token')
        const body = form
        try {
            const response = await axios.post(`${BASE_URL}posts/${detailedPostInfo.id}/comment`, body, {
                headers: {
                    Authorization: token
                }
            })
        } catch (error) {
            console.log("Erro encontrado: ", error)
        }
        clear()
    }
    const filteredComments = showComments.map((comment) => {
        return <CommentCard
            key={comment.id}
            text={comment.text}
            username={comment.username}
            votesCount={comment.votesCount}
            onClickUpComment={() => upVoteComment(detailedPostInfo.id, comment.id, setIsLoading)}
            onClickDownComment={() => downVoteComment(detailedPostInfo.id, comment.id, setIsLoading)}
            title={'Ir para detalhes'}
        />
    })



    const filterComments = (event) => {
        const letter = event.target.value
        const filtereds = comments.filter((comment) => comment.text.toLowerCase().indexOf(letter) >= 0 || comment.username.toLowerCase().indexOf(letter) >= 0)
        setShowComments(filtereds)
    }

    return (

        <Container >
            {isLoading ? <Loading style={{ display: 'block' }} />
                :
                <div>
                    <Loading style={style} />
                    <Header />
                    <SearchContainer>
                        <label for='search'>   <IconSearch /></label>
                        <input onChange={filterComments} placeholder="texte filter" id='search' name='search' />
                    </SearchContainer>
                    <PostCard
                        key={detailedPostInfo.id}
                        title={detailedPostInfo.title}
                        text={detailedPostInfo.text}
                        username={detailedPostInfo.username}
                        votesCount={detailedPostInfo.votesCount}
                        commentsCount={detailedPostInfo.commentsCount}
                        onClickUp={() => upVote(detailedPostInfo.id, setIsLoading)}
                        onClickDown={() => downVote(detailedPostInfo.id, setIsLoading)}
                    />

                    <ContainerPostMessage>
                        <Form onSubmit={CreateComment}>
                            <Input name='text' value={form.text} type={"text"} placeholder="Comentário" onChange={onChange} required pattern={"^.{10,}"} title="Mínimo 10 caracteres" />
                            <ButtonForm>Comentar</ButtonForm>
                        </Form>
                    </ContainerPostMessage>
                    {comments && filteredComments.length > 0 && filteredComments}
                </div>}

            {/* {console.log("comments: ",comments)} */}
        </Container>
    )
}

export default DetailedPostPage

