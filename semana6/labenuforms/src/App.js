import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import EtapaFinal from './components/EtapaFinal'
import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
/* display:flex; */
`
class App extends React.Component {

  state = {
    telaAtual: 'etapa1',
    escolaridade: "medioIncaaaaa"
  }

  segundaEtapa = () => {
    this.setState({ telaAtual: 'etapa2' })
  }
  terceiraEtapa = () => {
    this.setState({ telaAtual: 'etapa3' })
  }
  EtapaFinal = () => {
    this.setState({ telaAtual: 'etapaFinal' })
  }

  escolheEtapaCorreta = () => {

    switch (this.state.escolaridade) {
      case 'medioComp':
        return this.setState({ telaAtual: 'etapa3' })
      case 'medioInc':
        return this.setState({ telaAtual: 'etapa3' })
      case 'superiorInc':
        return  this.setState({ telaAtual: 'etapa2' })
      case 'superiorComp':
        return  this.setState({ telaAtual: 'etapa2' })
      default:
        return  this.setState({ telaAtual: 'etapa3' })
    }
    
  }

  pegaEscolaridade = event => {
    let escolaridadeEscolhida = event.target.value
    this.setState({ escolaridade:event.target.value })

    return this.setState({ escolaridade: escolaridadeEscolhida })

  }

  render() {

    const renderizacaoCorreta = () => {
      switch (this.state.telaAtual) {
        case 'etapa1':
          return <Etapa1 next={this.escolheEtapaCorreta} onChangeEscolaridade={this.pegaEscolaridade} />
        case 'etapa2':
          return <Etapa2 next={this.EtapaFinal} />
        case 'etapa3':
          return <Etapa3 next={this.EtapaFinal} />
        case 'etapaFinal':
          return <EtapaFinal />
        default:
          return <Etapa1 />
      }
    }
    return (
      <div className="App">
        <Container>
          {renderizacaoCorreta()}
        </Container>
      </div>
    )
  }
}

export default App;
