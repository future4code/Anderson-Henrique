
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Home from './Pages/Home/Home'
import Matches from './Pages/Matches/Matches'
import { PersonCheckFill } from '@styled-icons/bootstrap/PersonCheckFill'
import {HomeHeart} from '@styled-icons/boxicons-regular/HomeHeart'
const App = () => {
  const [page, setPage] = useState("home")



  const clearMatches = async () => {
    const response = await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-oliveira-cruz/clear ")
    console.log("OK + response: ", response)
  }


  const goToMatches = () => {
    setPage("matches")
  }
  const goToHome = () => {
    setPage("home")
    console.log("entrei na func?")
  }

  const renderPage = () => {

    switch (page) {
      case 'home':
        return <Home
          goToMatches={goToMatches} />
      case 'matches':
        return (
        <ContainerMatches>
        
        <H2><div><Span1>astro</Span1><Span2>match</Span2></div><BackToHome onClick={goToHome} /></H2>
        
        <Matches
          goToHome={goToHome} />
        </ContainerMatches>
)
      default:
            <Home />

    }
  }



  return (
    <div className="App">
      <button onClick={clearMatches}>Limpar Matches</button>
      {renderPage()}

    </div>
  );
}

export default App;


const H2 = styled.h2`
width:100%;
padding: 0 ;
margin:12px auto 0;
text-align:center; 
display:flex;
justify-content:space-between;
align-items:center;
border-bottom: 1px solid gray;
margin-bottom:24px;
padding-bottom:12px;
`

const Span1 = styled.span`
color:#758E4F;
padding-left:40px;
`

const Span2 = styled.span`
color:#86BBD8;
`

const BackToHome = styled(HomeHeart)`
height:50px;
cursor: pointer;
padding-right:40px;
&:hover{
    color:#f03221;
}
`


const ContainerMatches = styled.div`
width: 400px;
height:600px;
margin:auto;
border: 1px solid black;
margin-top:50px;
`
