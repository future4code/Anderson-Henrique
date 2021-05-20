var colors = require('colors')



// Exercicio 1
// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?

//depois de digitar o 'node  "nomeDoArquivo" , digitamos o argumento passado dentro do arquivo,
// No arquivo, definimos por exemplo: const name = process.argV[2], e assim por diante


// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

const name = process.argv[2]
const age = process.argv[3]


if (!name && !age) {
    console.log('Nenhum parametro foi passado. Por favor, passe 2 parametros, de nome e de idade.'.underline.red)
} else if (!name || !age) {

    if (age && typeof (age) !== 'number') {
        console.log('Por favor, passe um número como 2nd parametro'.green)
    } else {
        console.log("Apenas um parametro foi informado, tente novamente preenchendo nome e idade corretamente".bgMagenta)
    }
}
else {
    console.log(`Olá, ${name} ! Voce tem ${age} anos`.inverse)


    // c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

    let numberAge = Number(age)

    console.log(`Olá, ${name} ! Você tem ${numberAge} anos. Em sete anos você terá ${numberAge + 7} anos`.rainbow)
}


