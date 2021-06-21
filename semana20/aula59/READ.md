## Exercício 1
Para começar, você deve criar um programa que verifique se um usuário pode fazer uma compra ou não. Ele deve receber um objeto user (com nome e saldo) e um valor de compra. Caso o saldo seja maior ou igual ao valor de compra você deve retornar um `novo usuário` (com o mesmo nome e o saldo atualizado depois da compra). Caso contrário, retorne  `undefined`
        
```
function performPurchase(user: User, value: number): User | undefined 
```
*a. Crie uma interface para representar o usuário*

```
interface User {
    name: string
    balance: number
}
```

*b. Implemente  a função*

```
function performPurchase(user: User, value: number): User | undefined {

    if (user.balance > value) {
        return {
            ...user,
            balance: user.balance - value
        }
    }
    return undefined
}
```

## Exercícío 2

Agora vamos criar testes para essa função. Lembre-se de criar o arquivo com o padrão <nome>.test.ts na pasta  tests

*a. Faça um teste com um usuário com o saldo maior do que o valor de compra*


```
test("Inserting a ballance greater than purchase value must return a new user with a new ballance", () => {
        expect(performPurchase(newUser, 50)).toEqual({
            name: "José",
            balance: 50
        })
    })

```

*b. Faça um teste com um usuário com o saldo igual ao valor de compra*

```
test("Insirting a ballance equal to the  purchase value must return undefined", () => {
        expect(performPurchase(newUser, 100)).not.toEqual({
            name:"José",
            balance:0
        })
    })
```

*c. Faça um teste com um usuário com o saldo menor do que o valor de compra*

```
 test("Insirting a ballance smaller than purchase value must return undefined", () => {
        expect(performPurchase(newUser, 150)).toEqual(undefined)
    })
```