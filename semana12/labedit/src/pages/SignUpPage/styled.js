import styled from 'styled-components'
// import {Letterboxd} from '@styled-icons/simple-icons/Letterboxd'



export const Container = styled.div`
/* width:max(90vw,350px); */
width:100%;
height:100vh;
margin: 0 auto;
/* border:1px solid teal; */
background-color:#E1E1E1;
`


export const BodyContainer= styled.div`
width:max(50vw,360px);
background-color:white;
margin:10vh auto auto;
/* margin-top:10vh; */
display:flex;
flex-direction:column;
justify-content:center;
/* margin-top:30px; */
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
/* 
export const LetterL = styled(Letterboxd)`
color:#E1E1E1;
width:100px;
margin:auto;
` */