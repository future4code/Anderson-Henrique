import React from 'react'
import styled from 'styled-components'



export const Loading = (props) => {

    return (<LoaderContainer style={props.style} >
        <Loader></Loader>
    </LoaderContainer>)
}

const LoaderContainer = styled.div`
width:max(90%,333px);
background-color:#E1E1E1;
height:100vh;
position:absolute;
`


const Loader = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 20% auto;
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`