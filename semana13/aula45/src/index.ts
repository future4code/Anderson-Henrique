
import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app = express();
app.use(express.json());
app.use(cors());


type User = {
    name: string,
    cpf: number,
    bornDate: string,
    balance?: number,
    statement?: Statement[]
    transactions?: []
}

type Statement = {
    value: number,
    date: string,
    description: string,
    type: Operation
}

enum Operation {
    WITHDRAWALL = 'saque',
    DEPOSIT = 'despósito'
}
let users: User[] = [
    {
        name: 'Anderson Oliveira',
        cpf: 12345678911,
        bornDate: '20/02/1992',
        balance: 1379.99,
        statement: [
            {
                date: '21/01/2021',
                description: 'Compra de uma geladeira',
                value: 799.99,
                type: Operation.WITHDRAWALL
            },
            {
                date: '20/02/2021',
                description: ' Compra de um mi stick',
                value: 165.99,
                type: Operation.WITHDRAWALL

            }
        ]
    },
    {
        name: 'Anderson Aquino',
        cpf: 12345678910,
        bornDate: '20/02/1999',
        balance: 2372.02,
        statement: [
            {
                date: '21/01/2020',
                description: 'Compra de um smarthphone',
                value: 799.99,
                type: Operation.WITHDRAWALL
            },
            {
                date: '12/03/2021',
                description: ' Compra de um mi band 6',
                value: 165.99,
                type: Operation.WITHDRAWALL

            }
        ]
    }
]



app.get('/users', (req: Request, res: Response) => {
    try {
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

app.get('/getBalance', (req: Request, res: Response) => {
    try {
        const name = req.body.name
        const cpf = Number(req.body.cpf)
        if (isNaN(cpf)) {
            throw new Error('CPF deve conter apenas números')
        }
        const result = users.find(user => user.cpf === cpf && user.name === name)
        if (!result) {
            throw new Error('Nenhum usuário encontrado')
        }
        res.status(200).send({
            message: 'usuario encontrado',
            user: `Saldo : ${result.balance}`
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

})

app.post('/transferBalance', (req: Request, res: Response) => {
    try {
        const senderCPF = Number(req.body.senderCPF)
        const senderName = req.body.senderName
        const receiverCPF = Number(req.body.receiverCPF)
        const receiverName = req.body.receiverName
        const valueToSend = Number(req.body.valueToSend)
        if (isNaN(senderCPF) || isNaN(receiverCPF)) {
            throw new Error('CPFs devem conter apenas números.')
        }
        if (isNaN(valueToSend)) {
            throw new Error('O valor a ser enviado é numérico')
        }
        if (senderCPF.toString().length !== 11 || receiverCPF.toString().length !== 11) {
            throw new Error('CPFs contém 11 números, preencha novamente')
        }
        if (!senderCPF || !senderName || !receiverCPF || !receiverName || !valueToSend) {
            throw new Error('Um ou mais dados faltando preenchimento')
        }
        let sender = users.find(user => user.name === senderName && user.cpf === senderCPF)
        let receiver = users.find(user => user.name === receiverName && user.cpf === receiverCPF)
        if (!sender || !receiver) {
            throw new Error('Algum dado digitado incorretamente: Nome do recebedor / quem enviou, ou CPF dos mesmos.')
        }
        if (sender && sender.balance && sender.balance < valueToSend) {
            throw new Error("Saldo insuficiente")
        }

        if (sender.balance && receiver.balance) {
            sender.balance -= valueToSend
            receiver.balance += valueToSend
        }
        let date = new Date()
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        let fullDate
        fullDate = `${day}/${month}/${year}`
        if (month.toString().length === 1) {
            fullDate = `${day}/${'0' + month}/${year}}`
        }

        if (sender.statement && receiver.statement) {
            sender.statement.push({
                value: valueToSend,
                description: 'Envio de dinheiro por transferência',
                date: fullDate,
                type: Operation.WITHDRAWALL
            })
            receiver.statement.push({
                value: valueToSend,
                description: 'Recibo de dinheiro por transferência',
                date: fullDate,
                type: Operation.DEPOSIT
            })
        }

        res.status(200).send({
            message: 'ok',
            receiver: receiver,
            sender: sender
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

})

app.post('/createNewUser', (req: Request, res: Response) => {
    try {
        const body = req.body
        const name = req.body.name
        const cpf = Number(req.body.cpf)
        const bornDate = req.body.bornDate
        if (!name || !cpf || !bornDate) {
            throw new Error('Falta o preenchimento de algum dado ( CPF, nome ou bornDate(Data de nascimento )')
        }
        if (cpf.toString().length !== 11) {
            throw new Error('CPFs contém 11 números, preencha novamente')
        }
        const checkCPF = users.find(user => user.cpf === cpf)
        if (checkCPF) {
            throw new Error('Já existe um usuário com este CPF')
        }
        const newUser: User = {
            name: name,
            cpf: cpf,
            bornDate: bornDate,
            balance: 0,
            statement: [],
            transactions: []
        }
        users.push(newUser)

        res.status(200).send({
            message: 'Usuário criado',
            user: newUser
        })

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})


app.put('/addBalance', (req: Request, res: Response) => {
    try {
        const body = req.body
        const name = req.body.name
        const cpf = Number(req.body.cpf)
        const addBalance = Number(req.body.addBalance)
        if (!name || !cpf || !addBalance) {
            throw new Error('Falta o preenchimento de algum dado ( CPF, nome ou addBalance(saldo a adicionar )')
        }
        if (isNaN(cpf || addBalance)) {
            throw new Error('CPF deve conter apenas números')
        }
        const result = users.find(user => user.cpf === cpf && user.name === name)
        if (!result) {
            throw new Error('Nenhum usuário encontrado')
        }
        if (result.balance === undefined) {
            result.balance = 0
        }
        let lastBalance = result.balance
        result.balance = result.balance + addBalance
        let newDate = new Date()
        if (!result.statement) {
            result.statement = []
        }
        result.statement.push({
            value: addBalance,
            description: 'Adicinado saldo',
            date: newDate.toString(),
            type: Operation.WITHDRAWALL
        })


        res.status(200).send({
            message: 'Saldo adicionado com sucesso',
            lastBalance: `Saldo anterior: ${lastBalance.toFixed(2)}`,
            atualBalance: `Saldo atual: ${result.balance.toFixed(2)}`

        })

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

})

app.post('/payBill', (req: Request, res: Response) => {
    try {
        let cpf = Number(req.body.cpf)
        let date = req.body.date
        let description = req.body.description
        let value = Number(req.body.value)

        if (!cpf || !description || !value) {
            throw new Error('Dados faltando, preencha com cpf,  description e valor ')
        }
        if (isNaN(cpf || value)) {
            throw new Error('CPF deve conter apenas números')
        }
        const result = users.find(user => user.cpf === cpf)
        if (!result) {
            throw new Error('Nenhum usuário encontrado, cpf inválido.')
        }

        let dateToday = new Date()
        let day = dateToday.getDate()
        let month = dateToday.getMonth()
        let year = dateToday.getFullYear()
        let stringMonth
        let compareDate
        if (month.toString().length === 1) {
            stringMonth = '0' + month
            compareDate = `${day}/${stringMonth}/${year}`
        } else {
            compareDate = `${day}/${'0' + month}/${year}`
        }
        let fullDate = `${day}/${month}/${year}}`
        console.log('compareDate: ', compareDate)
        if (date) {
            let billDay = date.slice(0, 2)
            let billMonth = date.slice(3, 5)
            let billYear: number = date.slice(6, 10)
            if (billYear < year) {
                throw new Error('Ano de preenchimento incorreto. Ano do pagamento inferior ao ano atual.')
            } else if (billYear == year) {
                if (stringMonth) {
                    if (billMonth < stringMonth) {
                        console.log('huhu')
                        throw new Error('Mês de preenchimento incorreto. Mês do pagamento inferior ao mês atual.')
                    }
                }
                if (billMonth == stringMonth) {
                    if (billDay < day) {
                        throw new Error('Dia de preenchimento incorreto. Dia do pagamento inferior ao dia atual.')
                    }
                }
            }
            fullDate = `${billDay}/${billMonth}/${billYear}`
            if (billMonth.toString().length === 1) {
                fullDate = `${day}/${'0' + month}/${year}}`
            }
        }
        if (result && result.balance && result.balance < value) {
            throw new Error("Saldo insuficiente")
        }
        if (result && result.balance && !date) {
            result.balance -= value

        }
        if (result && result.balance && fullDate == compareDate) {
            result.balance -= value
        }

        console.log('fullDate: ', fullDate)
        result?.statement?.push({
            date: fullDate,
            description,
            type: Operation.WITHDRAWALL,
            value
        })


        res.status(200).send({
            message: 'Confirmado o pagamento da conta',
            result: result
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

})

















app.get('/ping', (req: Request, res: Response) => {
    try {
        res.status(200).send('pong')
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});