/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let carta = comprarCarta();
// Sorteia uma carta. Por exemplo, o rei de ouros

console.log(carta.texto)
// imprime o texto da carta. Nesse caso: "K♦️"

console.log(carta.valor)
// imprime o valor da carta (um número). Nesse caso: 10)
let newCards = []
for (let i = 0; i < 20; i++) {
   newCards.push(comprarCarta())
}
let sumUser = 0
let userCards = []
let computerCards = []
let sumComputer = 0

// // const newGame = function newGame() {
console.log("Bem vindo ao jogo de BlackJack!")
let isTrue = confirm("Quer iniciar uma nova rodada?")
console.log(isTrue)
if (isTrue === true || sumUser > 21 || sumComputer > 21) {
   console.log("O jogo comeca!")
   sumUser = newCards[0].valor + newCards[1].valor
   sumComputer = newCards[2].valor + newCards[3].valor
   userCards.push(newCards[0].texto)
   userCards.push(newCards[1].texto)
   computerCards.push(newCards[2].texto)
   computerCards.push(newCards[3].texto)
   sumComputer = newCards[2].valor + newCards[3].valor
   console.log(`Usuário - cartas: ${userCards[0]},${userCards[1]}`)
   console.log(`Computador - cartas: ${computerCards[0]},${computerCards[1]}`)
   if (sumUser > sumComputer) {
      console.log("Vitória do usuário!")

   } else if (sumUser < sumComputer) {
      console.log("Vitória do computador!")

   } else {
      console.log("Empate!")
   }

} else {
   console.log("O jogo acabou")
}
// }