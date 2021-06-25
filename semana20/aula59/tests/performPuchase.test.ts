import { performPurchase, User, } from '../src/performPurchase'


describe("Testing the performPurchase function", () => {
    let newUser: User = {
        name: "José",
        balance: 100
    }

    test("Inserting a ballance greater than purchase value must return a new user with a new ballance", () => {
        expect(performPurchase(newUser, 50)).toEqual({
            name: "José",
            balance: 50
        })
    })

    test("Insirting a ballance smaller than purchase value must return undefined", () => {
        expect(performPurchase(newUser, 150)).toEqual(undefined)
    })
    test("Insirting a ballance equal to the  purchase value must return undefined", () => {
        expect(performPurchase(newUser, 100)).not.toEqual({
            name:"José",
            balance:0
        })
    })

})
