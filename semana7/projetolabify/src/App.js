import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import Visualizacao from './Components/Visualizacao'
import Criacao from './Components/Criacao'
import React from 'react';
// import Vizualizacao from './Components/Visualizacao';

const Container = styled.div`
width:100vw;
height:20vh;
border-bottom: 1px solid black;
display:flex;
justify-content:center;
align-items:center;
color: orange;
background-color: slateblue


`






class App extends React.Component {

  state = {
    nomePlaylist: [],
    listaPlaylists: [],
    paginaRenderizada: "criacao"
  }



  componentDidMount() {
    this.getAllPlaylists()
  }


  paginaVizualizacao = () => {
    this.setState({ paginaRenderizada: 'vizualicacao' })
  }

paginaCriacao =() => {
  this.setState({paginaRenderizada: 'criacao'})
}



  getAllPlaylists = async () => {
    try {
      const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists "
        , {
          headers: {
            Authorization: "anderson-oliveira-cruz"
          }
        },
      )
      this.setState({ listaPlaylists: response.data.result.list })
      console.log("RESPONSE: ", response.data.result.list)
      console.log("State lista de Playlists: ", this.state.listaPlaylists)
    } catch (error) {
      console.log("erro: ", error)
    }
  }




  nomePlaylist = (event) => {
    console.log("event.targt: ", event.target.value)
    this.setState({ nomePlaylist: event.target.value },
      () => {
        console.log("testando o state plylist com callback: ", this.nomePlaylist)
      },
      console.log("testando o state plylist: ", this.nomePlaylist)
    )
  }


  criarPlaylist = async () => {

    const body = {
      name: this.state.nomePlaylist
    }
    console.log("BODY!!!!", body)
if(window.confirm("Tem certeza que quer criar esta playlist?")){


  try {

    // console.log("BODY!!!!")

    const response = await axios.post(" https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists "
      // // let body
      , body
      , {
        headers: {
          Authorization: "anderson-oliveira-cruz"
        }
      }

    )
    this.getAllPlaylists()
    alert("Playlist criada!")
  }
  catch (error) {
    console.log(error)
  }

}
else{
  alert("Operação cancelada")
}


    
  }




  deletarPlaylist = async (id) => {
    if (window.confirm("Você realmente quer deletar este usuário? ")){
      try {
        let response = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
          , {
            headers: {
              Authorization: "anderson-oliveira-cruz"
            }
          },
          // console.log("Response no delete: ", response),
          alert("Usuário deletado"),
          this.getAllPlaylists()

        )
      } catch (error) {
        console.log("Erro: ", error)
      }
    }
    else{
      alert("Operação cancelada")
    }
    
  }




  render() {

    let visualizarPlaylists = this.state.listaPlaylists.map((playlist) => {

      //  { console.log("testando se entra no map: ",playlist.name)}

      return (
        <li><Visualizacao
          nomePlaylist={playlist.name}
          key={playlist.id}
          deletar={() => this.deletarPlaylist(playlist.id)}
        />
          {/* <button>Deletar</button> */}
        </li>
      )

    })


    const renderPage = () => {
      if (this.state.paginaRenderizada === "criacao") {
        return (
          <Criacao
            nomePlaylist={this.nomePlaylist}
            criarPlaylist={this.criarPlaylist} />
        )
      } else if (this.state.paginaRenderizada === 'vizualicacao') {
        return (
          <div>
            <h1> Playlists</h1>
            {visualizarPlaylists}

          </div>
        )
      }
    }







    console.log("log na lista de playlists: ", this.state.listaPlaylists)

    return (
      <div className="App">


{this.state.paginaRenderizada==='criacao' ?
        
        <Container>
        <button onClick={this.paginaVizualizacao} >Vizualizar Playlists</button>

        </Container>
:

<Container>

<button onClick={this.paginaCriacao}>Voltar para página Criar Playlist</button>

</Container>
       
       
      }

        {renderPage()}

        {/* <Criacao 
       nomePlaylist={this.nomePlaylist}
       criarPlaylist={this.criarPlaylist}/> */}
        {/* {console.log("playlists: ",{visualizarPlaylists})} */}
        {/* <Visualizacao/> */}

        {/* {visualizarPlaylists} */}
        
      </div>
    );
  }
}

export default App;
