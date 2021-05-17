import styled from 'styled-components'

export const Container = styled.div`
width:100%;
height:100vh;
margin: 0 auto;
background-color:#E1E1E1;
`
export const BodyContainer= styled.div`
width:max(50vw,360px);
background-color:white;
margin:10vh auto auto;
display:flex;
flex-direction:column;
justify-content:center;
padding-top:4vh;
`

export const Input = styled.input`
background-color:#E1E1E1;
border:none;
border-bottom:4px solid gray;
text-align:center;
margin:12px;
font-size:24px;
height:48px;
color:rgba(0,0,0,0.4)
`

export const Form = styled.form`
display:flex;
flex-direction:column;
`