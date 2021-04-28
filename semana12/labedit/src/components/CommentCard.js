import React from 'react'
import styled from 'styled-components'
import { DownArrow, UpArrow } from './Arrows'

const CommentCard = props => {


    return (
        <Container>
            <TitleAndVotes>
                <P>Autor: {props.username}</P>
                <Span>
                    <UpArrow onClick={props.onClickUpComment} />
                    {props.votesCount}
                    <DownArrow onClick={props.onClickDownComment}/>
                </Span>
            </TitleAndVotes>
            <Text>
{props.text}
            </Text>
        </Container>
    )
}

export default CommentCard

const Container = styled.div`

`

const TitleAndVotes = styled.div`
display:flex;
background-color:pink;
justify-content:space-space-between;

`
const Text = styled.div`
width:100%;
background-color:orange;
`
const P = styled.p`

`

const Span = styled.span`

`

