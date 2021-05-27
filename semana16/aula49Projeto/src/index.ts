import { Request, Response } from 'express'
import app from './app'
import connection from './connection'


app.get('/', (req, res) => { res.send('Hello, Ping Ping!!!') })


app.get('/users', async (req: Request, res: Response) => {
    try {
        const [result] = await connection.raw(
            `SELECT * FROM USER`
        )
        console.log('result: ', result)
        res.send(result)
    } catch (error) {
        res.status(500).send('An unexpected Error ocurred')
    }
})


app.get('/users/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const [result] = await connection.raw(
            `SELECT name,id FROM USER
            WHERE id =${id}`
        )
        const [result2] = await connection('USER')
        .select()
        .where("id",id)
        console.log('result: ', result)
        if(!result.length){
            throw new Error('nenhum usuário encontrado.')
        }
        res.send(result)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

app.put('/user', async (req: Request, res: Response) => {
    try {

        const { name, nickname, email } = req.body
        const USER = {
            name,
            nickname,
            email
        }

        await connection.insert(USER).into("USER")
        if (!name) {
            throw new Error("Name is Empty,try again")
        }
        if (!nickname) {
            throw new Error("nickname is Empty,try again")
        }
        if (!email) {
            throw new Error("email is Empty,try again")
        }
        res.status(200).send({
            message: "New User Created",
            user: USER
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})


app.post('/users/edit/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const name= req.body.name
        const nickname = req.body.nickname
        const updateUser = {
            name,nickname
        }

        const result = await connection('USER')
        .update(updateUser)
        .where({id})
        console.log('result: ', result)
        res.status(200).send({message: "Updated"})
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})