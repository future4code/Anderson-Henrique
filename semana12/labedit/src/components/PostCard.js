import React from 'react'
import styled from 'styled-components'
import { DownArrow, UpArrow } from './Arrows'

const PostCard = (props) => {

    return (
        <Container style={props.style}>
            <H1>{props.title}</H1>
            <Text>{props.text}</Text>
            <Span> Postado por: <H2>{props.username}</H2></Span>

            <ContainerCommentsVotes>
                <CommentsArea>
                    <P>{props.commentsCount} comentarios</P>
                </CommentsArea>
                <VotesArea>
                    <DownArrow onClick={props.onClickDown} />
                    {props.votesCount}
                    <UpArrow onClick={props.onClickUp} />
                    <Button onClick={props.onClickDetails} title={props.buttonTitle}>Detalhes</Button>
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
border-radius:12px;
-webkit-box-shadow: 2px 1px 17px 8px rgba(0,0,0,0.3); 
box-shadow: 2px 1px 17px 0 rgba(0,0,0,0.3);
`

const H1 = styled.h1`
font-size:18px;
margin:12px 4px 0;
color:#01949A;
margin-top:8px;
`

const H2 = styled.h2`
font-size:16px;
margin-left:4px;
`

const P = styled.p`
    margin:6px;
@media(max-width:450px){
    font-size:14px;
}
`
const Text = styled.p`
font-size:14px;
padding:0 6px ;
width:max(95%,300px);
text-align:center;
`

const Span = styled.span`
display:flex;
width:100%;
align-items:center;
margin:0px;
padding-left:5vw;
line-height:0;
color:#004369;
`

const ContainerCommentsVotes = styled.div`
display:flex;
width:90%;
justify-content:space-between;
padding: 0 12px;
`
const CommentsArea = styled.div`
`
const VotesArea = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

const Button = styled.button`
    box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color:#ffffff;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:3px 12px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;

&:hover{
    background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
	background-color:#f6f6f6;
}
&:active{
    position:relative;
	top:1px;
}
`



