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
                    <Button onClick={props.onClickDetails}>Go to Details</Button>
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

// const UpArrow = styled(UpArrowAlt)`
// width:50px;
// color:blue;
// `
// const DownArrow = styled(DownArrowAlt)`
// color:red;
// width:50px;

// `
const H1 = styled.h1`
font-size:18px;
`

const H2 = styled.h2`
font-size:16px;
`

const P = styled.p`

`
const Text = styled.p`
background-color:aliceblue;
font-size:14px;

`
const Span = styled.span`
background-color:red;
display:flex;
width:100%;
align-items:center;

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
`

const Button = styled.button`
`