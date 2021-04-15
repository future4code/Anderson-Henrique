import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

export const Button = (props) => {
    const history = useHistory()

return <ButtonTemplate  onClick={props.onClick}>{props.text}</ButtonTemplate>
    
}


const ButtonTemplate = styled.button`
background-color:blue;
font-size:2rem;
height:80px;
padding: 0 20px;
border-radius: 30px;
color:white;
width:250px;
`