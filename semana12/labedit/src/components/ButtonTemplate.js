
import React from 'react'
import styled from 'styled-components'

const ButtonTemplate = ( props) => {

return <Button onClick={props.onClick} >{props.text}</Button>

}

export default ButtonTemplate


const Button = styled.button`
width:300px;
background-color:orange; 


`