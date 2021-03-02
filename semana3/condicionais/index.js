// Exercícios de interpretação de código
1.
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
    console.log("Passou no teste.")
} else {
    console.log("Não passou no teste.")
}
// O código pede um número de entrada e testa se o mesmo é par ou impar. Se for par, ele passa no teste,
//  se não for, ele recebe um aviso que nao passou no teste

2.
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
    case "Maçã":
        preco = 2.25
        break;
    case "Uva":
        preco = 0.30
        break;
    case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
    default:
        preco = 5
        break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a. Para que serve o código acima?
// O código é feito para cada tipo de fruta que a pessoa escolher ter um preco estipulado, 
// basicamente um inicio de programaçao de caixa ou calculadora do valor final

// b. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
"O preço da fruta Maçã é R$ 2.25"

// c. Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console
//  se retirássemos o break que está logo acima do default 
// (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
"Ela continuaria mudando o valor do preco até o último elemento, que tem o valor de 5, imprimindo: "
"O preço da fruta Pêra é R$ 5"

3.
const numero = Number(prompt("Digite o primeiro número."))

if (numero > 0) {
    console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// a. O que a primeira linha está fazendo?
"Convertendo o valor que a pessoa digitar de String para Number"
// b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
"Mensagem com o numero >0: "

"Esse número passou no teste", "e depois exibiria uma mensagem de erro"

"Numero >=0 não só exibiria a mensagem de erro."
// c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
"Sim, pois a variável mensagem está dentro de um if ( de seu próprio escopo), podendo só ser usada dentro da mesma. "
"Se fosse uma variável global, não haveria problemas"

// Exercícios de escrita de código
4.
let canDrive = Number(prompt("Qual a sua idade?"))
if (canDrive >= 18) {
    console.log("Você já e maior de idade, então você pode dirigir!")
} else {
    console.log("Você ainda não completou 18 anos, então ainda não é possivel tirar carteira de motorista!")
}
5.
let shift = prompt("Em qual turno você estuda? Digite M para matutino, V para Vespertino ou N para Noturno")
if (shift === "M") {
    console.log("Bom dia!")
}
else if (shift === "V") {
    console.log("Boa tarde!")
}
else if (shift === "N") {
    console.log("Boa Noite")
} else {
    console.log("Você digitou a letra errada!!!")
}

6.
let shift = prompt("Em qual turno você estuda? Digite M para matutino, V para Vespertino ou N para Noturno")
switch (shift) {
    case "M" || "Matiurno":
        console.log("Bom dia!")
        break
    case "V" || "Vespertino":
        console.log("Boa tarde!")
        break
    case "N" || "Noturno":
        console.log("Boa noite!")
        break
    default:
        console.log("Você digitou a letra errada!!!")
}

7.
let movieGenre = prompt("Qual é o gênero de filme que você gostaria de assistir? Fantasia ou outro?").toUpperCase()
let price = prompt("Qual o valor do ingresso? Digite apenas números...")
if (movieGenre === "FANTASIA" && price <= 15) {
    console.log("Bom filme!!!")
} else {
    console.log("Escolha outro filme :(")
}


// DESAFIOS
// DESAFIO 1

let movieGenre1 = prompt("Qual é o gênero de filme que você gostaria de assistir? Fantasia ou outro?").toUpperCase()
let price1 = prompt("Qual o valor do ingresso? Digite apenas números...")
if (movieGenre1 === "FANTASIA" && price1 <= 15) {
    let snack = prompt("Qual snack você vai comprar para este filme?")
    console.log(`Bom filme com seu(sua) ${snack}`)
} else {
    console.log("Escolha outro filme :(")
}


// DESAFIO 2


let name = prompt("Digite seu nome completo: ")
let typeOfGame = prompt("Digite IN se o jogo for internacinal e DO se o jogo for doméstico: ").toUpperCase()
let stage = prompt("Digite SF se o jogo for uma semi-final, DT se for uma decisão de 3° lugar, ou FI se for a final: ").toUpperCase()
let category = Number(prompt("Digite a categoria do seu ingresso, sendo 1 , 2 , 3  ou 4:"))
let quantity = Math.floor(Number(prompt("Para terminar, digite quantos ingressos você ira comprar:")))
let ticketPrice

switch (stage) {
    case "SF":
        switch (category) {
            case 1:
                ticketPrice = 1320
                break
            case 2:
                ticketPrice = 880
                break
            case 3:
                ticketPrice = 550
                break
            case 4:
                ticketPrice = 220
                break
        }
        break
    case "DT":
        switch (category) {
            case 1:
                ticketPrice = 660
                break
            case 2:
                ticketPrice = 440
                break
            case 3:
                ticketPrice = 220
                break
            case 4:
                ticketPrice = 170
                break
        }
        break

    case "FI":
        switch (category) {
            case 1:
                ticketPrice = 1980
                break
            case 2:
                ticketPrice = 1320
                break
            case 3:
                ticketPrice = 880
                break
            case 4:
                ticketPrice = 330
                break
        }
        break
}

if (typeOfGame === "IN") {
    ticketPrice /= 4.1
    typeOfGame = "Internacional"
} else if (typeOfGame === "DO") {
    typeOfGame = "Doméstico"
}
if (stage === "SF") {
    stage = "Semi-Final"
} else if (stage === "FI") {
    stage = "Final"
} else if (stage = "DT") {
    stage = "Disputa pelo 3° lugar"

}

console.log(`---Dados da compra--- `)
console.log(`Nome do cliente:  ${name}`)
console.log(`Tipo do jogo:  ${typeOfGame} `)
console.log(`Etapa do jogo:  ${stage} `)
console.log(`Categoria:  ${category} `)
console.log(`Quantidade de Ingressos:  ${quantity} ingressos `)
console.log(`---Valores---"`)
if (typeOfGame === "Doméstico") {
    console.log(`Valor do ingresso:  R$${ticketPrice}`)
    console.log(`Valor total: R$${ticketPrice * quantity}`)
} else {
    console.log(`Valor do ingresso:  $${ticketPrice.toFixed(2)}`)
    console.log(`Valor total: $${(ticketPrice * quantity).toFixed(2)}`)
}









