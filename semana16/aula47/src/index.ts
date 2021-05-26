import { Request, Response } from 'express'
import app from './app'
import connection from './connection'



app.get('/actors', async (req, res) => {
    try {

        const [result] = await connection.raw(
            `Select * FROM Actor`
        )
        console.log('result: ', result)
        res.send(result)
    } catch (error) {
        console.log(error.message);
        res.status(500).send('An unexpected Error ocurred')
    }
})






app.get('/actor/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await connection.raw(
            `SELECT * FROM Actor WHERE id=${id}`
        )
        console.log('result: ', result)
        res.send(result)
    } catch (error) {
        console.log(error.message)
        res.status(400).send('Something went wrong.')
    }
})

app.get('/actor/:name', async (req: Request, res: Response) => {
    try {
        const { name } = req.params

        const [result] = await connection.raw(
            `SELECT * FROM Actor WHERE name =${name}`
        )
        console.log('result: ', result)
        res.send(result)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Something went wrong.')
    }

})



app.get('/actors/countgender', async (req: Request, res: Response) => {
    try {
        const [result] = await connection.raw(
            `SELECT COUNT(gender) AS "Quantity",gender
            FROM Actor
            GROUP BY gender;`
        )
        console.log('result: ', result)
        res.send(result)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Something went wrong.')
    }
})


app.get('/actor',async (req: Request, res: Response) => {
try {
    const gender = req.query.gender
    const [result] = await connection('Actor')
    .count()
    .where({gender})
    res.send(result)
} catch (error) {
    console.log(error.message);
    res.status(500).send('An unexpected Error ocurred')
}
})

app.put('/actors', async (req: Request, res: Response) => {
    try {
        const id = req.body.id
        console.log('id: ', id)
        const actorData = {
            name: req.body.name,
            salary: req.body.salary,
            birth_date: req.body.birthDate,
            gender: req.body.gender

        }

        await connection('Actor')
            .update(actorData)
            .where({ id })

        res.send('Updated!')
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal error')
    }
})

app.post('/actor', async (req: Request, res: Response) => {
    try {
        const id = req.body.id
        // const salary = req.body.salary
        const actorData = {
            salary: req.body.salary,
        }

        await connection('Actor')
            .update(actorData)
            .where({ id })

        res.send('Updated!')
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal error')
    }
})



const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};





app.put('/actor', async (req: Request, res: Response) => {
    console.log('birthDate: ',req.body.birthDate)
    try {
        const id = req.body.id
        name: req.body.name
        salary: req.body.salary
        birth_date: req.body.birthDate
        gender: req.body.gender
        console.log('id: ', id)
        await createActor(
            req.body.id,
            req.body.name,
            req.body.salary,
            req.body.birthDate,
            req.body.gender
            )

        res.status(200).send('Created!')

} catch (error) {
    console.log(error.message)
    res.status(500).send('Internal error')
}
})


app.delete('/actors/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params
        await connection('Actor')
            .delete()
            .where("id", id)
        res.send('Deleted!')
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal error')
    }
})








const avgSalaryByGender = async (gender: string): Promise<any> => {
    const [result] = await connection('Actor')
        .avg('salary as average')
        .where({ gender })
    return result.average
}

avgSalaryByGender('female')



















app.get('/', (req, res) => { res.send('Hello, Ping Ping!!!') })