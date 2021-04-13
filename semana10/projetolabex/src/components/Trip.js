import React from 'react'
import styled from 'styled-components'

const Trip = (props) => {

return (
    <Container>
        <p><Span>Nome</Span>: {props.name}</p>
        <p><Span>Descrição</Span>: {props.description}</p>
        <p><Span>Planeta</Span>: {props.planet}</p>
        <p><Span>Duração</Span>: {props.durationInDays} dias</p>
        <p><Span>Data</Span>: {props.date}</p>
    </Container>
)

}

export default Trip

const Container = styled.div`
border: 1px solid black;
width:800px;
margin: 0 auto;
`

const Span = styled.span`
color:blue;
/* background-color:red; */
`
const P = styled.p`

`