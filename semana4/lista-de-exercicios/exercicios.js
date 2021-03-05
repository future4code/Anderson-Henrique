//Exercício 1

function inverteArray(array) {
   // implemente sua lógica aqui
   return array.reverse()
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   // implemente sua lógica aqui
   let soPares = array.filter((array) => {
      if (array % 2 === 0) {
         return array
      }
   })
   let elevadoADois = soPares.map(soPares => {
      return soPares * soPares
   })
   return elevadoADois
}
let arr = [3, 4, 5, 6, 6, 6, 1, 2]

// retornaNumerosParesElevadosADois(arr)

//Exercício 3

function retornaNumerosPares(array) {
   // implemente sua lógica aqui
   let soPares = array.filter((array) => {
      if (array % 2 === 0) {
         // array = array * array
         return array
      }
   })
   // console.log("so pares, testando questao 3: ", soPares)
   return soPares


   // })

}
//Exercício 4

function retornaMaiorNumero(array) {

   // implemente sua lógica aqui

   let maior = array.reduce((maiorNumero, proximo) => {
      if (maiorNumero > proximo) {
         return maiorNumero
      } else {
         return proximo
      }
   })
   return maior
}
retornaMaiorNumero([1, 3, 4, 2])
//Exercício 5

function retornaQuantidadeElementos(array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui

}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   let j = 0
   let pares = []
   for (i = 0; i < n; i++) {
      pares.push(j)
      j += 2
   }
   return pares
}

// Exercício 8

function checaTriangulo(a, b, c) {
   // implemente sua lógica aqui
   if (a === b && a === c) {
      return "Equilátero"
   } else if (a === b || b === c || a === c) {
      return "Isósceles"
   } else if (a !== b !== c) {
      return "Escaleno"
   }
}
// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let resultado = {
      maiorNumero: 0,
      maiorDivisivelporMenor: false,
      diferenca: 0
   }
   if (num1 > num2) {
      resultado.maiorNumero = num1
      resultado.diferenca = num2 - num1
      if (num1 % num2 === 0) {
         resultado.maiorDivisivelporMenor = true
      } else {
         resultado.maiorDivisivelporMenor = false
      }
   }
   else {
      resultado.maiorNumero = num2
      resultado.diferenca = num2 - num1
      if (num2 % num1 === 0) {
         resultado.maiorDivisivelporMenor = true
      } else {
         resultado.maiorDivisivelporMenor = false
      }
   }
   return resultado
}
// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
   array.sort((a, b) => {
      if (a > b) {
         return 1
      } else {
         return -1
      }
   })
   let i = array.length
   let maiorMenor = [array[i - 2], array[1]]
   return maiorMenor
}
segundoMaiorEMenor([1, 4, 5, 6, 111, 44, 123, 515])

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
   array.sort((a, b) => {
      return a > b
   })
   return array
}
ordenaArray([1, 4, 5, 6, 111, 44, 123, 515])

// Exercício 12

// function filmeFavorito() {
function filmeFavorito(nome, ano, diretor, atores) {
   // implemente sua lógica aqui
   console.log(nome, ano, diretor, atores)

   let favorito = {
      nome: nome,
      ano: ano,
      diretor: diretor,
      atores: atores
   }
   console.log("objeto favorito: ", favorito)
   return favorito
}
filmeFavorito("Anderson", 1992, "Akino Mito", ["Acaca", "Muzamba", "mustafá"])

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   let objeto = {
      largura: lado1,
      altura: lado2,
      perimetro: (2 * (lado1 + lado2)),
      area: (lado1 * lado2)
   }
   return objeto
}
// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
   pessoa.nome = "ANÔNIMO"
   return pessoa
}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   let maiores = arrayDePessoas.filter((arrayDePessoas) => {
      return arrayDePessoas.idade >= 20
   })
   return maiores
}
// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   let menores = arrayDePessoas.filter((arrayDePessoas) => {
      return arrayDePessoas.idade < 20
   })
   return menores
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
   let multiplicadoPor2 = array.map((array) => {
      return array * 2
   })
   return multiplicadoPor2
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
   let mult2String = array.map(array => array * 2).toString()
   console.log("numero com string do array: ", mult2String)
   return mult2String
   // let multiplicadoPor2 = array.map( (array) => {
   //    return array *2})
   //    // .toString()
   // let multiplica2s
   // //  = multiplicadoPor2.forEach((multiplicadoPor2) => {
   // //    multiplicadoPor2.toString()
   // // } )
   //    // multiplicadoPor2S.push("uhasudhhuads")
   //    console.log("numero com string do array: ", multiplicadoPor2.toString()     )

   // return multiplicadoPor2S
}

multiplicaArrayPor2S([1, 4, 5, 6, 111, 44, 123, 515])

// Exercício 17, letra C
function verificaParidade(array) {
   // implemente sua lógica aqui
   let parImpar = array.map((array) => {
      if (array % 2 === 0) {
         return `${array} é par`
      } else {
         return `${array} é impar`
      }
   })
   console.log("Testando parImpar: ",parImpar)
   return parImpar
}

// Exercício 18

// const pessoas = [
//    { nome: "Paula", idade: 12, altura: 1.8 },
//    { nome: "João", idade: 20, altura: 1.3 },
//    { nome: "Pedro", idade: 15, altura: 1.9 },
//    { nome: "Luciano", idade: 22, altura: 1.8 },
//    { nome: "Artur", idade: 10, altura: 1.2 },
//    { nome: "Soter", idade: 70, altura: 1.9 }
// ]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui

   const pessoas = [
      { nome: "Paula", idade: 12, altura: 1.8 },
      { nome: "João", idade: 20, altura: 1.3 },
      { nome: "Pedro", idade: 15, altura: 1.9 },
      { nome: "Luciano", idade: 22, altura: 1.8 },
      { nome: "Artur", idade: 10, altura: 1.2 },
      { nome: "Soter", idade: 70, altura: 1.9 }
   ]
   let permitidos = pessoas.filter( pessoas => {
      return (pessoas.idade>14 && pessoas.idade<60 && pessoas.altura>= 1.5 )
   })
   return permitidos
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   const pessoas = [
      { nome: "Paula", idade: 12, altura: 1.8 },
      { nome: "João", idade: 20, altura: 1.3 },
      { nome: "Pedro", idade: 15, altura: 1.9 },
      { nome: "Luciano", idade: 22, altura: 1.8 },
      { nome: "Artur", idade: 10, altura: 1.2 },
      { nome: "Soter", idade: 70, altura: 1.9 }
   ]
   let barrados = pessoas.filter( pessoas => {
      return (pessoas.idade<=14 || pessoas.idade>=60 || pessoas.altura< 1.5 )
   })
   return barrados
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
 ]

function retornaEmailConsulta() {
   // implemente sua lógica aqui
}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   // implemente sua lógica aqui
}