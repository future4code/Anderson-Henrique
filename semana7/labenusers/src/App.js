import axios from 'axios';
import React from 'react'
import styled from 'styled-components';
import './App.css';
import AddUsuario from './components/AddUsuario'
import ListaUsuarios from './components/ListaUsuarios'

const Span = styled.span`
color: red;
`
const Li = styled.li`
display:flex;
justify-content: space-between;
`

class App extends React.Component {

  state = {
    usuarios: [],
    telaAtual: "addUsuario",
    name: "",
    email: ""
  }

  componentDidMount() {
    this.getAllUsers()
  }


  getEmail = (event) => {
    this.setState({ email: event.target.value })

  }

  getName = event => {
    this.setState({ name: event.target.value })
  }


  createNewUser = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    };
    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body, {
      headers: {
        Authorization: "anderson-oliveira-cruz"
      }
    }
    ).then((res) => {
      console.log("state usuarios: ", this.state.usuarios)
      this.setState({ name: '',email: '' })
      this.getAllUsers()

    })
      .catch((err) => {
        console.log("ERROR: ", err.response.data)
      });
  };


  getAllUsers = () => {
    axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "anderson-oliveira-cruz"
        }
      }
    )
      .then((res) => {
        this.setState({ usuarios: res.data });
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  deleteUser = (evt) => {
    const usuarioDeletado = evt.target.className
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioDeletado}`,
      {
        headers: {
          Authorization: "anderson-oliveira-cruz"
        }
      }
    )
      .then(
        this.getAllUsers(),
      )
      .catch((err) => {
        console.log("ERRO no del: ", err.response.data)
      }
      )
  }

  allUsersList = (evt) => {
    this.setState({ telaAtual: "ListaUsuarios" })
    evt.preventDefault()
  }
  voltarAddUsuario = () => {
    this.setState({ telaAtual: "addUsuario" })
  }


  render() {
    let allUsers = this.state.usuarios.map((usuario) => {
      return (<li key={usuario.id} id={usuario.id}>{usuario.name}     <span className={usuario.id} onClick={this.deleteUser}>X</span></li>)
    })
      switch (this.state.telaAtual) {
        case 'addUsuario':
          return (
            <div>
              <AddUsuario name={this.getName} email={this.getEmail} createNewUser={this.createNewUser} listaUsers={this.allUsersList} />
            </div>)
        case 'ListaUsuarios':
          return (
            <div>
              <ListaUsuarios allUsersBlasting={allUsers}
                usuarios={this.state.usuarios.length}
                voltarAddUsuario={this.voltarAddUsuario} />
            </div>
          )
      }
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
