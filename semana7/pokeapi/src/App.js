import './App.css';
import Pokecard from './components/Pokecard'
import axios from 'axios'
import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:space-between;
/* width:20%; */
width:50%;
margin:auto;
`

const ContainerButton = styled.button`
width:1200px;
margin-top: 40px;
height:40px;

`
class App extends React.Component {

  state = {
    randNumbers: [],
    selectedPokemons: [],
    randomPokes: []

  }

  componentDidMount() {
    this.generateSixNumbers()
  }

  generateSixNumbers = () => {
    let saveNumbers = []
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * 386)
      saveNumbers.push(random)
      this.setState({ randNumbers: saveNumbers }, () => {
      })
    }
  }
  generateArrayRandom = async () => {
this.generateSixNumbers()
    let arrayProvisorioDePokes = []
    try {
      for (let i = 0; i < 6; i++) {
        let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.randNumbers[i]}`)
        arrayProvisorioDePokes.push(pokemon.data)
      }
      this.setState({ randomPokes: arrayProvisorioDePokes }, () => {
      })
      console.log("STATE PROVISORIOS POKES: ", arrayProvisorioDePokes)
    } catch (error) {
      console.log("Qual o erro?", error)
    }
  }
  render() {
    let renderPokesFinalSeThorQuiser = this.state.randomPokes.map((pokemon) => {
      return <Pokecard
        name={pokemon.name}
        number={pokemon.id}
        type1={pokemon.types[0].type.name}
      />

    })


    let i = 0


    return (

      <div className="App">
        <Container>
        <h2>Aperte o botão para gerar 6 cards aleatórios das 3 primeiras gerações!</h2>
        <ContainerButton onClick={this.generateArrayRandom}>Gerar Cards Aleatórios! </ContainerButton>
          {renderPokesFinalSeThorQuiser}
         
        </Container>
      </div>
    )
  }
}

export default App;


