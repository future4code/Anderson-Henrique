import styled from 'styled-components'
import { Search } from '@styled-icons/boxicons-regular/Search' 


export const Container = styled.div`
width:max(90vw,350px);
margin: 0 auto;
`

export const ContainerPostMessage = styled.div`

`
export const IconSearch = styled(Search)`
width:30px;
padding-left:20px;
background-position:10px 10px;
color:bluegray;
`

export const Input = styled.input`
padding-left:10px;
background-position:10px 10px;
box-sizing:border-box;
&:focus{
    /* background-color:lightblue;  */
    /* border:3px solid #555; */
    border:none;
    border-bottom:1px solid red;
    transition:2s;
}

`

export const Form = styled.form`
text-align:center;
`

export const Button = styled.button`

`
export const SearchContainer = styled.div`
text-align:center;
margin: 10px 0;
`