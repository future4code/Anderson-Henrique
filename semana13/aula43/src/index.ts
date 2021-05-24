import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'
const app: Express = express()

app.use(express.json())
app.use(cors())

app.get('/countries/all', (req: Request, res: Response) => {

    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))
    res.status(200).send(result)

})

app.get('/countries/search', (req: Request, res: Response) => {

    let result: country[] = countries
    let name = req.query.name as string
    let capital = req.query.capital as string
    let continent = req.query.continent as string
 
 
    if (!req.query.name && !req.query.capital && !req.query.continent || !result) {
        res.status(400).send('Nenhum parâmetro passado ou nenhum resultado encontrado')
    }
 
    if (req.query.name) {
        result = result.filter(
            country => country.name.toLocaleLowerCase().includes(name.toLowerCase() as string)
        )
        res.status(200).send(result)

    }
    if (req.query.capital) {
        result = result.filter(
            country => country.capital.toLowerCase().includes(capital.toLowerCase() as string)
        )
        res.status(200).send(result)
    }

    if (req.query.continent) {
        result = result.filter(
            country => country.continent.includes(continent.toLowerCase() as string)
        )
        res.status(200).send(result)
    }

})


app.put('/countries/edit/:id', (req: Request, res: Response) => {
    try {
        if (isNaN(Number(req.params.id))) {
            throw new Error("Id must be a number");
        }
        const result: country | undefined = countries.find(
            country => country.id === Number(req.params.id)
        )
        if (!result || !req.params.id) {
            throw new Error('Not found')
        }
        if (req.body.name) {
            countries[Number(req.params.id)].name = req.body.name
        }
        if (req.body.capital) {
            countries[Number(req.params.id)].capital = req.body.capital
        }

        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.get('/countries/:id', (req: Request, res: Response) => {
    try {
        if (isNaN(Number(req.params.id))) {
            throw new Error("Id must be a number");
        }
        const result: country | undefined = countries.find
            (country => country.id === Number(req.params.id))
        if (result) {
            res.status(200).send(result)
        } else {
            throw new Error('Not found')
        }
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Teste no /</h1>')
})

app.listen(3000, () => {
    console.log('Server rodando em https://localhost:3000')
})