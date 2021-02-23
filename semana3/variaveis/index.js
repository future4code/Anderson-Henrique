// Exercícios de interpretação de código
1. 
a = 10
b = 10

console.log(b)// 10

b = 5
console.log(a, b) // 10 5


2.
a = 10
b = 20
c = a // c=10
b = c   // b =10
a = b   // a =10

console.log(a, b, c) // 10 10 10

// Exercícios de escrita de código
//      1.
let name
let age
console.log(typeof(name))
console.log(typeof(age))
// Como as variaveis ainda nao foram definidas, elas aparecem como undefined
name = prompt("Qual o seu nome?")
age = prompt("Última pergunta: qual a sua idade?")
console.log(typeof(name))
console.log(typeof(age))
// Os 2 retornaram string, sendo possível se achar necessário converter o valor da idade para int.
alert(`Olá ${name}, você tem ${age} anos`)


//      2.
let address = prompt("Qual o seu endereço atual?")
let sport = prompt("Você pratica algum esporte regularmente?")
let isMarried = prompt("Você e casado(a) ou solteiro(a)?")
let favoriteCollor = prompt("Qual a sua cor favorita?")
let lastName = prompt("Ok, última pergunta(última mesmo em '-' ): Qual seu sobrenome?")
alert(`Ok, Obrigado ${name} ${lastName}. Já temos muitas informações sobre você, como que sua cor favorita é ${favoriteCollor}. Nos vemos em breve =]`)


//      3.
let favoriteFoods= ["Pudim","Carne","Doce de Leite","Tortuguita","Vitamina de abacate"]
console.log(favoriteFoods)
console.log("Essas são minhas comidas preferidas: ")
// ,favoriteFoods[0],favoriteFoods[1],favoriteFoods[2],favoriteFoods[3],favoriteFoods[4],favoriteFoods[5])
console.log(favoriteFoods[0])
console.log(favoriteFoods[1])
console.log(favoriteFoods[2])
console.log(favoriteFoods[3])
console.log(favoriteFoods[4])

favoriteFoods[1] = prompt(`${name}, qual a sua comida preferida?`)
console.log(`Pensando bem, gosto desse tipo de comida também. Vou atualizar minha lista: `)
console.log(favoriteFoods[0])
console.log(favoriteFoods[1])
console.log(favoriteFoods[2])
console.log(favoriteFoods[3])
console.log(favoriteFoods[4])


//      4.
let ask1 ="Você está com fome?"
let ask2 ="Voce já trabalhou hoje?"
let ask3 ="Você está pensando em viajar este ano?"
const asks = [ask1,ask2,ask3]
let answer1= true
let answer2= true
let answer3= false
let answers  = [answer1,answer2,answer3]
console.log(ask1,answer1)
console.log(ask2,answer2)
console.log(ask3,answer3)