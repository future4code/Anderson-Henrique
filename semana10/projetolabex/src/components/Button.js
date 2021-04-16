import React from 'react'
import styled from 'styled-components'

export const Button = (props) => {

    return <ButtonTemplate onClick={props.onClick}>{props.text}</ButtonTemplate>

}


const ButtonTemplate = styled.button`
background-color:blue;
font-size:1.5rem;
height:50px;
padding: 0 10px;
border-radius: 20px;
color:white;
width:200px;

@media(max-width:400px){
    font-size:1rem;
    height:40px;
    padding:0 5px;
    width:150px;
}
`