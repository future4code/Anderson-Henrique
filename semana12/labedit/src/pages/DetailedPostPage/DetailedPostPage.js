import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router'
import { BASE_URL } from '../../constants/urls'
import PostCard from '../../components/PostCard'
import CommentCard from '../../components/CommentCard'
import { Container, ContainerPostMessage, Input, Form} from './styled'
import useForm from '../../hooks/useForm'
import useProtectedPage from '../../hooks/useProtectedPage'
import Header from '../../components/Header'
import { ButtonForm } from '../../components/ButtonForm'
import { Loading } from '../../components/Loading'
import { upVote, upVoteComment,downVoteComment,downVote } from './functions'

const DetailedPostPage = () => {

    useProtectedPage()
    const history = useHistory()
    const params = useParams()
    const [detailedPostInfo, setDetailedPostInfo] = useState([])
    const [comments, setComments] = useState([])
    const [form, onChange, clear] = useForm({ text: "" })
    const [display,setDisplay] = useState('block')
    const [style,setStyle] = useState({display:'block',opacity:'1'})

    useEffect(() => {
        getDetailedPost()
    }, [])

    const getDetailedPost = async () => {
        const token = window.localStorage.getItem('token')
        try {
            const response = await axios.get(`${BASE_URL}posts/${params.id}`, {
                headers: {
                    Authorization: token
                }
            })

            setDetailedPostInfo(response.data.post)
                    setComments(response.data.post.comments)
                    
        } catch (error) {
            console.log("Erro encontrado: ", error)
        }
        setStyle({display:'none'})
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

    const renderComents = comments.map((comment) => {
        return <CommentCard 
            key={comment.id}
            text={comment.text}
            username={comment.username}
            votesCount={comment.votesCount}
            onClickUpComment={() => upVoteComment(detailedPostInfo.id, comment.id)}
            onClickDownComment={() => downVoteComment(detailedPostInfo.id, comment.id)}
            title={'Ir para detalhes'}
        />
    })

    return (
        <Container>
            {/* <Loading style={{display: `${display}`,backgroundColor:'red'}}/> */}
            <Loading style={style}/>
            <Header />

            <PostCard key={detailedPostInfo.id} 
                title={detailedPostInfo.title}
                text={detailedPostInfo.text}
                username={detailedPostInfo.username}
                votesCount={detailedPostInfo.votesCount}
                commentsCount={detailedPostInfo.commentsCount}
                onClickUp={() => upVote(detailedPostInfo.id)}
                onClickDown={() => downVote(detailedPostInfo.id)}
            />

            <ContainerPostMessage>
                <Form onSubmit={CreateComment}>
                    <Input name='text' value={form.text} type={"text"} placeholder="Comentário" onChange={onChange} required pattern={"^.{10,}"} title="Mínimo 10 caracteres" />
                    <ButtonForm>Comentar</ButtonForm>
                </Form>
            </ContainerPostMessage>
            {comments && renderComents.length > 0 && renderComents}
        </Container>
    )
}

export default DetailedPostPage

