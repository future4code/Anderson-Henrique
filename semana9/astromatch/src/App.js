
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {

  const getProfiles = async () => {
    try {
      const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-oliveira-cruz/person")
      console.log("response")
    }
    catch (error) {
      console.log("Erro no GetProfiles: ", error)
    }
  }

  const getAllMatches = () => {

    try {
      const response = axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-oliveira-cruz/matches")
      console.log("response no getMatches: ",response)
    } catch (error) {
      console.log("erro no getMatche")
    }
  }

  const matchTrue = (idPerson) => {
    try{
     let body = {
      id : idPerson,
      choice: true
     }
      const response = axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-oliveira-cruz/choose-person",body)
      console.log("Response no MatchTrue: ",response)
      
    }catch(error){
      console.log("Erro no mathTrue: ",error)
    }
  }

  const matchFalse = (idPerson) => {
    try{
     let body = {
      id : idPerson,
      choice: false
     }
      const response = axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-oliveira-cruz/choose-person",body)
      console.log("Response no MatchTrue: ",response)
      
    }catch(error){
      console.log("Erro no mathTrue: ",error)
    }
  }





  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
