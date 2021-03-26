import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
width: 50vw;
height: 50vh;
background-color:yellow;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
border:1px solid black;
margin:auto;
/* margin-top: 100px; */
`
const ContainerInput = styled.div`
display:flex;
flex-direction:column;
height:200px;



`



class Criacao extends React.Component {

    render(){

        return( 
            <div>
                
                <Container>
                <h1>Criar Playlist</h1>
                    <ContainerInput>
                    <label for="criarPlaylist">Nome Playlist</label>
                    <input type="text" id="criarPlaylist" onChange={this.props.nomePlaylist} />
                    </ContainerInput>
                    <button onClick={this.props.criarPlaylist}>Enviar</button>
                </Container>
            </div>
        )
    }
}

export default Criacao