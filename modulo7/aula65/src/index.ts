//                  &&&   EXERCICIO 1   &&&


const isOneEdit = (stringA: string, stringB: string): string => {
    if (Math.abs(stringA.length - stringB.length) > 1) {
        return "It's not one edit"
    }
    let bigger: string
    if (stringA.length > stringB.length) {
        bigger = stringA
    } else {
        bigger = stringB
    }
    let checkOneEdit: number = 0
    for (let i = 0; i < bigger.length; i++) {
        if (stringA[i] !== stringB[i]) {
            checkOneEdit++
            if (checkOneEdit > 1) {
                return "It's not one edit"
            }
        }
    }
    return "One edit "
}

//                  &&&   EXERCICIO 2   &&&


const comprehensiveString = (inputString: string): string => {
    let comparativeString: string = ""
    let count: number = 1
    for (let i = 1; i <= inputString.length; i++) {
        if (inputString[i] === inputString[i - 1]) {
            count++
        }
        else {
            const letterWithRepetition: string = inputString[i - 1] + count
            comparativeString = comparativeString.concat(letterWithRepetition)
            count = 1
        }
    }
    if (comparativeString.length <= inputString.length) {
        return comparativeString
    }
    return inputString
}