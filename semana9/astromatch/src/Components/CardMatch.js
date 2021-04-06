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
background-color:#01F122;
width:400px;
margin:auto;
height:60px;
display:flex;

&:hover{
    background-color:#EBF2FA;
    transition: 0.3s;
}
`

const CenterContaier = styled.div`
width:80%;
margin:auto;
display:flex;
align-items:center;
`


const Img = styled.img`
width:50px;
height:50px;
border-radius:50%;
margin-right:12px;

`

const Span = styled.span`
/* display:flex; */
/* align-items:center; */
font-family: 'Roboto', sans-serif;
`