import { performAttack, performAttackWithInvertedDependencies, returnFalseMock, returnTrueMock, validadeCharacter } from "../src"
import { Character } from "../src/interfaces"

describe('Testing functions actions ', () => {

    test('Testing a empty name char must return false', () => {
        let char: Character = {
            name: "",
            def: 123,
            life: 100,
            pow: 98
        }
        expect(validadeCharacter(char)).toBe(false)
    })

    test('Testing a char with zero life must return false', () => {
        let char: Character = {
            name: "Tulipaz",
            def: 123,
            life: 0,
            pow: 98
        }
        expect(validadeCharacter(char)).toBe(false)
    })

    test('Testing a char with zero pow must return false', () => {
        let char: Character = {
            name: "Antrax",
            def: 123,
            life: 100,
            pow: 0
        }
        expect(validadeCharacter(char)).toBe(false)
    })

    test('Testing a char with zero def must return false', () => {
        let char: Character = {
            name: "jorgin",
            def: 0,
            life: 100,
            pow: 98
        }
        expect(validadeCharacter(char)).toBe(false)
    })

    test('Testing a char with negative def value must return false', () => {
        let char: Character = {
            name: "jorgin",
            def: -20,
            life: 100,
            pow: 98
        }
        expect(validadeCharacter(char)).toBe(false)
    })

    test('Testing a char with at leat one negative value and must return false', () => {
        let char: Character = {
            name: "jorgin",
            def: 55,
            life: -100,
            pow: 98
        }
        expect(validadeCharacter(char)).toBe(false)
    })

    test('Testing a char with valid informations and need a true return', () => {
        let char: Character = {
            name: "jorgin",
            def: 55,
            life: 100,
            pow: 98
        }
        expect(validadeCharacter(char)).toBe(true)
    })

    test('Should perform attack', () => {
        const attacker: Character = {
            name: "Shazan",
            def: 299,
            pow: 1500,
            life: 1200
        }

        const defender: Character = {
            name: "Shellmon",
            def: 1300,
            pow: 200,
            life: 3000
        }
        performAttackWithInvertedDependencies(attacker, defender, returnTrueMock as any)
        expect(defender.life).toEqual(2800)
        expect(returnTrueMock).toHaveBeenCalled()
        expect(returnTrueMock).toHaveBeenCalledTimes(2)
        expect(returnTrueMock).toHaveReturnedTimes(2)
    })

    test('Testing return invalid character error', () => {

        const attacker: Character = {
            name: "",
            def: 299,
            pow: 1500,
            life: 1200
        }

        const defender: Character = {
            name: "Shellmon",
            def: 1300,
            pow: 200,
            life: 3000
        }

        try {
            performAttackWithInvertedDependencies(attacker, defender, returnFalseMock)
        } catch (error) {
            expect(error.message).toBe("Invalid attacker Character")
            expect(returnFalseMock).toHaveBeenCalled()
            expect(returnFalseMock).toHaveBeenCalledTimes(1)
            expect(returnFalseMock).toHaveReturnedTimes(1)
        }
    })
})