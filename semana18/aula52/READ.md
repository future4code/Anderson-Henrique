 ## Ecercício 1

A primeira implementação que vamos fazer refere-se à função que vai cuidar do hash da nossa senha. Vamos utilizar um bem famoso e muito recomendado para senhas de usuários: *bcryptjs*. A principal vantagem dele é que é gerada uma string aleatória e atrelada à entrada da criptografia. Isso **impede** que se faça o ataque chamado de ***rainbow table*,** que consiste em montar uma tabela com infinitas possibilidades da saída do *hash*. 

Abaixo, há o exemplo de uso da função de *hash*

```
import * as bcrypt from "bcryptjs";

const rounds = Number(process.env.BCRYPT_COST);
const salt = await bcrypt.genSalt(rounds);
const result = await bcrypt.hash(s, salt);
console.log("encrypted message: ", result);
```


*a. O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*

Round nesse caso e o cost, ou seja, a velocidade limite que você quer deixar a requisição ser feita.
Salt é um middleware do hash, sendo que o hash pega os rounds feitos, gera o salt e entao ele e transformado em hash.

*b. Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.  ***** 

```
 const createHash = async (plainText: string): Promise<string>=> {

const rounds = Number(12);
const salt = await bcrypt.genSaltSync(rounds);
const hash = await bcrypt.hashSync(plainText, salt);
console.log("encrypted message: ", hash);

return hash

}
```

*c. Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*

```



 const compareHash = (
    plainText:string,
    cyphetText:string):boolean => {

    return bcrypt.compareSync(plainText,cyphetText)
}
```



## Exercício 2

Na aula de ontem, implementamos os endpoints de signup e login sem utilizar a criptografia. Vamos agora colocar isso. A ideia é simples: no cadastro, antes de salvar o usuário no banco, temos que criptografar a senha, para que, no banco, não fique a senha em si. Já, no login, em vez de comparar a senha enviada diretamente com a salva no banco, usaremos a biblioteca de Hash para isso. 

*a. Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*

Optaria por alterar o cadastro primeiro, conseguindo ainda testar os outros users com a senha antiga. O login viria em seguida, e junto com ele, alterações nos usuários em que as senhas ainda não estao criptografadas.

*d. No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*

Não, pois o que foi alterado foi a senha que foi criptografada. O token continua sendo gerado da mesma maneira, então não há necessidade de alteração.



## Exercício 3

Agora, vamos pensar em um pouco nas funcionalidades relacionadas aos tipos de usuário. Para isso, vamos ter que fazer umas modificações no banco de dados.

*a. Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*

```
ALTER TABLE USER
ADD role ENUM("NORMAL","ADMIN") DEFAULT "NORMAL"
```

*b. Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*

```
type authData = {
id:string,
role:string
}
```

```
function getTokenData(token:string):authData{
    const result = jwt.verify(
        token,
        process.env.JWT_KEY! ) as authData
    return result
}
```

## Exercício 4

Agora, vamos usar esse `role` no endpoint `/user/profile`. Somente o usuários "normais" podem acessar esse endpoint.

a. Altere o endpoint para que retorne um erro de Unauthorized para os usuários que "não sejam normais" e tentem acessar esse endpoint

```
 const token = req.headers.authorization as string
        const authenticData = getTokenData(token)
        if(authenticData.role !=="NORMAL"){
            throw new Error("Apenas usuários normais tem acesso a este conteúdo")
        }
        ```