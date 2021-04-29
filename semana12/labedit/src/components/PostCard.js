import React from 'react'
import styled from 'styled-components'
import { DownArrow, UpArrow } from './Arrows'
// import { UpArrowAlt } from '@styled-icons/boxicons-regular/UpArrowAlt'
// import { DownArrowAlt } from '@styled-icons/boxicons-regular/DownArrowAlt'


const PostCard = (props) => {

    return (
        <Container>
            <H1>{props.title}</H1>
            <Text>{props.text}</Text>
            <Span> Author: <H2>{props.username}</H2></Span>

            <ContainerCommentsVotes>
                <CommentsArea>
<P>{props.commentsCount} comentarios</P>
                </CommentsArea>
                <VotesArea>
                    <UpArrow onClick={props.onClickUp}/>{props.votesCount}
                    <DownArrow onClick={props.onClickDown}/>
                    <Button onClick={props.onClickDetails}>Detalhes</Button>
                </VotesArea>
            </ContainerCommentsVotes>
        </Container>

    )


}

export default PostCard


const Container = styled.div`
border:1px solid black;
display:flex;
flex-direction:column;
align-items:center;
margin: 10px 12px;
`

// `
const H1 = styled.h1`
font-size:18px;
margin:4px;
`

const H2 = styled.h2`
font-size:16px;
`

const P = styled.p`

@media(max-width:450px){
    /* color:orange; */
    font-size:14px;
}
`
const Text = styled.p`
background-color:aliceblue;
font-size:14px;
padding:6px;
/* background-color:gray; */

`
const Span = styled.span`
background-color:red;
display:flex;
width:100%;
align-items:center;
margin:0px;
/* padding:0; */
line-height:0

`

const ContainerCommentsVotes = styled.div`
background-color:pink;
display:flex;
width:100%;
justify-content:space-around;
`
const CommentsArea = styled.div`
`

const VotesArea = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:purple;
`

const Button = styled.button`
`