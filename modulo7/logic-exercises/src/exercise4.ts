// Escreva uma função que receba um array de strings e retorne o maior prefixo comum entre **todas** as strings.

// O prefixo é definido pelo começo até uma posição qualquer de uma string. Por exemplo, na string `"arvore"`, `"a"` seria um prefixo, e `"arvor"` também.

// Caso não exista um prefixo comum, retorne uma string vazia (`""`)

let maiorPrefixoComum = (array : Array<string>) : string => {
    let menorString:number = 999
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < menorString) {
            menorString = array[i].length
        }
    }
    let prefixoComum:Array<string> = []
    for (let j = 0; j < array.length - 1; j++) {

        for (let k = 0; k < menorString; k++) {
            if (j === 0) {
                if (array[j][k] === array[j + 1][k]) {
                    prefixoComum.push(array[j][k])
                } else {
                    k = menorString - 1
                    menorString = prefixoComum.length
                }
            } else {
                if (prefixoComum[k] !== array[j + 1][k]) {
                    prefixoComum = prefixoComum.slice(0, k)
                    menorString = prefixoComum.length
                    k = menorString - 1
                }
            }
        }
        if (prefixoComum.length === 0) {
            return ""
        }
        else {
            return (prefixoComum.join(''))
        }
    }
}
maiorPrefixoComum(["flor", "flatus", "frufru"])