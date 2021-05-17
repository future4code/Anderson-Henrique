var colors = require('colors')




const operation = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch (operation) {
    case 'add':
        console.log(`Resposta: ${num1 + num2}`.rainbow)
        break;
    case 'sub':
        console.log(`Resposta: ${num1 - num2}`.bgBlue)
        break;
    case 'mult':
        console.log(`Resposta: ${num1 * num2}`.bgGreen)
        break;
    case 'div':
        console.log(`Resposta: ${num1 / num2}`.bgWhite)
        break
    default:
        console.log('Digite corretamente o nome das operacoes: add, sub, mult ou div '.rainbow)
}
