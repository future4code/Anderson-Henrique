import React from 'react'
import styled from 'styled-components'




const Container = styled.div`

background-color:red;
border: 1px solid black;
width: 80vw;
display:flex;
height:50vh;
margin:auto;
margin-top: 100px;
`
const Center = styled.div`
height:60%;
margin:auto;
display: flex;
flex-direction:column;

`

class AddUsuario extends React.Component {

    render() {

        return (
            <Container>
                <Center>
                    <label for="nome">Nome</label>
                    <input onChange={this.props.name} type="text"  placeholder = "Nome"/>
                    <label for="email">E-mail</label>
                    <input onChange={this.props.email} type="text" placeholder="E-mail"/>
                    <button onClick={this.props.createNewUser}>Enviar</button>
                    <button onClick={this.props.listaUsers} >Ir para Lista de usuarios</button>
                </Center>

            </Container>)
    }

}



export default AddUsuario