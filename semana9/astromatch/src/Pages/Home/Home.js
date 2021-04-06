import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Card from '../../Components/Card'

const Home = (props) => {


    const [person, setPerson] = useState({})
  
  
    useEffect(() => {
      getProfiles()
    }, [])
  
    const getProfiles = async () => {
      try {
        const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-oliveira-cruz/person")
        console.log("response:", response.data.profile)
        setPerson(response.data.profile)
        console.log("Vendo oq veio no person :", person)
      }
      catch (error) {
        console.log("Erro no GetProfiles: ", error)
      }
    }
  
    const getAllMatches = async () => {
  
      try {
        const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-oliveira-cruz/matches")
        console.log("response no getMatches: ", response.data.matches)
        
      } catch (error) {
        console.log("erro no getMatche")
      }
    }
  
    const matchTrue = async (idPerson) => {
      try {
        let body = {
          id: idPerson,
          choice: true
        }
        const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-oliveira-cruz/choose-person", body)
        console.log("Response no MatchTrue: ", response)
        getProfiles()
      } catch (error) {
        console.log("Erro no mathTrue: ", error)
      }
    }
  
    const matchFalse = async (idPerson) => {
      try {
        let body = {
          id: idPerson,
          choice: false
        }
        const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-oliveira-cruz/choose-person", body)
        console.log("Response no MatchFalse: ", response)
        getProfiles()
      } catch (error) {
        console.log("Erro no mathFalse: ", error)
      }
    }
  
    const clearMatches = async () => {
      const response = await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-oliveira-cruz/clear ")
      console.log("OK + response: ", response)
    }
  
  
    









    return ( 

        <div>

<Card
        name={person.name}
        id={person.id}
        bio={person.bio}
        img={person.photo}
        age={person.age}
        matchTrue={() => matchTrue(person.id)}
        matchFalse={() => matchFalse(person.id)}
        goToMatches={props.goToMatches}
      />
        </div>
    )
}

export default Home