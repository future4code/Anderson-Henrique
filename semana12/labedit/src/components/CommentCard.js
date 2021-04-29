import React from 'react'
import styled from 'styled-components'
import { DownArrow, UpArrow } from './Arrows'

const CommentCard = props => {


    return (
        <Container>
            <TitleAndVotes>
                <P> {props.username}:</P>
                <Span>
                    <UpArrow onClick={props.onClickUpComment} />
                    {props.votesCount}
                    <DownArrow onClick={props.onClickDownComment} />
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
width:max(90vw,350px);
margin: 15px 0;
border-radius:8px;
border:1px solid teal;
`

const TitleAndVotes = styled.div`
display:flex;
/* background-color:pink; */
justify-content:space-between;

`
const Text = styled.div`
width:max(90vw,300px);
/* background-color:orange; */
padding:10px;
color:darkgreen;
`
const P = styled.p`
color:#004369;
padding-left:10px;
margin-bottom:6px;
`

const Span = styled.span`
display:flex; 
align-items:center;
justify-content:space-around;

`

