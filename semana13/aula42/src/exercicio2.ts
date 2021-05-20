//2
//a    
//Entradas: um array de números, saidas: maior número, menor número e a media dos números dentro do array. 

//b
//numerosOrdenados:array de números: number[] 
//soma,maior,menor,media: número

function obterEstatisticas(numeros:number[])  {

    const numerosOrdenados:number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }
  type stats = {
      maior:number,
      menor:number,
      media:number
  }  

    const estatisticas:stats = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

const teste = obterEstatisticas([1,2,7,76,77,11,10,1,2,21])
console.log(teste)

//c

// type amostraDeDados = {
//     numeros: number[],
//     obterEstatisticas: ()
// }

