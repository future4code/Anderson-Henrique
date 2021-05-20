import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"

}
// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())


// 1.a : Metodo GET
// 1.b : Entidade users
app.get('/users', (req: Request, res: Response) => {

  try {
    if (!users.length) {
      throw new Error('Lista de usuários vazia')
    }
    res.status(200).send(users)
  } catch (error) {
    res.status(400).send(
      {
        message: error.message
      }
    )
  }
})




// 2.a : por query params, pois acredito ser o padrão neste caso, sendo facilitada a lógica.
// b. Por validacao if(type!===algo)....
app.get('/users', (req: Request, res: Response) => {
  try {
    const type = req.query.type
    if (type !== UserType.NORMAL && type !== UserType.ADMIN) {
      throw new Error('Types aceitos: NORMAL e ADMIN')
    }
    const result = users.filter((user) => user.type === type)
    res.status(200).send({ result })
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }
})

// 3.a pathParams
// 3.b . feito

app.get('/users/:name', (req: Request, res: Response) => {
  try {
    const { name } = req.params
    const result = users.filter(user => user.name.toLowerCase() === name.toLowerCase())
    if (!result.length) {
      throw new Error('Nenhum usuário encontrado.')
    }
    res.status(200).send('ok')
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }
})

//4.a Aparemente a mesma coisa, ambos criaram vários usuários iguais todas as vezes que as requests foram feitas
// 4.b Não, pois o método put foi feito para atualizar/inserir dados sem muitas verificações, sendo mais pontual o seu uso.
app.post('/users', (req: Request, res: Response) => {
  try {
    const { id, name, email, type, age } = req.body
    if (type !== UserType.NORMAL && type !== UserType.ADMIN) {
      throw new Error('Types aceitos para criação de novo usuário: NORMAL e ADMIN')
    }

    const body = req.body
    console.log('body: ', body)

    const newUser: User = {
      id, name, email, type, age
    }
    users.push(newUser)

    res.status(200).send({
      message: 'usuário criado',
      user: newUser
    })
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }
})

app.put('/users/:changeLastUserName', (req: Request, res: Response) => {
  try {
    const newName = req.params.changeLastUserName
    users[users.length - 1].name = newName + "-ALTERADO"
    const lastUser = users[users.length - 1]
    res.status(200).send({
      message: "Nome do último usuário alterado com sucesso ",
      user: lastUser
    })
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }
})

//Fiz por body nesta, estou tentando variar 

app.patch('/users', (req: Request, res: Response) => {
  try {
    const renewName = req.body.name
    users[users.length - 1].name = renewName + "-REALTERADO"
    const lastUser = users[users.length - 1]
    res.status(200).send({
      message: 'nome do usuário alterado com o método patch',
      user: lastUser
    })
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }
})


app.delete('/users/:id', (req: Request, res: Response) => {
  try {
    const selectedUser = Number(req.params.id)
    if (isNaN(selectedUser)) {
      throw new Error("Passe um ID numérico")
    }

    let result = users.filter(user => user.id !== selectedUser)
    if (users.length === result.length) { // checagem estranha, mas se o length dos 2 é igual, então nada foi removido
      throw new Error('ID não encontrado')
    }
    users = result
    // users.splice()
    res.status(200).send({
      message: 'Usuário deletado.',
      user: users
    })
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }

})

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})



app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
