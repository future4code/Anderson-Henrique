import axios from 'axios';
import React from 'react'
import './App.css';
import AddUsuario from './components/AddUsuario'
import ListaUsuarios from './components/ListaUsuarios'

class App extends React.Component {

  state = {
    usuarios: [],
    telaAtual: "addUsuario",
    name: "",
    email: ""
  }

  componentDidMount() {
    this.getAllUsers()
    // .then()
    console.log("USUARIOS: ",this.state.usuarios)
  }


  getEmail = (event) => {
    this.setState({ email: event.target.value })
    // console.log(event.target.value)

  }

  getName = event => {
    this.setState({ name: event.target.value })
    // console.log(event.target.value)
  }
  createNewUser = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    }
    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body, {
      headers: {
        Authorization: "anderson-oliveira-cruz"
      }
    }
    )
      .then(() => {
        console.log(this.state.usuarios)
        this.setState({ name: "", email: "" })
        this.getAllUsers()
      })
      .catch((err) => {
        console.log("ERRO: ", err.response.data)
      })
  }

  getAllUsers = () => {
    axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "anderson-oliveira-cruz"
      }
    }
    )
      .then((res) => {
        console.log("dentro do getAllUsers no Res..... ",res.data)
        console.log("USUARIOS: ",this.state.usuarios)

        this.setState({usuarios: res.data})
    
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }



  render() {
    const allUsers = this.state.usuarios.map((usuario) => {
      <li>{usuario.name} <span>X (delete)</span></li>
      console.log("Usuario dentro do AllUsers: ",usuario)
      console.log("Lengh do usuarios: ",usuario.name)
    })

    // const 

    return (
      <div className="App">
        {/* {this.state.telaAtual === 'aXddUsuario' ?
          <AddUsuario name={this.getName} email={this.getEmail} createNewUser={this.createNewUser} />
          : 
          <ListaUsuarios name={allUsers}/>
          // <div>
          //   <p>Usuarios</p>
          //   <ul>{allUsers}</ul> haha </div>
            }
 */}





      {this.state.usuarios.length > 0 ? (
          <ul>{allUsers} haha</ul>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    );
  }
}

export default App;
