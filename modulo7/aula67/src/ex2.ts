//Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a **n**

const sumRecursive = (number:number, sum:number = 0):number => {
    if (number > 0) {
        return sumRecursive(number - 1, sum + number)
    } else {
        return sum
    }
}