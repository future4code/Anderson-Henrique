import React, { Component } from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorImput: ""
	}
	onChangeComentario = (event) => {
		this.setState({	valorImput: event.target.value})
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				onChange={this.onChangeComentario}
				value={this.state.valorImput}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
