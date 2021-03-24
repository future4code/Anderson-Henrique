import React from 'react'



class InformacaoUsuario extends React.Component {
    render() {


        return( <div>
            <div>
            <p>Usuário: {this.props.name}</p>
            <p>Email do usuário:{this.props.email} </p>
            <button onClick={this.props.deleteUser}>Deletar usuário</button>
            <button onClick={this.props.telaUsuario}>Voltar para a tela de usuários</button>
            </div>
        </div>)
    }
}
export default InformacaoUsuario