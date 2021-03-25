import './App.css';
import Pokecard from './components/Pokecard'
import axios from 'axios'
import React from 'react';

class App extends React.Component {

  state = {
    pokemons: [],
    randNumbers: [],
    selectedPokemons: []
  }

  componentDidMount() {
    this.getPokeInfos()
    this.generateSixNumbers()
    // this.select6Pokes()
  }









getPokeInfos = async () => {
try{
  const pokemon =  await axios.get("https://pokeapi.co/api/v2/pokemon?limit=386&offset=0")
// console.log("POKEMON DATA: ",pokemon.data.results)
this.setState({pokemons: pokemon.data.results} )
// console.log("STATE POKEMONS: ",this.state.pokemons)
// 
}catch(error){
  console.log("ERROR: ",error)
}

}

  generateSixNumbers = () => {
    let saveNumbers = []
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * 386)
      console.log("RANDOM: ", random)
      saveNumbers.push(random)
      // this.setState({randNumbers})
      console.log("SaveNumbers: ", saveNumbers)
      this.setState({randNumbers: saveNumbers}, () => {
        console.log("array do randNumbers no STATE: ",this.state.randNumbers)
      })
    }
    

    
  }

select6Pokes = async () => {
 await  this.generateSixNumbers()
  // console.log("state randnumbers: ",this.state.randNumbers)
  let arrayProvisorio = []
  for(let number of this.state.randNumbers){
    // console.log("STATE POKEMONS: ",this.state.pokemons)
  // console.log("state randnumbers dentro do for:: ",this.state.randNumbers)

    // console.log("State number dentro do for: ",number)
    arrayProvisorio.push(this.state.pokemons.slice(number,number+1))
    // this.state.selectedPokemons =this.state.pokemons.slice(number,2)
    // console.log("array provisorio : ",arrayProvisorio)
    this.setState({selectedPokemons: arrayProvisorio})
    console.log("Array selected pokes: ",this.state.selectedPokemons)
  }
}






   letItGo =async  () => {
console.log("haha")

   this.select6Pokes()
  
  let renderCards= []  
 renderCards = this.state.selectedPokemons.map( (pokemon) => {
      <Pokecard 
      name={this.state.selectedPokemons[0].name}
      type={"fire"}
      />
    })
    console.log("renderCardsssssssssssssssssssssssssssss: ",renderCards)
    return {renderCards}



  }














// renderCards = () => {
//   this.select6Pokes
//   <Pokecard
//   name={this.state.selectedPokemons[0].name}
//   type={'Fire'} />
// }

  render() {
  //   // function letItGo() {
  //   this.select6Pokes()

    
  //   const renderCards = this.state.selectedPokemons.map( (pokemon) => {
  //     <Pokecard 
  //     name={this.state.selectedPokemons[0].name}
  //     type={"fire"}
  //     />
  //   })


  // // }

    // this.getPokeInfos()
    return (
      <div className="App">

      <button onClick={ this.letItGo}>Testando let it go!</button>
        {/* {renderCards} */}
        {/* <Pokecard     name={this.state.selectedPokemons[0].name}  type={'Fire'} /> */}
        <button onClick={this.generateSixNumbers}>Teste gerar aleatorios</button>
        <button onClick={this.getPokeInfos}>Get DATA</button>
        <button onClick={this.select6Pokes}>Testar pokes selecionados</button>
      </div>
    );
  }
}

export default App;
