import styled from 'styled-components'
export const Container = styled.div`
width:max(90vw,350px);
margin: 0 auto;
border:1px solid teal;

`


export const BodyContainer= styled.div`
width:max(50vw,350px);
background-color:orange;
margin:auto;
display:flex;
flex-direction:column;
justify-content:center;
`

export const Input = styled.input`
background-color:pink;
border:none;
border-bottom:4px solid gray;
text-align:center;
margin:12px;
font-size:24px;
`


export const Form = styled.form`
display:flex;
flex-direction:column;
`