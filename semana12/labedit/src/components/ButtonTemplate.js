
import React from 'react'
import styled from 'styled-components'

const ButtonTemplate = ( props) => {

return <Button onClick={props.onClick} >{props.text}</Button>

}

export default ButtonTemplate


const Button = styled.button`
width:max(95%,300px);
background-color:#44C767; 
font-size:24px;
margin:12px auto ;
color:white;
padding:12px;
&:hover{
    cursor: pointer;
}
`