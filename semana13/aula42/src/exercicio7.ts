type produto = {
    nome: string,
    preco: number,
    classificacao: string,
    comDesconto?: number
}


let imprimeProdutos = function (produtos: produto[]) {
    let valorComDesconto: number
     produtos.map((produto) => {
        if (produto.classificacao === 'verao') {
            valorComDesconto = (1 - 0.05) * produto.preco
        } else if (produto.classificacao === 'inverno') {
            valorComDesconto = (1 - 0.10) * produto.preco
        } else if (produto.classificacao === 'banho') {
            valorComDesconto = (1 - 0.04) * produto.preco
        } else if (produto.classificacao === 'íntimas') {
            valorComDesconto = (1 - 0.07) * produto.preco
        }
        produto.comDesconto = valorComDesconto
        console.log('produto: ', produto)
    })
    console.log('produto Final: ',produtos)
}

const listaComProdutos:produto[] = [
    {
nome:'calcao de banho',
preco: 53,
classificacao:'banho',
    }
    ,{
        nome:'chapeu de verao',
        preco:9.99,
        classificacao:'verao'
    },{
        nome:'Cueca boxex',
        preco:12.41,
        classificacao:'íntimas'
    },{
        nome:'Casaco de pele',
        preco:121.51,
        classificacao:'inverno'
    }
]

imprimeProdutos(listaComProdutos)