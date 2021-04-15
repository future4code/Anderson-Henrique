import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

export const Button = (props) => {
    const history = useHistory()

return <ButtonTemplate  onClick={props.onClick}>{props.text}</ButtonTemplate>
    
}


const ButtonTemplate = styled.button`
background-color:blue;
font-size:1.5rem;
height:50px;
padding: 0 10px;
border-radius: 20px;
color:white;
width:200px;
`