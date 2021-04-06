import React, { useState } from 'react'
import styled from 'styled-components'

const Card = (props) => {

    return (
        <Container>
            <Img src={props.img} />
            <H3>{props.name}, {props.age} </H3>
            <P>{props.bio}</P>
            <ContainerButtons>
                <Button onClick={props.matchFalse}> X </Button>
                <Button onClick={props.matchTrue}>  V </Button>
            </ContainerButtons>
        </Container>
    )
}





export default Card

const Container = styled.div`


`

const ContainerButtons = styled.div`


`



const Img = styled.div`


`

const Button = styled.button`


`

const H3 = styled.h3`


`

const P = styled.p`


`