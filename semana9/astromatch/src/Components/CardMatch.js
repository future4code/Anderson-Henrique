import React from 'react'
import styled from 'styled-components'


const MatchesCard = (props) => {

    return (
        <Container>
            
            <CenterContaier>
                <Img src={props.image} />
                <Span>{props.name}</Span>
            </CenterContaier>
        </Container>
    )
}



export default MatchesCard

const Container = styled.div`
width:400px;
margin:auto;
height:60px;
display:flex;
flex-direction:collumn;
`

const CenterContaier = styled.div`
width:80%;
margin:auto;
display:flex;
align-items:center;
&:hover{
    background-color:#EBF2FA;
    transition: 0.3s;
}
`

const Img = styled.img`
width:50px;
height:50px;
border-radius:50%;
margin-right:12px;
`

const Span = styled.span`
font-family: 'Roboto', sans-serif;
`
