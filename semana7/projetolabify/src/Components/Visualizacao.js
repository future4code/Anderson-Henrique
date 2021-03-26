import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


// const Container = styled.div`
// width:100vw;
// height:20vh;
// border-bottom: 1px solid black;
// display:flex;
// justify-content:center;
// align-items:center;
// color: orange;
// background-color: slateblue


// `



const ContainerVizualizacao = styled.div`
background-color:crimson;
width:400px;
height:50px;
text-align:center;
justify-content:center;
align-items:center;
border:1px solid black;
display:flex;
margin: auto;

`
const ContainerLi = styled.li`
display:flex;
justify-content:space-between;
width:100%;
padding: 0 24px;
`
class Vizualizacao extends React.Component {

    render() {



        return ( 
            <div>
                {/* <h1>PLAYLISTS</h1> */}
                <ContainerVizualizacao>
                <ContainerLi>{this.props.nomePlaylist} <button onClick={this.props.deletar}>Deletar</button></ContainerLi>
                </ContainerVizualizacao>
            </div>
        )
    }
}


export default Vizualizacao