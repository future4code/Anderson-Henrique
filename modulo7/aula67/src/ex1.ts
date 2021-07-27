//Escreva uma função recursiva que:
// a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente

const printRecursiveNumber = (number: number) => {
    if (number > 0) {
        printRecursiveNumber(number - 1)
        console.log(Math.floor(number))
    }
}

// b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente

const printNumber = (num: number) => {
    console.log(Math.floor(num))
    if (num > 1) {
        printNumber(num - 1)
    }
}