// Escreva uma função recursiva que consiga imprimir todos os elementos de um array

const printArray = (numberArray: [], i: number = numberArray.length - 1) => {
    if (i >= 0) {
        console.log(`[${i}] : ${numberArray[i]}`)
        printArray(numberArray, i - 1)
    }
}