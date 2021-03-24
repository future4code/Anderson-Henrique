import axios from 'axios';
import React from 'react'
import styled from 'styled-components';
import './App.css';
import AddUsuario from './components/AddUsuario'
import ListaUsuarios from './components/ListaUsuarios'
import InformacaoUsuario from './components/InformacaoUsuario'
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


//Funcs do AXIOS GET/POST/DELETE

  createNewUser = async () => {

    const body = {
      name: this.state.name,
      email: this.state.email
    };
    try {
      const response =await axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body, {
        headers: {
          Authorization: "anderson-oliveira-cruz"
        }
      }
      )
      // .then((res) => {
        // console.log("state usuarios: ", this.state.usuarios)
        alert("Usuário criado!")
        console.log("RESPONSE USANDO ASYNC AWAIT : ",response)
        this.setState({ name: '', email: '' })
        this.getAllUsers()
  
      // })
    }catch(error){
        alert("Erro, tente novamente!")
        console.log(error.response)
        // console.log("ERROR: ", err.response.data)
      }
      // );
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

  deleteUser = async (id) => {
    console.log("ID para teste da 3a pagina!!!!! : ",id)

    if (window.confirm("Você tem certeza que quer deletar este usuário?")) {
      // const usuarioDeletado = evt.target.id
      
      try{
        let response = axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "anderson-oliveira-cruz"
          }
        }
      )
        alert("Usuario deletado!")
        this.getAllUsers()
     }
     catch(error) {
          alert("ERRO! Usuario não deletado!Tente Novamente", error.response.data)
          // console.log("ERRO no del: ", err.response.data)
        }
        
    }
    
  }
  detalharUsuario = async (id) => {
    console.log("ID: ",id)

try{
  const response =  await axios.get(
    `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
{
      headers: {
        Authorization: "anderson-oliveira-cruz"
      }
    }
  )

  console.log("RES: ", response.data)
      this.setState({name: response.data.name, email: response.data.email, id: response.data.id})
      console.log("Name: ",response.data.name)
      console.log("Email: ",response.data.email)
      this.setState({ telaAtual: "InformacaoUsuarios" })
} 
    catch(error){
      console.log("Log do erro: ", error)
    }
  }


  //Setar STATES!!!!


  allUsersList = (evt) => {
    this.setState({ telaAtual: "ListaUsuarios" })
    evt.preventDefault()
  }
  voltarAddUsuario = () => {
    this.setState({ telaAtual: "addUsuario" })
  }


teste = () => {
  console.log("NAME: ",this.state.name)
  console.log("EMAIL: ",this.state.email)
  console.log("ID: ",this.state.id)
  console.log("usuario:    ",this.state.usuario)
}


  render() {
    let allUsers = this.state.usuarios.map((usuario) => {
      return (<Li key={usuario.id} id={usuario.id}>{usuario.name}
        <button onClick={() => this.detalharUsuario(usuario.id)}>Detalhes</button>
        <Span id={usuario.id} onClick={() => this.deleteUser(usuario.id)}>X</Span></Li>)
    })
    
    switch (this.state.telaAtual) {
      case 'addUsuario':
        return (
          <div>
            <AddUsuario name={this.getName} email={this.getEmail} createNewUser={this.createNewUser}
              listaUsers={this.allUsersList} />
          </div>)
      case 'ListaUsuarios':
        return (
          <div>
            <ListaUsuarios allUsersBlasting={allUsers}
              usuarios={this.state.usuarios.length}
              voltarAddUsuario={this.voltarAddUsuario} />
          </div>
        )
      case 'InformacaoUsuarios':
        return (
          <div>
            <InformacaoUsuario name={this.state.name} email={this.state.email} 
            deleteUser={() => this.deleteUser(this.state.id)} telaUsuario={this.allUsersList}
            teste={this.teste} />
          </div>)
      default:
        return (
          <div>
            <AddUsuario name={this.getName} email={this.getEmail} createNewUser={this.createNewUser} listaUsers={this.allUsersList} />
          </div>)
    }
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
