import { Request, Response } from 'express'
import app from './app'
import connection from './connection'


app.get('/', (req, res) => { res.send('Hello, Ping Ping!!!') })




app.get('/user/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const [result] = await connection.raw(
            `SELECT name,id FROM USER
            WHERE id =${id}`
        )
        const [result2] = await connection('USER')
            .select()
            .where("id", id)
        console.log('result: ', result)
        if (!result.length) {
            throw new Error('nenhum usuário encontrado.')
        }
        res.send(result)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})


app.get('/user', async (req: Request, res: Response) => {
    try {
        const [result] = await connection.raw(
            `SELECT * FROM USER`
        )
        console.log('result GET ALL: ', result)
        res.send(result)
    } catch (error) {
        res.status(500).send('An unexpected Error ocurred')
    }
})

app.get('/user', async (req: Request, res: Response) => {
    try {
        const query = req.query.searchQuery
        const [result] = await connection.raw(
            `SELECT * FROM USER
            WHERE ( name LIKE '%${query}' OR  name LIKE '%${query}%' OR name LIKE '${query}%' )
            OR (nickname LIKE '%${query}' OR nickname LIKE '%${query}%' OR  nickname LIKE '${query}%')  ;`
        )
        // if (!result.length) {
        //     throw new Error('nenhum usuário encontrado.')
        // }
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})





app.get('/tasks', async (req: Request, res: Response) => {
    try {
        const creatorUserId = Number(req.query.creatorUserId)
        console.log('creator; ', creatorUserId)
        console.log('creator; ', isNaN(Number(creatorUserId)))
        if (!creatorUserId) {
            throw new Error('id is empty, try again.')
        }
        // const [result] = await connection.select().into("TASK").join('USER').where("creatorUserId",creatorUserId)
        if (isNaN(creatorUserId) === true) {
            throw new Error('ID is a number, try again.')
        }
        const [result] = await connection.raw(`
       SELECT TASK.id,title,description,
       LEFT(limitDate,10),creatorUserId,
       status,nickname as 'creatorUserNickname' FROM TASK
       JOIN USER
       ON creatorUserId = USER.id
       WHERE creatorUserId =${creatorUserId};
        `)
        if (!result.length) {
            throw new Error('Not found a task by this id.')
        }
        res.status(200).send({
            message: "ok",
            result: result
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})


app.get('/task', async (req: Request, res: Response) => {

    try {
        const result = await connection.select().into("TASK")
        console.log('RESULT: ', result)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

app.get('/task/:id', async (req: Request, res: Response) => {

    try {
        const id = req.params.id
        const [result] = await connection.select().into("TASK").where("id", id)
        console.log('result: ', result)
        if (!result) {
            throw new Error('Nof found a task by this id.')
        }
        res.status(200).send({
            result: result
        })
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

app.put('/task', async (req: Request, res: Response) => {
    try {
        console.log('body date: ', req.body.limitDate)
        // const title:string = 'ha'
        // const limitDate:Date =req.body.limitDate
        const { title, description, limitDate, CreatorUserId } = req.body
        const TASK = {
            title, description, limitDate, CreatorUserId
        }
        const [result] = await connection.insert(TASK).into("TASK")
        res.status(200).send({
            message: "Task created.",
            task: TASK,
            result: result
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
        const name = req.body.name
        const nickname = req.body.nickname
        const updateUser = {
            name, nickname
        }
        if (!name) {
            throw new Error('name is Empty, try again.')
        }
        if (!nickname) {
            throw new Error('nickame is Empty, try again.')
        }
        const result = await connection('USER')
            .update(updateUser)
            .where({ id })
        console.log('result: ', result)
        if (!result) {
            throw new Error('user not found.')
        }
        res.status(200).send({ message: "Updated" })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

app.post('/task/responsible',async (req: Request, res: Response) => {
try {
    const task_id = req.body.task_id
    const responsible_user_id = req.body.responsible_user_id
    console.log('responsible_user_id: ',responsible_user_id)
    console.log('task_id',task_id)
    if(!task_id.length){
        throw new Error('task_id is empty, try again.')
    }
    if(!responsible_user_id.length){
        console.log('resp.length: ',responsible_user_id.length)
        throw new Error('responsible_user_id is empty, try again.')
    }
    const addTask = {
        task_id,
        responsible_user_id
    }
    const result = await connection.insert(addTask).into("RESPONSIBLE")
    // res.status(200).send('testando excessoes')
    res.status(200).send({
        message:"Responsible added."
    })
} catch (error) {
    res.status(400).send({
        message: error.message
    })
}


})