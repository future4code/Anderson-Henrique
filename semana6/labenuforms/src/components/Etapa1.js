import { render } from '@testing-library/react'
import React from 'react'



class Etapa1 extends React.Component{

    // state = {
    //     escolaridade : ""
    // }



    // pegaEscolaridade = event => {
    //     console.log("Evento: ",event.target.value)
    //     let escolaridadeEscolhida = event.target.value
    //     this.setState({escolaridade : escolaridadeEscolhida})
    //     console.log("Escolaridade escolhida: ",this.escolaridade)
        
          
    //       }


    render() {
        return (
            <div >
                <form className="flexDiv">
                <h1>ETAPA 1 - DADOS GERAIS </h1>
                <label for="nome">1.Qual o seu nome?</label>
                <input type="text" id="nome" placeholder="Digite seu nome"/>
               
                <label for="idade">1.Qual a sua idadae?</label>
                <input type="text" id="idade" placeholder="Digite sua idade"/ >

                <label for="email">1.Qual o seu email?</label>
                <input type="text" id="email" placeholder="Digite seu email"/ >

                <label for="escolaridade">Qual a sua escolaridade?</label>
                <select name="escolaridade" id ="escolaridade" onChange={this.props.onChangeEscolaridade}>
                    <option value="medioInc"   selected >Ensino Médio Incompleto</option>
                    <option value="medioComp"   >Ensino Médio Completo</option>
                    <option value="superiorInc" >Ensino Superior Incompleto</option>
                    <option value="superiorComp">Ensino Superior Completo</option>
                </select>
                </form>

                <button onClick={this.props.next}>Continuar</button>
            </div>
        )
    }
}

export default Etapa1