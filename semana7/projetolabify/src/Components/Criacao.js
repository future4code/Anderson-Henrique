import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
width: 50vw;
height: 50vh;
background-color:yellow;
display:flex;
flex-direction:column;


`




class Criacao extends React.Component {

    render(){

        return( 
            <div>
                <h1>Criar Playlist</h1>
                <Container>
                    <label for="criarPlaylist">Nome Playlist</label>
                    <input type="text" id="criarPlaylist" onChange={this.props.nomePlaylist} />
                    <button onClick={this.props.criarPlaylist}>Enviar</button>
                </Container>
            </div>
        )
    }
}

export default Criacao