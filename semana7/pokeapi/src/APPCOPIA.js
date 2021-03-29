import './App.css';
import Pokecard from './components/Pokecard'
import axios from 'axios'
import React from 'react';

class App extends React.Component {

  state = {
    pokemons: [],
    randNumbers: [],
    selectedPokemons: [
      {photoId:""

      }],
    // photoId= []
  }

  componentDidMount() {
    this.getPokeInfos()
    this.generateSixNumbers()
    // this.select6Pokes()
  }









  getPokeInfos = async () => {
    try {
      const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=386&offset=0")
      // console.log("POKEMON DATA: ",pokemon.data.results)
      this.setState({ pokemons: pokemon.data.results })
      // console.log("STATE POKEMONS: ",this.state.pokemons)
      // 
    } catch (error) {
      console.log("ERROR: ", error)
    }

  }

  generateSixNumbers = () => {
    let saveNumbers = []
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * 386)
      // console.log("RANDOM: ", random)
      saveNumbers.push(random)
      // this.setState({randNumbers})
      // console.log("SaveNumbers: ", saveNumbers)
      this.setState({ randNumbers: saveNumbers }, () => {
        console.log("array do randNumbers no STATE: ", this.state.randNumbers)
      })
    }
    // this.select6Pokes()



  }

  select6Pokes = async () => {
    await this.generateSixNumbers()
    // console.log("state randnumbers: ",this.state.randNumbers)
    let arrayProvisorio = []
    for (let number of this.state.randNumbers) {
      // console.log("STATE POKEMONS: ",this.state.pokemons)
      // console.log("state randnumbers dentro do for:: ",this.state.randNumbers)

      // console.log("State number dentro do for: ",number)
      arrayProvisorio.push(this.state.pokemons.slice(number, number + 1))
      // this.state.selectedPokemons =this.state.pokemons.slice(number,2)
      // {arrayProvisorio.length ===1 ?
        // console.log("array provisorio.lenght -1: ",arrayProvisorio.slice(-1))
      
        // :
      console.log("array provisorio.lenght -1: ",arrayProvisorio.slice(-1)[0][0].url)
    
    // }
      // this.getInfo(arrayProvisorio.slice(-1)[0][0].url)

      // this.setState({ selectedPokemons: arrayProvisorio })
      // console.log("Array selected pokes: ", this.state.selectedPokemons)

      // this.getInfo(arrayProvisorio.length-1)
    }
  }

getInfo = async (url) => {
  const response =await  axios.get(`${url}`)
  console.log("Resposta : ",response.data)
// this.setState({photoId: response.data.id})

}




  letItGo = async () => {
    console.log("haha")

    await this.select6Pokes()

    let renderCarros = []
    console.log('testando como ta vindo o selectedPokemons: ', this.state.selectedPokemons)
    // renderCarros = this.state.selectedPokemons.map(
    //   (pokemon) => {
    //     return  ( <div>
    //    { console.log("Teste o state:")}

    //       <Pokecard
    //       name={'jasjdjhasjd'}
    //       type={"ficeeeeeeeeeee"}
    //     />
    //     </div>
    //     )
    //   }
    //   , () => { console.log("renderCardssBBBBBBBBBBBBBBB: ", renderCarros) }
    //  ,
    //   console.log("renderCardsssssssssssssssssssssssssssssasdasdadad: ", renderCarros)
    // )
    // await  console.log("renderCardsssssssssssssssssssssssssssssasdasdadad: ",renderCards)
    // return { renderCarros }
    return  "cHAKALAKA"




  }

  // renderCards = () => {
  //   this.select6Pokes
  //   <Pokecard
  //   name={this.state.selectedPokemons[0].name}
  //   type={'Fire'} />
  // }

  render() {



   let  renderCarros = this.state.selectedPokemons.map(
      (pokemon) => {
        return    <Pokecard
          name={pokemon[0].name}
          type={"ficeeeeeeeeeee"}
          number={pokemon[0].url}
          // type={this.getInfo(pokemon[0].url)}
          // this.getInfo()

        />
    //     ,
    // console.log("o que o 'pokemon ta vindo: '",pokemon[0].url)

      }
    //   ,
    // console.log(`state selectedPokemons: ${this.state.selectedPokemons}`),

    )














    //   // function letItGo() {
    // this.select6Pokes()


    const renderCards = this.state.selectedPokemons.map((pokemon) => {
      <Pokecard
        name={pokemon.name}
        type={"firefffffffffff"}
      />
    })


    // // }

    // this.getPokeInfos()
    return (

      <div className="App">
        {/* {this.select6Pokes} */}

        <button onClick={this.letItGo}>Testando let it go!</button>
        {/* {renderCards} */}
        {this.renderCarros}
        {/* {this.letItGo} */}
        {console.log("state  selectedPokemons dentro do return: ", this.state.selectedPokemons)}
        {this.state.selectedPokemons.length > 0 ?


          // this.select6Pokes()
          // < Pokecard name={this.state.selectedPokemons[0].name} type={'Fireeeee'} />
          renderCarros
          // {renderCards}

          :
          <p> Carregando......</p>
        }
        {/* <Pokecard     name={this.state.selectedPokemons[0].name}  type={'Fire'} /> */}
        <button onClick={this.generateSixNumbers}>Teste gerar aleatorios</button>
        <button onClick={this.getPokeInfos}>Get DATA</button>
        <button onClick={this.select6Pokes}>Testar pokes selecionados</button>

{renderCarros}


        {this.select6Pokes && renderCarros}
      </div>
    );
  }
}

export default App;


