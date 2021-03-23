import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 500px;
  
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
  text-align:right;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [{
      id: Date.now(),
      texto: "",
      completa: false
    },
    {
      id: 1,
      texto: 'Trabalhar no projeto X',
      completa: false
    }],

    inputValue: '',
    filtro: 'pendentes',
    completa: false

  }

 

  componentDidMount() {

    const tarefasEmString = localStorage.getItem("tarefas")
    const tarefasEmObjeto = JSON.parse(tarefasEmString)
    this.setState({ tarefas: tarefasEmObjeto })
  };

  componentDidUpdate() {

    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const NovasTarefas = [...this.state.tarefas, novaTarefa]
    this.setState({ tarefas: NovasTarefas })
  }


  selectCompletaTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const tarefaSelecionada = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return tarefaSelecionada
      }
      else {
        return tarefa
      }
    }
    )
  
    this.setState({ tarefas: novaListaDeTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value })
    this.setState({ filtro: event.target.value })
  }

  render() {


    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>

          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}>
                {tarefa.texto}
                {this.state.filtro === 'pendentes' ?
                  <button onClick={() => this.selectCompletaTarefa(tarefa.id)}>Terminar!</button>
                  :
                  <button onClick={() => this.selectCompletaTarefa(tarefa.id)}>Readicionar!</button>}
                <button onClick={this.removerElemento}>Remover!</button>
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
