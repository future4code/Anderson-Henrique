import React, {useEffect,useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import CardMatch from '../../Components/CardMatch'
import { Home } from '@styled-icons/boxicons-regular'



const Matches = props => {

const [allMatches,setAllMatches]=useState([])

useEffect( () => {
getAllMatches()
// getAllMatches()
},[])

    const getAllMatches = async () => {

        try {
          const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-oliveira-cruz/matches")
          console.log("response no getMatches na pagina do matches!!!!: ", response.data.matches)
          setAllMatches(response.data.matches)
          console.log(" ver o q o Allmatches ta pegando : ",allMatches)
        } catch (error) {
          console.log("erro no getMatche")
        }
      }

      


      const allLiked = allMatches.map( (person )=> {
          return   <CardMatch 
            image={person.photo}
            name={person.name}
            />
      } )
return (
    <Container>
        haha
        {allLiked}
    </Container>
)
}

export default Matches


const Container = styled.div`

`