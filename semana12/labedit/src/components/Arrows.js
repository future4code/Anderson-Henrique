import { UpArrowAlt } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { DownArrowAlt } from '@styled-icons/boxicons-regular/DownArrowAlt'
import styled from 'styled-components'



export const UpArrow = styled(UpArrowAlt)`
width:50px;
color:blue;
@media(max-width:450px){
    /* color:orange; */
    width:30px;
}
`
export const DownArrow = styled(DownArrowAlt)`
color:red;
width:50px;
@media(max-width:450px){
    /* color:orange; */
    width:30px;
}

`