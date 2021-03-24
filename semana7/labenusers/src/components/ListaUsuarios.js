import React from 'react'
import styled from 'styled-components'




const ListaUsuariosContainer = styled.div`
width: 60vw;
margin: auto;
margin-top: 100px;
`

const Center = styled.div`
height:60%;
margin:auto;
/* display: flex; */
flex-direction:column;
width:60%;
text-align:center
`

class ListaUsuarios extends React.Component {


    render() {

        return (
            <ListaUsuariosContainer>
                
                {this.props.usuarios > 0 ? (
                    <Center>
                    <p>Usuarios</p>
                        <ul>
                            {this.props.allUsersBlasting}
                        </ul>
                        <button onClick={this.props.voltarAddUsuario}>Voltar para adicionar usuários</button>
                        
                    </Center>
                    
                    ) : (
                    <p>Carregando...</p>
                )}
            </ListaUsuariosContainer>
        )
    }
}



export default ListaUsuarios