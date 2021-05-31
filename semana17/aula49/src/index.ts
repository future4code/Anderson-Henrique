import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"

import {getAllUsers,selectAllUsers,selectFilteredUsers,selectFiveUsersPerPage,orderUsersByQueries,filterUsersForAll,selectUsersByType} from './functions'

const app: Express = express()
app.use(express.json())
app.use(cors())


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})

app.get('/', (req, res) => { res.send('Hello, Ping Ping!!!') })

app.get('/users', async (req: Request, res: Response) => {
   try {
      const result = await getAllUsers(req, res)
      res.status(200).send(result)
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})

app.get('/users/search', async (req: Request, res: Response) => { //1.a
   try {
      const result = await selectFilteredUsers(req, res)
      res.status(200).send(result)
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})


app.get('/users/order', async (req: Request, res: Response) => {  //2
   try {
      const result = await orderUsersByQueries(req, res)
      res.status(200).send(result)
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }

})

app.get('/users/page', async (req: Request, res: Response) => { //3
   try {
      const result = await selectFiveUsersPerPage(req, res)
      res.status(200).send(result)
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})

app.get('/users/filter', async (req: Request, res: Response) => { //4
   try {
      const page = req.query.page
      const result = await filterUsersForAll(req, res)
      res.status(200).send({ page, result })
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})

app.get('/users/:type', async (req: Request, res: Response) => { //1.b
   try {
      const result = await selectUsersByType(req, res)
      res.status(200).send(result)
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})
