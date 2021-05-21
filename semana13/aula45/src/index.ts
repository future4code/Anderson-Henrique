// no index.ts:

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
    description: string
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
                value: 799.99
            },
            {
                date: '20/02/2021',
                description: ' Compra de um mi stick',
                value: 165.99
            }
        ]
    }
]



app.get('/getBalance', (req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

})

app.post('/addBalance', (req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

})

app.post('/payBill', (req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

})

app.post('/transferBallance', (req: Request, res: Response) => {
    try {

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