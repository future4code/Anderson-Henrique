## Exercício 1
O tema da aula de hoje vai ser um joguinho bem simples de luta. Em um exercício mais para frente, vamos implementar uma função que faça um personagem "bater" no outro. Antes disso, precisamos  fazer uma função que vai validar as informações de cada personagem. Ele deve possuir 4 parâmetros: nome, vida, defesa e força. 

A força representa o quanto o personagem pode tirar de vida do outro. A defesa é um valor que representa o quanto o outro personagem consegue se defender, a conta é simples: quando um personagem ataca  o outro, ele perde o valor `(força - defesa)` da sua vida. Todos os personagens começam com a vida `1500` e, ao chegar no `0`, eles morrem.

*a. Crie uma interface para representar os personagens*

```
export interface Character {
    name:string
    life:number,
    def:number,
    pow:number
}
```

*b. Crie uma função `validateCharacter` que valide as informações de um personagem (devolvendo `true` se for válida ou `false` caso contrário). Nenhuma das propriedades pode ser vazia. Em relação a vida, defesa e força, elas só podem possuir valores maiores que 0.*
```

export const validadeCharacter = (char: Character): boolean => {
    if (!char.name || char.pow === undefined || char.life === undefined || char.def === undefined) {
        return false
    }
    if (char.def <= 0 || char.life <= 0 || char.pow <= 0) {
        return false
    }
    return true
} 
```


## Exercícío 2

Agora, vamos realizar o teste unitário da função `validateCharacter`

*a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, `""`.* 

```
test('Testing a empty name char must return false',() => {
        let char:Character ={
            name:"",
            def:123,
            life:100,
            pow:98
        }
        expect(validadeCharacter(char)).toBe(false)
    })
```

*b. Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero.* 
```
test('Testing a char with zero life must return false',() => {
        let char:Character ={
            name:"Tulipaz",
            def:123,
            life:0,
            pow:98
        }
        expect(validadeCharacter(char)).toBe(false)
    })
```

*c. Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero.* 

```
  test('Testing a char with zero pow must return false',() => {
        let char:Character ={
            name:"Antrax",
            def:123,
            life:100,
            pow:0
        }
        expect(validadeCharacter(char)).toBe(false)
    })
```
*d. Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero.* 
 
```
test('Testing a char with zero def must return false',() => {
        let char:Character ={
            name:"jorgin",
            def:0,
            life:100,
            pow:98
        }
        expect(validadeCharacter(char)).toBe(false)
    })
```

*e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo*
  
```
test('Testing a char with at leat one negative value and must return false',() => {
        let char:Character ={
            name:"jorgin",
            def:55,
            life:-100,
            pow:98
        }
        expect(validadeCharacter(char)).toBe(false)
    })
```

f*. Crie um teste que verifique o comportamento da função com um personagem com as informações validas*

```
  test('Testing a char with valid informations and need a true return',() => {
        let char:Character ={
            name:"jorgin",
            def:55,
            life:100,
            pow:98
        }
        expect(validadeCharacter(char)).toBe(true)
    })
```

## Exercício 3

Agora, vamos implementar a função (`performAttack`) que represente o ataque de um personagem a outro. Ela deve receber dois parâmetros: `attacker` (atancante) e `defender` (defensor) que são do tipo `Character`. 

O comportamento dela deve ser:

- Caso algum dos personagens esteja inválido, a função deve indicar um erro: `Invalid Character`
- Ela deve retirar do `defender` o valor final do ataque (`(força do attacker) - (defesa do defender)`)
- Caso a defesa do `defender` seja maior do que a força do `attacker`, nenhuma vida do `defender` deve ser retirada
- Você deve fazer duas implementações dessas funções

*a. Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação*


```
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
```

*b. Implemente a função utilizando inversão de dependências*

```
export const performAttackWithInvertedDependencies = (
    attacker: Character,
     defender: Character,
      validator: (input:Character) => boolean) => {
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
```



*c. Explique, com as suas palavras, as diferenças entre as duas implementações*


Na inversão de dependências, você não necessitou chamar uma função externa para validar uma parte da função, deixando assim, a checagem isolada de outros arquivos. Na 1a função, foi necessário a construção de algo externo que será usada em casos reais, não sendo considerado assim, 'testes' propriamente ditos.

## Exercício 4

Antes de começar a criar os testes dessas funções, vamos nos relemebrar dos Mocks. 

Eles são muito importantes quando vamos realizar testes unitários, pois permitem que realizemos o teste sem utilizar nenhuma implementação das dependências, garantindo que ele seja isolado e específico para a função/classe que estamos tentando testar.

Para criar um  Mock no Jest, temos que usar a função `jest.fn`, como mostrado abaixo:


```
test("Showing jest.fn", () => {
	const mock = jest.fn(() => {
		const user = {
				name: "Astrodev",
				age: 29
		}
		return user
	})
})
```


*a. De qual das duas funções* (`validateCharacter` ou `performAttack`)  deveremos criar um Mock nos próximos testes? Justifique.
performAttack, pois ela necessitaria de um personagem válido para prosseguir com a sua checagem, entao um mock pronto ja a permitiria continuar.

*b. Crie um Mock dessa função que represente a saída de sucesso do seu comportamento* 

```
export const returnTrueMock =jest.fn(( ) => {
    return true
})
```


*c. Crie um Mock dessa função que representa a saída de erro/falha do seu comportamento*

```
export const returnFalseMock =jest.fn(( ) => {
    return false
})
```


## Exercício 5

Agora, vamos criar testes unitários da nossa função `performAttack`. Como ela utiliza a `validateCharacter`, vamos ter que criar um Mock dela (resposta do item a do exercício 4). 

*a. Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida. Verifique o estado final das personagens. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, quantas vezes ela retornou.*

```
test('Testing a char with at leat one negative value and must return false',() => {
        let char:Character ={
            name:"jorgin",
            def:55,
            life:-100,
            pow:98
        }
        expect(validadeCharacter(char)).toBe(false)
    })

    test('Testing a char with valid informations and need a true return',() => {
        let char:Character ={
            name:"jorgin",
            def:55,
            life:100,
            pow:98
        }
        expect(validadeCharacter(char)).toBe(true)
    })

    test('Should perform attack', () => {
        const attacker:Character = {
            name:"Shazan",
            def:299,
            pow:1500,
            life: 1200
        }

        const defender:Character = {
            name:"Shellmon",
            def:1300,
            pow:200,
            life: 3000
        }
        performAttackWithInvertedDependencies(attacker,defender,returnTrueMock as any)
        expect(defender.life).toEqual(2800)
        expect(returnTrueMock).toHaveBeenCalled()
        expect(returnTrueMock).toHaveBeenCalledTimes(2)
        expect(returnTrueMock).toHaveReturnedTimes(2)
    })
})
```

*b. Faça um teste com um dos personagens com alguma informação inválida. Verifique a mensagem de erro. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, o que ela retornou e quantas vezes ela retornou.*

```
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
```