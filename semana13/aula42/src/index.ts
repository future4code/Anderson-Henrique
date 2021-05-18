//Exercicio 1 
//a
let minhaString:string = 'Minha String'
// minhaString = 3   Retorna um erro , pois a partir do momento que se atribuiu o type do minhaString, ele se torna imutável

//b
let meuNumero:number | string =137 //Para aceitar strings alem de números, usamos o  | ('pipe') , para aceitar um ou outro 

//c  + d


enum CORES {
    VERMELHO = 'vermelho',
    LARANJA  ='laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    ANIL = 'anil',
    VIOLETA = 'violeta'

}



type pessoa = {
    nome:string,
    idade:number,
    corFavorita:string
}

let  pessoa1:pessoa = {
    nome:'Anderson',
    idade:29,
    corFavorita:CORES.AZUL
}
let  pessoa2:pessoa = {
    nome:'Yoda',
    idade:900,
    corFavorita:CORES.VERDE
}
let  pessoa3:pessoa = {
    nome:'Gandalf',
    idade:3021,
    corFavorita:CORES.ANIL
}
let  pessoa4:pessoa = {
    nome:'Meliodas',
    idade:3000,
    corFavorita:CORES.AMARELO
}


console.log(pessoa1)