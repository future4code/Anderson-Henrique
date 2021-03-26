import React from 'react'
import axios from 'axios'
import styled from 'styled-components'



const ContainerVizualizacao = styled.div`
background-color:crimson;
width:50vw;
height:100px;
text-align:center;
justify-content:center;
align-items:center;
border:1px solid black;
display:flex;


`

class Vizualizacao extends React.Component {

    render() {



        return ( 
            <div>
                {/* <h1>PLAYLISTS</h1> */}
                <ContainerVizualizacao>
                <li>{this.props.nomePlaylist} <button onClick={this.props.deletar}>Deletar</button></li>
                </ContainerVizualizacao>
            </div>
        )
    }
}


export default Vizualizacao