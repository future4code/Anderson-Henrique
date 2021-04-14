import React from 'react'
import { useHistory, useParams } from 'react-router'
import { useProtectedPage } from '../hooks/useProtectedPage'

const TripsDetailPage = (props) => {
useProtectedPage()
const history = useHistory()
const params = useParams()
console.log("params: ",params)



return(
    <div>
        <p>TripsDetailPage</p>
        <div><span>Nome</span> <p>{props.name}</p></div>
        <div><span>Descricao</span> <p></p></div>
        <div><span>Planeta</span> <p></p></div>
        <div><span>Duracao</span> <p></p></div>
        <div><span>Data</span> <p></p></div>
    </div>
)

}

export default TripsDetailPage

// case "detalhes":
//           return (<Detalhes
//             valor={this.state.carroSelecionado.price}
//             metodoPagamento={this.state.carroSelecionado.paymentMethod}
//             prazo={this.state.carroSelecionado.shipping}
//             modelo={this.state.carroSelecionado.Modelo}
//             imagem={this.state.carroSelecionado.imagen}
//             descricao={this.state.carroSelecionado.description}
//             paginaHome={this.paginaHome}
//             paginaCompras={this.paginaCompras}
//             paginvaVendas={this.paginaVendas}
//             id={this.state.carroClicadoDetalhe}
//             pagina={this.paginaHome}

//           />)