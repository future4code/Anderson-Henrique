import { Character } from "./interfaces";


export const validadeCharacter = (char: Character): boolean => {
    if (!char.name || char.pow === undefined || char.life === undefined || char.def === undefined) {
        return false
    }
    if (char.def <= 0 || char.life <= 0 || char.pow <= 0) {
        return false
    }
    return true
}

export const performAttack = (
    attacker: Character,
    defender: Character) => {
    if (validadeCharacter(attacker) === false) {
        throw new Error("Invalid attacker Character")
    }

    if (validadeCharacter(defender) === false) {
        throw new Error("Invalid defender Character")
    }
    if (attacker.pow > defender.def) {
        defender.life -= attacker.pow - defender.def
    }

}

export const performAttackWithInvertedDependencies = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean) => {
    if (validator(attacker) === false) {
        throw new Error("Invalid attacker Character")
    }
    if (validator(defender) === false) {
        throw new Error("Invalid defender Character")
    }
    if (attacker.pow > defender.def) {
        defender.life -= attacker.pow - defender.def
    }
}

export const returnTrueMock = jest.fn(() => {
    return true
})

export const returnFalseMock = jest.fn(() => {
    return false
})
