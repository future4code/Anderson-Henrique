1.


function minhaFuncao(variavel) {
    return variavel * 5
}

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))


// a. O que vai ser impresso no console?
// console.log(minhaFuncao(2)) //
"10" //2*5
// console.log(minhaFuncao(10))
"50" //10*5


// b. O que aconteceria se retirasse os dois console.log 
// e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? 
// O que apareceria no console?

"Não apareceria nada no console e não teria utilidade alguma"

2.

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

const outraFuncao = function (array) {
    for (let i = 0; i < 2; i++) {
        console.log(array[i])
    }
}

outraFuncao(arrayDeNomes)

// a. Explicite quais são as saídas impressas no console
"Darvas"
"Caio"
"A funcção passa 2 vezez pegando a 1a e 2a posicões do array, respectivamente."

// b. Se arrayDeNomes mudasse de valor para ["Amanda", "Caio"], o que vai ser impresso no console?
"Imprimiria Amanda, e depois Caio, não dando erro pois ele roda até o arrayDeNomes[1], que e pŕoprio tamanho do array"
3.
// O código abaixo mostra uma função que recebe um array e devolve outro array.
//  Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!
const metodo = (array) => {
    let arrayFinal = [];

    for (let x of array) {
        if (x % 2 === 0) {
            arrayFinal.push(x * x)
        }
    }

    return arrayFinal;
}
"Ele pega o array de números, e se o numero for par, ele insere esse n° no array, no final imprimindo este array de n°s pares."
"Nome: filtrarPares"
//   Exercícios de escrita de código
4.
// a
function myInfos() {
    console.log("Eu sou Anderson, tenho 29 anos, moro em Santa Luzia/MG e sou estudante")
}
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

// b.
let myInfosFunction = (name, age, city, isStudent) => {
    name = prompt("Diga o seu nome: ")
    age = prompt("Digite a sua idade: ")
    city = prompt("Agora digite onde você mora: ")
    isStudent = confirm("Você é um estudante, se sim, clique em ok, caso contrário, cancel")
    if (isStudent === true) {
        isStudent = "sou"

    } else {
        isStudent = "não sou"
    }
    return console.log(`Eu sou ${name}, tenho ${age} anos, moro em ${city} e ${isStudent} estudante`)
}
5.
// a.
let soma = (num1, num2) => {
    console.log(num1 + num2)
}
soma(4, 5)

// b.
let isNum1Greater = (num1, num2) => {
    if (num1 >= num2) {
        console.log(true)
    } else {
        console.log(false)
    }
}
isNum1Greater(41, 5)

// c.
let repeatTenTimes = () => {

    let message = prompt("Digite uma msg e receba ela repetida 10 vezes.... ")
    for (i = 0; i < 10; i++) {
        console.log(message)
    }
}
repeatTenTimes()

6.
const arrayZ = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// a.
let arrayLenght = arrayNums => {
    return arrayNums.length
}
console.log("Tamanho do array: ", arrayLenght(arrayZ))
// b.
let isEven = num => {
    if (num % 2 === 0) {
        console.log("Número Par")
        return Number(num)
    }

}

// c.
alert("Letra C: ")
let evenNumber = () => {
    let arrayZ = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
    let evenArray = []
    for (item of arrayZ) {
        if (item % 2 === 0) {
            evenArray.push(item)
        } else {
        }
    }
    return evenArray.length
}
console.log("Números pares dentro do array: ", evenNumber())
// d.
alert("Letra D: ")
let evenNumberNinja = () => {
    let fullArray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
    let finalEvenArray = []
    let totalEven = 0
    for (i = 0; i < fullArray.length; i++) {
        finalEvenArray[i] = isEven(fullArray[i])
        // console.log(" array no momento:")

        // console.log("haha", isEven())
        if (typeof (finalEvenArray[i]) !== "undefined") {
            totalEven++
        }
    }
    return totalEven
}
console.log("Exercicio D: quantidade de números pares :", evenNumberNinja())

// DESAFIOS
1.
1.1
let printParameter = parameter => {
    //   parameter = prompt("Digite algo que será armazenado e impresso : ")
    console.log(parameter)
}
1.2
let sum = (num1, num2) => num1 + num2

printParameter(sum(4, 3))

2.
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// a.
let arrayEvenNumbers = arrayNumber => {
    let onlyEvenNumbers = []
    for (number of arrayNumber) {
        if (number % 2 === 0) {
            onlyEvenNumbers.push(number * 2)
        }
    }
    return onlyEvenNumbers
}
console.log("Exercicio A: Numeros pares multiplicados por 2 : ")
console.log(arrayEvenNumbers(numeros))
// b

let greaterNumber = array => {
    let greater = -99999
    for (number of array) {
        if (number > greater) {
            greater = number
        }
    }
    return greater
}
console.log("Exercicio B :")
console.log("Maior número dentro do array: ", greaterNumber(numeros))
//c
let greaterIndexNumber = array => {
    let greater = -99999
    for (i = 0; i < array.length; i++) {
        if (array[i] > greater) {
            greater = array[i]
            greaterIndex = i
        }
    }
    return greaterIndex
}
console.log("Exercicio C :")
console.log("Índice do maior número dentro do Array :", greaterIndexNumber(numeros))
console.log("Maior número dentro do array : ", greaterNumber(numeros))

//d
let invertedArray = array => {
    let inverted = []
    for (i = 1; i <= array.length; i++) {
        inverted[array.length - i] = array[i - 1]
    }
    return inverted
}

console.log("Array normal :", numeros)
console.log("Array invertido :", invertedArray(numeros))