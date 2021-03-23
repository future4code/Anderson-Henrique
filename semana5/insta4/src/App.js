import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from "styled-components";

class App extends React.Component {
  state = {
    pessoas: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: 'https://picsum.photos/200/150'

      },
      {
        nomeUsuario: 'Adriano',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/140'
      },
      {
        nomeUsuario: 'Charlie',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/120'
      },
    ],

    valorImputFotoPost: "",
    valorImputNomeUsuario: "",
    valorImputFotoUsuario: ""

  }

  novoPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorImputNomeUsuario,
      fotoUsuario: this.state.valorImputFotoUsuario,
      fotoPost: this.state.valorImputFotoPost
    }
    const postsAtualizados = [...this.state.pessoas, novoPost]
    this.setState({ pessoas: postsAtualizados })
    this.setState({ valorImputFotoPost: "", valorImputFotoUsuario: "", valorImputNomeUsuario: "" })
  }

  onChangeImputFotoPost = (event) => {
    this.setState({ valorImputFotoPost: event.target.value })
  }
  onChangeImputFotoUsuario = event => {
    this.setState({ valorImputFotoUsuario: event.target.value })
  }
  onChangeImputNomeUsuario = event => {
    this.setState({ valorImputNomeUsuario: event.target.value })
  }
  render() {

    const postComponentes = this.state.pessoas.map((post) => {
      return (<Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost} />
      )
    })

    return (
      <div className={'app-container'}>
        <input value={this.state.valorImputNomeUsuario} onChange={this.onChangeImputNomeUsuario} placeholder={"Nome"} />
        <input value={this.state.valorImputFotoUsuario} onChange={this.onChangeImputFotoUsuario} placeholder={"Endereco da foto do usuario"} />
        <input value={this.state.valorImputFotoPost} onChange={this.onChangeImputFotoPost} placeholder={"Endereco da foto do post"} />
        <button onClick={this.novoPost}>Adicionar</button>

        {postComponentes}
      </div>
    );
  }
}

export default App;
