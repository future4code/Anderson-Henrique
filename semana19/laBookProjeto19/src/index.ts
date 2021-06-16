/**************************** IMPORTS ******************************/

import express, { Express, Request, Response } from "express"
import cors from "cors"
import knex from "knex"
import dotenv from "dotenv"
import * as jwt from "jsonwebtoken"
import * as bcrypt from "bcryptjs"
import { v4 } from "uuid"
import Knex from "knex"

/**************************** CONFIG ******************************/



const app: Express = express()
app.use(express.json())
app.use(cors())

/**************************** TYPES ******************************/


/**************************** SERVICES ******************************/


/**************************** ENDPOINTS ******************************/


/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})