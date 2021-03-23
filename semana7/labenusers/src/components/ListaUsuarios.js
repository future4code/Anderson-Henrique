import React from 'react'


class ListaUsuarios extends React.Component {



    render() {

        return (
            <div>
                <p>Usuarios</p>
                {this.props.usuarios> 0 ? (
                    <ul>
                        <li>{this.props.name}</li>
                    </ul>
                ) : (
                    <p>Carregando...</p>
                )}
                </div>
         )
         }
        }



export default ListaUsuarios