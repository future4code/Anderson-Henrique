import React, { useState } from 'react'
import styled from 'styled-components'
import {SuitHeart} from '@styled-icons/bootstrap/SuitHeart'
import {SuitHeartFill} from '@styled-icons/bootstrap/SuitHeartFill'
import {PersonCheckFill} from '@styled-icons/bootstrap/PersonCheckFill'
const Card = (props) => {

    return (
        <Container key={props.id}>
            <H2><div><Span1>astro</Span1><Span2>match</Span2></div><PersonCheck onClick={props.goToMatches}/></H2>
            <Img src={props.img} />
            <H3>{props.name}, {props.age} </H3>
            <P>{props.bio}</P>
            <ContainerButtons>
                <Button onClick={() => props.matchFalse(props.id)}> X </Button>
                {/* <Button onClick={() => props.matchTrue(props.id)}>  V </Button> */}
                <Heart onClick={() => props.matchTrue(props.id)}/>
                {/* <HeartFill/> */}
            </ContainerButtons>
        </Container>
    )
}





export default Card

const Container = styled.div`
width:400px;
margin:auto;
background-color:orange;
display:flex;
flex-direction:column;
height:540px;
`

const ContainerButtons = styled.div`
width:60%;
margin: auto;
display:flex;
justify-content:space-around;

`



const Img = styled.img`
/* width:300px; */
/* height:200px; */
width:360px;
height:300px;
margin: 0 auto;


`

const Button = styled.button`
    font-size:24px;
    height:60px;
    width:60px;
    border-radius: 50%;
    &:hover{
    scale:1.2;
    transition:0.3s;
}
`
const H2= styled.h2`
width:80%;
margin:12px auto 0;
text-align:center;
display:flex;
justify-content:space-between;
`

const H3 = styled.h3`
margin-left:16px;


`

const P = styled.p`
margin: 0 auto;
margin-left:16px;
`

const Span1= styled.span`
color:#758E4F;
`
const Span2= styled.span`
color:#86BBD8;
`


const Heart = styled(SuitHeart)`
/* border-radius:50%; */
width: 60px;
height:60px;
&:hover{
   background-color:red;
}

`
const PersonCheck = styled(PersonCheckFill)`
height:50px;
`