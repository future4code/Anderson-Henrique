import { render } from '@testing-library/react'
import React from 'react'



class Etapa3 extends React.Component {

    render() {
        return (
            <div >
                <form className="flexDiv">
                    <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h1>
                    <label for="motivo">5.Por quê você não terminou um curso de graduação?</label>
                    <input type="text" id="motivo" />
                    <label for="cursoComplementar">6. Você fez algum curso complementar?</label>
                    <select name="escolaridade" id="cursoComplementar">
                        <option value="cursoTecnico" selected >Curso técnico</option>
                        <option value="cursoIngles"   >Ensino Médio Completo</option>
                        <option value="naoFezCurso" >Curso de Inglês</option>
                        <option value="SuperiorComp">Não fiz nenhum curso complementar</option>
                    </select>
                </form>
                <button onClick={this.props.next}>Finalizar</button>

            </div>
        )
    }
}

export default Etapa3