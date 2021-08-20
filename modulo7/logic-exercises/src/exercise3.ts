// Escreva uma função que recebe uma string que pode conter somente os seguintes caracteres: '(',  ')',  '[',  ']',  '{',  '}' , e retorna true para uma string válida, e false para uma inválida.

const checaParenteses = (parenteses: string): boolean => {
    if (parenteses.length % 2 === 1) {
        return false
    }
    if (parenteses === "") {
        return false
    }
    for (let i = 0; i < parenteses.length; i+ 2) {

        if (parenteses[i] != "(" && parenteses[i] != "{" && parenteses[i] != "[") {
            return false
        }
        if (parenteses[i] === "(" && parenteses[i + 1] !== ")") {
            console.log('1')
            return false
        } else if (parenteses[i] === "[" && (parenteses[i + 1]) !== "]") {
            console.log('12')
            return false
        } else if (parenteses[i] === "{" && (parenteses[i + 1]) !== "}") {
            console.log('123')
            return false
        }
        // i++
    }
    return true
}

