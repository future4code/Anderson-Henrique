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

//2
//a    
//Entradas: um array de números, saidas: maior número, menor número e a media dos números dentro do array. 

//b
//numerosOrdenados:array de números: number[] 
//soma,maior,menor,media: número

function obterEstatisticas(numeros:number[])  {

    const numerosOrdenados:number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }
  type stats = {
      maior:number,
      menor:number,
      media:number
  }  

    const estatisticas:stats = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

const teste = obterEstatisticas([1,2,7,76,77,11,10,1,2,21])
console.log(teste)

//c

// type amostraDeDados = {
//     numeros: number[],
//     obterEstatisticas: ()
// }

//3

type post = {
    autor:string,
    texto:string
}


const posts:post[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

console.table(posts)