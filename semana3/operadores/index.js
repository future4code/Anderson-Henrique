// Exercícios de interpretação de código

// 1.Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
// a.  false
resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
// b.  false
resultado = !resultado && (bool1 || bool1) // 
console.log("c. ", resultado)
// c.  true
console.log("e. ", typeof resultado)
// e.  boolean

// 2. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
let array1
console.log('a. ', array1)
// a.  undefined
array1 = null
console.log('b. ', array1)
// b. null
array1 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array1.length)
// c. 11
let i = 0
console.log('d. ', array1[i])
// d. undefined
array1[i + 1] = 19
console.log('e. ', array1)
// e. array1(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const valor = array1[i + 6]
console.log('f. ', valor)
// f.  9

// Exercícios de escrita de código


// 1.Faça um programa que:
// a. Pergunte a idade do usuário
// b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga
// c. **Imprima na tela** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
// d. **Imprima na tela** a diferença de idade (não tem problema se sair um número negativo)
let yourAge = prompt("Olá, qual é a sua idade")
let friendAge = prompt("E qual é a idade do seu melhor amigo?")
// console.log(typeof(yourAge))
// console.log(typeof(friendAge))
yourAge = Number(yourAge)
friendAge = Number(friendAge)
// console.log(typeof(yourAge))
// console.log(typeof(friendAge))
let isOlder = prompt("Sua idade é maior do que a idade do seu melhor amigo? Responda como 'true' ou 'false'")
let difference = yourAge - friendAge
alert(`Diferenca entre suas idades: ${difference}` )




// 2.Faça um programa que:
// a. Peça ao usuário que insira um número par.
// b. Imprima na tela o resto da divisão desse número por 2.
// c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

let even = prompt("Insira um número par")
even %= 2
alert(`O resto da divisão do seu número dividido por 2 é :  ${even}`)
// todo numero par dividido por 2 o resultado será 0. Quando um número ímpar é colocado no lugar, o resto é sempre 1.



// 3.Faça um programa, seguindo os passos:
// a. Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
// b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// c. Imprima o array na tela
// d. Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
// e. Remova da lista o item de índice que o usuário escolheu.
// f. Imprima o array na tela


let array = []
alert("Preciso que me diga 3 tarefas que você precisa realizar")
let task1 = prompt("Digite a 1° tarefa:")
let task2 = prompt("Digite a 2° tarefa:")
let task3 = prompt("Digite a 3° tarefa:")
array = [task1, task2, task3]
alert(`Sua lista de tarefas: ${array[0]},${array[1]},${array[2]}`)
let removeTask = prompt("digite uma tarefa que você ja realizou para atualizar sua lista. Digite 0 para 1° tarefa, 1 para 2° e 3 para a 3°")
array.splice(removeTask, 1)
alert(`Sua lista de tarefas atualizada: ${array[0]},${array[1]}`)
// 4.Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
// O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!
let username = prompt("Olá, digite seu nome:")
let email = prompt("Agora, digite o seu email:")
alert(`O email ${email} foi cadastrado com sucesso. Seja bem vindo(a), ${username}`)




// DESAFIOS


//  1.
// Graus Fahrenheit(°F) para Kelvin(K)
// (KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15

// Graus Celsius(°C) para Graus Fahrenheit (°F)
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32

// a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
let resultKelvin = (77 - 32) * 5 / 9 + 273.15
console.log(resultKelvin)
// b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
let resultCelsius = (77 - 32) * 5 / 9
console.log(resultCelsius)
// c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
let resultFanrenheit = 30 * 9 / 5 + 32
console.log("Resultado em Fanrenheit: ", resultFanrenheit)
resultKelvin = (resultFanrenheit - 32) * 5 / 9 + 273.15
console.log("Resultado em Kelvin: ", resultKelvin)
// d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
let userValue = prompt("Digite o valor em °C que você gostaria de ver convertido para °F e para K: ")
resultFanrenheit = userValue * 9 / 5 + 32
console.log(resultFanrenheit)
resultKelvin = (resultFanrenheit - 32) * 5 / 9 + 273.15
console.log(resultKelvin)

// 2.
// Sabe - se que o quilowatt - hora de energia custa R$0.05.
// Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
// a.Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt - hora;
let elecBill = 280 * 0.05
console.log("Valor a ser pago para um consumo de 280 Kw: ", elecBill)
// b.Altere o programa para receber mais um valor: a porcentagem de desconto.
// Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15 % de desconto.
elecBill *= 0.85
console.log("Valor a ser pago para um consumo de 280 Kw com desconto de 15%: ", elecBill)


// 3.
// a. Procure uma forma de converter libra (lb) para quilograma (kg) 
// e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma:
//  "20lb equivalem a X kg"
let lbValue = 20
let lbToKg = lbValue * 0.453592
console.log(`20lb equivalem a ${lbToKg.toFixed(3)}kg`)
//b. Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg.
//  Imprima  a resposta no console da seguinte forma: "10.5oz equivalem a X kg"
let ozValue = 10.5
let ozToKg = ozValue * 0.0283495
console.log (`10.5oz equivalem a ${ozToKg.toFixed(3)}kg`)
// c.Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m.
//  Imprima  a resposta no console da seguinte forma: 
// "100mi equivalem a X m "
let miles= 100
let milesToMeters = miles * 1609.34
console.log (`100mi equivalem a ${milesToMeters}m`)

// d. Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. 
// Imprima  a resposta no console da seguinte forma: 
// "50ft equivalem a X m"
let ft = 50
let ftToMeters= ft * 0.3048
console.log (`50ft equivalem a ${ftToMeters.toFixed(2)}m`)

// e.Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. 
// Imprima  a resposta no console da seguinte forma: 
// "103.56gal equivalem a X l"
let gallons = 103.56
let gallonsToLiters = gallons *3.78541
console.log (`103.56gal equivalem a ${gallonsToLiters.toFixed(2)}l`)

// f.Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro.
//  Imprima  a resposta no console da seguinte forma: 
// "450 xic equivalem a X l"
let xic = 450
let xicToLiters = xic *0.24
console.log (`450 xic equivalem a ${xicToLiters}l`)

// g.g. Escolha ao menos um dos itens anteriores e modifique o programa para que ele
//  peça ao usuário o valor da unidade original antes de converter. 


// Letra B modificada: 
ozValue= prompt("Indique um valor em onças (oz) que será convertido para kg ")

ozToKg = ozValue * 0.0283495
console.log (`${ozValue} equivalem a ${ozToKg.toFixed(3)}kg`)


