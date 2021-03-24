import React from 'react'



class InformacaoUsuario extends React.Component {
    render() {


        return( <div>
            <div>
            <p>Usuário: {this.props.name}</p>
            <p>Email do usuário:{this.props.email} </p>
            <button onClick={this.props.deleteUser}>Deletar usuário</button>
            <button onClick={this.props.telaUsuario}>Voltar para a tela de usuários</button>
            <button onClick={this.props.teste}>{console.log("haha")} button pra testar as coisas</button>
            {/* <button onClick={this.props.editarUsuario}>Editar nome e email</button> */}
            </div>
        </div>)
    }
}
export default InformacaoUsuario