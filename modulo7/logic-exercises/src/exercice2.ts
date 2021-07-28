const localizaCaracter = (palavra, letra) => {
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === letra) {
            return i + 1
        }
    }
    return -1
}

localizaCaracter("palavra", "a")