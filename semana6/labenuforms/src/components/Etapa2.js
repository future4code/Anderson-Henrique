import { render } from '@testing-library/react'
import React from 'react'



class Etapa2 extends React.Component{

    render() {
        return (
            <div >
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <form className="flexDiv">
                <label for="cursoFeito">5. Qual curso?</label>
                <input type="text" id = "cursoFeito" />
                <label for="unidadeEnsino">6. Qual a unidade de ensino?</label>
                <input  type="text" id="unidadeEnsino"  />

                </form>
                <button onClick={this.props.next}>Finalizar</button>

            </div>
        )
    }
}

export default Etapa2