//Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a **n**
//Transforme a função desenvolvida no Exercício 2 em iterativa (ou seja, não use recursividade)

let sum = (number: number): number => {
    let sum:number = 0
    for (let i = 1; i <= number; i++) {
        sum += i
    }
    return sum
}