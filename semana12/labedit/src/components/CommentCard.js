import React from 'react'
import styled from 'styled-components'
import { DownArrow, UpArrow } from './Arrows'
const CommentCard = props => {

    return (
        <Container style={props.style}>
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
-webkit-box-shadow: 2px 1px 17px 8px rgba(0,0,0,0.8); 
box-shadow: 2px 1px 17px 0 rgba(0,0,0,0.8);
&:hover{
    transform:scale(1.03);
    transition:0.5s;
}
`

const TitleAndVotes = styled.div`
display:flex;
justify-content:space-between;

`
const Text = styled.div`
width:max(90vw,300px);
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
