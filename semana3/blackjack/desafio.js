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

const splice = function splice(userCards,computerCards){
   userCards.splice(0,2)
   computerCards.splice(0,2)
   sumUser =0
   sumComputer= 0
   sumUser = userCards[0].valor + userCards[1].valor
   sumComputer = computerCards[0].valor + computerCards[1].valor
   console.log(`Usuário - cartas: ${userCards[0].texto},${userCards[1].texto}, soma: ${sumUser}`)
   console.log(`Computador - cartas: ${computerCards[0].texto},${computerCards[1].texto}, soma: ${sumComputer}`)
}





let newCards = []
let userCards = []
let computerCards = []

for (let j = 0; j < 20; j++) {
   // newCards.push(comprarCarta())

   userCards.push(comprarCarta())
   computerCards.push(comprarCarta())
}
let finalCards = `${userCards[0].texto} e ${userCards[1].texto}`
let finalComputerCards = `${computerCards[0].texto} e ${computerCards[1].texto}`
console.log("user", userCards)
console.log("Final cards: ", finalCards)

// console.log(userCards) 
// console.log(computerCards)       //*******Descobrir porque está sendo gerada 2 userCards diferentes...... */
let rounds = 1
let sumUser = 0
let sumComputer = 0
console.log("Bem vindo ao jogo de BlackJack!")
let isTrue = confirm("Quer iniciar uma nova rodada?")
console.log(isTrue)
if (isTrue == true) {
   console.log("Valor 0: ",userCards[0].valor)
   console.log("Valor 1: ",userCards[1].valor)
   sumUser = userCards[0].valor + userCards[1].valor
   sumComputer = computerCards[0].valor + computerCards[1].valor
   
   // console.log("Pre-splice: ", userCards)
  
   while(sumComputer>21 || sumUser>21){
      splice(userCards,computerCards)
   }
   console.log("O jogo comeca!")
   finalCards = `${userCards[0].texto} e ${userCards[1].texto}`
   console.log(`Usuário - cartas: ${userCards[0].texto},${userCards[1].texto}, soma: ${sumUser}`)
   console.log(`Computador - cartas: ${computerCards[0].texto}.`)
   // console.log("Pos-splice: ", userCards)
   userCards.splice(0, 2)
   computerCards.splice(0, 2)
   let buyCard = confirm(
      `Suas cartas são ${finalCards}. A carta revelada do computador é ${computerCards[0].texto}.` +
      "\n" +  // \n faz pular a linha
      "Deseja comprar mais uma carta? "
   )

   while (buyCard === true) {

      sumUser += userCards[1].valor  //PORQUE?????? , não seria usercards[0]????
      
      userCards.splice(0, 1)
      rounds++
      for (let i = rounds; i <= rounds; i++) {
         finalCards += " e " + userCards[0].texto
      }
      // console.log(`${finalCards}`)
      if (sumUser < 21) {
         buyCard = confirm(
            `Suas cartas são ${finalCards}. A carta revelada do computador é ${computerCards[0].texto}.` +
            "\n" +  // \n faz pular a linha
            "Deseja comprar mais uma carta?"
            + `Soma do jogador:${sumUser}`

         )
         let isFalse = true // paradoxal, não? '-'
      } else if (sumUser === 21) {
         console.log(`Suas cartas são ${finalCards}., Sua pontuação é ${sumUser}`)
         console.log(`As cartas do computador são ${finalComputerCards}. A Pontuação do computador é ${sumComputer}`)
         // console.log(`Suas cartas são ${finalCards}. A carta revelada do computador é ${computerCards[0].texto}.` +
         "\n" +  // \n faz pular a linha
            // + `Soma do jogador:${sumUser}`)
            console.log("Parabéns, você venceu a máquina!")
         alert("Parabéns, você venceu a máquina!")
         buyCard = false

      } else {
         console.log(`Suas cartas são ${finalCards}., Sua pontuação é ${sumUser}`)
         console.log(`As cartas do computador sao ${finalComputerCards}. A Pontuação do computador é ${sumComputer}`)
         console.log("Você perdeu!")
         alert(`Você perdeu! Você fez ${sumUser} pontos`)
         buyCard = false
         
      }
   }
   let isFalse = true // paradoxal, não? '-'
   if (isFalse ) {
      console.log("entrou?")
// if(sumComputer>sumUser){
   
// }
      while (sumComputer < sumUser || sumComputer < 21) {
        
         sumComputer += computerCards[1].valor
         computerCards.splice(0, 1)
         rounds++
         console.log("Soma do PC: ", sumComputer)
         for (let k = rounds; k <= rounds; k++) {
            finalComputerCards += " e " + computerCards[0].texto
            console.log("Final cards: ", finalComputerCards)
            console.log(computerCards)
            console.log(computerCards[1].texto)
         }
      }
   }

} else {
   console.log("O jogo acabou")

}

if (sumUser > sumComputer || sumComputer > 21) {
   console.log(`Suas cartas são ${finalCards}., Sua pontuação é ${sumUser}`)
   console.log(`As cartas do computador sao ${finalComputerCards}. A Pontuação do computador é ${sumComputer}`)
   console.log("Vitória do usuário!")

} else if (sumUser < sumComputer) {
   console.log(`Suas cartas são ${finalCards}., Sua pontuação é ${sumUser}`)
   console.log(`As cartas do computador sao ${finalComputerCards}. A Pontuação do computador é ${sumComputer}`)
   console.log("Vitória do computador!")

} else {
   console.log(`Suas cartas são ${finalCards}., Sua pontuação é ${sumUser}`)
   console.log(`As cartas do computador sao ${finalComputerCards}. A Pontuação do computador é ${sumComputer}`)
   console.log("Empate!")
}

