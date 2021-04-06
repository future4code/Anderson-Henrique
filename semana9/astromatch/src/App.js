
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Home from './Pages/Home/Home'
import Matches from './Pages/Matches/Matches'

const App = () => {
  const [person, setPerson] = useState({})
  const [page, setPage] = useState("home")


  // useEffect(() => {
  //   getProfiles()
  // }, [])

  // const getProfiles = async () => {
  //   try {
  //     const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-oliveira-cruz/person")
  //     console.log("response:", response.data.profile)
  //     setPerson(response.data.profile)
  //     console.log("Vendo oq veio no person :", person)
  //   } catch (error) {
  //     console.log("Erro no GetProfiles: ", error)
  //   }
  // }

  const getAllMatches = async () => {
    try {
      const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-oliveira-cruz/matches")
      console.log("response no getMatches: ", response.data.matches)
    } catch (error) {
      console.log("erro no getMatche")
    }
  }

  // const matchTrue = async (idPerson) => {
  //   try {
  //     let body = {
  //       id: idPerson,
  //       choice: true
  //     }
  //     const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-oliveira-cruz/choose-person", body)
  //     console.log("Response no MatchTrue: ", response)
  //     getProfiles()
  //   } catch (error) {
  //     console.log("Erro no mathTrue: ", error)
  //   }
  // }

  // const matchFalse = async (idPerson) => {
  //   try {
  //     let body = {
  //       id: idPerson,
  //       choice: false
  //     }
  //     const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-oliveira-cruz/choose-person", body)
  //     console.log("Response no MatchFalse: ", response)
  //     getProfiles()
  //   } catch (error) {
  //     console.log("Erro no mathFalse: ", error)
  //   }
  // }

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
        return <Matches
          goToHome={goToHome} />
      default:
        <Home />
    }
  }



  return (
    <div className="App">
      <p>Chakalaka</p>
      {/* <button onClick={getProfiles}>Get profiles </button> */}
      <button onClick={getAllMatches}>Get Matches</button>
      <button onClick={clearMatches}>Limpar Matches</button>


      {renderPage()}

    </div>
  );
}

export default App;
