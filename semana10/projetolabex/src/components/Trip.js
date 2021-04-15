import React from 'react'
import styled from 'styled-components'

const Trip = (props) => {

return (
    <Container>
        <P><Span>Nome:</Span> {props.name}</P>
        <P><Span>Descrição:</Span> {props.description}</P>
        <P><Span>Planeta:</Span> {props.planet}</P>
        <P><Span>Duração:</Span> {props.durationInDays} dias</P>
        <P><Span>Data:</Span> {props.date}</P>
    </Container>
)

}

export default Trip

const Container = styled.div`
border: 1px solid black;
width:800px;
margin: 0 auto;
min-width:400px;
border-radius:8px;
display:flex;
flex-direction:column;
justify-content:center;
margin-bottom: 36px;
`

const Span = styled.span`
color:blue;
/* background-color:red; */
width:80px;
`
const P = styled.p`
font-family:'Roboto';
width:80%;
/* background-color:red; */
/* border: 1px solid black; */

margin:  auto;
min-height:44px;
/* padding: 12px 0 0 0; */
display:flex;
align-items:center;
/* flex-direction:column; */
/* justify-content:center; */ 

`