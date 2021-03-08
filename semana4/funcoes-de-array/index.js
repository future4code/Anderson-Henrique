let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas) {
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    /// AQUI VEM A IMPLEMENTAÇÃO
    despesas.forEach((despesas) => {
        divDespesas.innerHTML += `<div>valor: despesas R$${despesas.valor} | tipo: ${despesas.tipo} | descrição: ${despesas.descricao}</div>`
    })
}


// SEGUNDO 
function imprimirExtrato() {
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO

    console.log(arrDespesas)

    
    arrDespesas.forEach(arrDespesas => {
        // gastoTotal += arrDespesas.valor
        if (arrDespesas.tipo == "alimentação") {
            gastoAlimentacao += arrDespesas.valor
        } else if (arrDespesas.tipo === "utilidades") {
            gastoUtilidades += arrDespesas.valor
        } else {
            gastoViagem += arrDespesas.valor
        }

    })

/////////////////////////// "DESAFIO 3"///////////////////////////
    function totalGasto(total, proximo) {
        return total + proximo.valor
    }
    if (arrDespesas.length !== 0) {
        gastoTotal = arrDespesas.reduce(totalGasto, 0)
    }

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa() {
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if (validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)) {
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)

        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""


        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas() {
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)
                    // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO

    if (tipoFiltro !== "" && valorMin > 0 && valorMin < valorMax) {
        if (tipoFiltro === "todos") {
            imprimirDespesas(arrDespesas)
        } else {
            let despesasFiltradas = arrDespesas.filter((despesasss) => {

                if (
                    despesasss.tipo === tipoFiltro && valorMax >= despesasss.valor && valorMin <= despesasss.valor
                ) {
                    return despesasss
                }
            })

            imprimirDespesas(despesasFiltradas)
        }
    }
    else {
        alert("Preenchimento incorreto, preencha todos os dados corretamente, todos obrigatórios.")
    }
}
/////////////////////////// "DESAFIO 2"///////////////////////////

function organizarDecrescente() {
    arrDespesas.sort((a, b) => {
        if (a.valor > b.valor) {
            return -1
        } else {
            return 1
        }
    })
    imprimirDespesas(arrDespesas)
}



// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor) {
    if (valor.value.length > 0 && parseInt(valor.value) > 0) {
        return true
    }
    return false
}

function validarTipo(tipo) {
    if (tipo.value !== "") {
        return true
    }
    return false
}

function validarDescricao(texto) {
    if (texto.value.replace(/ /g, "").length !== 0) {
        return true
    }
    return false
}