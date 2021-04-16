import React from 'react'
import styled from 'styled-components'

const Trip = (props) => {

return (
    <Container>
        <P><Span>Nome:</Span> <SpanProps>{props.name}</SpanProps></P>
        <P><Span>Descrição:</Span>  <SpanProps>{props.description}</SpanProps> </P>
        <P><Span>Planeta:</Span>  <SpanProps> {props.planet}</SpanProps></P>
        <P><Span>Duração:</Span>  <SpanProps>{props.durationInDays} dias</SpanProps> </P>
        <P><Span>Data:</Span>  <SpanProps>{props.date}</SpanProps> </P>
    </Container>
)

}

export default Trip

const Container = styled.div`
border: 1px solid black;
/* max-width:600px; */
/* min-width:400px; */
width: max(75%,330px);
margin: 29px auto;
border-radius:8px;
display:flex;
flex-direction:column;
justify-content:center;
margin-bottom: 12px;

@media(max-width:400px){
    /* background-color:pink; */
    /* margin-bottom:14px; */
}
`

const Span = styled.span`
color:blue;
/* background-color:red; */
width:100px;
`
const P = styled.p`
font-family:'Roboto';
width:90%;
margin:  auto;
min-height:52px;
display:flex;
align-items:center;
/* flex-direction:column; */
/* justify-content:center; */ 
@media(max-width:400px){
    min-height:22px;
    /* background-color:grey; */
    margin:8px;
    font-size:14px
}

`

const SpanProps = styled.span`
/* flex-grow: */
/* background-color:orange; */
width:100%;
margin-left:8px;
font-size:15px;
`