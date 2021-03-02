// Exercícios de interpretação de código
// 1.O que o código abaixo está fazendo? Qual o resultado impresso no console?
let valor = 0
for (let i = 0; i < 5; i++) {
    valor += i
}
console.log(valor)

//Está imprimindo no console o valor 4. Ele começa com i=0 , e roda 4 vezes até chegar neste valor

2.
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
        console.log(numero)
    }
}

// a. O que vai ser impresso no console?
// "19,21,23,25,27,30"     Sendo 1 em cada linha, pois ele passa por todos os numeros do array , e sempre 
// que encontra um maior que 18, ele imprime este número 


// b. Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? 
// Se sim, o que poderia ser usado para fazer isso?
// Sim, poderia colocar um let index= 0 e depois do console.log(numero) colocar i++, informando quais 
// índices estão sendo impressos

// DESAFIO 1
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal) {
    let linha = ""
    for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
        linha += "0"
    }
    console.log(linha)
    quantidadeAtual++
}

// Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ? 

// Ele entraria no loop do while com linha com valor "".Entao entraria no for, no qual rodaria 1 vez na 1° rodada,e aumentaria para as próximas,
// 2,3 e 4 respectivamente, entao rodando 10 vezes
"0"
"00"
"000"
"0000"

// Exercícios de escrita de código

3.
// a.
let numbers = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (number of numbers) {
    console.log(number)
}
// b
for (number of numbers) {
    console.log("Resto do array dividido por 10: ", number % 10)
}
// c
let evenNumber = []
for (number of numbers) {
    if (number % 2 === 0) {
        evenNumber.push(number)
    }
}
console.log("Numeros pares: ", evenNumber)

// d
for (let i = 0; i < numbers.length; i++) {
    console.log(`O elemento do índex ${i} é o número ${numbers[i]}`)
}


// e
let larger = 0
let smaller = 9999

for (number of numbers) {
    if (number < smaller) {
        smaller = number
    }
    if (number > larger) {
        larger = number
    }
}
console.log(`Maior elemento do array: ${larger}`)
console.log(`Menor elemento do array: ${smaller}`)




// DESAFIOS
// DESAFIO 1
let secretNumber = Number(prompt("Usuário, digite um numero entre 0 a 100 para outra adivinhar: "))
while (secretNumber < 0 || secretNumber > 100) {
    secretNumber = Number(prompt("Número incorreto, digite um valor entre 0 e 100: "))
}
    console.log("Vamos jogar!!!")
    let attemps = 0
    let shot = Number(prompt("Agora usuário 2, tente adivinhar o número entre 0 a 100 escolhido anteriormente: "))
    while (shot !== secretNumber) {
        if (shot > secretNumber) {
            shot = Number(prompt("Errrrrrrou. O número é menor, tente novamente "))
            attemps++
        } else  {
            shot = Number(prompt("Errrrrrrou. O número é maior, tente novamente "))
            attemps++
        } 
    }
            attemps++
            console.log("Tentativas: ", attemps)
            console.log("Acertou miseravi!!!")
            console.log(`O número de tentativas foi: ${attemps} `)


            

// DESAFIO 2


let secretNumber = Number(Math.floor(Math.random()*100))
    console.log("Vamos jogar!!!")
    let attemps = 0
    let shot = Number(prompt("Tente adivinhar o número entre 0 a 100 escolhido aleatoriamente: "))
    while (shot !== secretNumber) {
        if (shot > secretNumber) {
            shot = Number(prompt("Errrrrrrou. O número é menor, tente novamente "))
            attemps++
        } else  {
            shot = Number(prompt("Errrrrrrou. O número é maior, tente novamente "))
            attemps++
        } 
    }
            attemps++
            console.log("Tentativas: ", attemps)
            console.log("Acertou miseravi!!!")
            console.log(`O número de tentativas foi: ${attemps} `)
