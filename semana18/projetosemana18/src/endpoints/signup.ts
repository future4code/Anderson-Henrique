// import { Request, Response } from "express"
// import { insertUser } from "../data/insertUser";
// import { SignupInput } from "../types/User";

import { Request, Response } from "express";
import connection from "../connection";
import { checkEmail } from "../helpFunctions/checkEmail";
import { generateToken } from "../services/authenticator";
import { createHash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { user } from "../types/User";

// export const signUp = async (req: Request, res: Response) => {
//    try {

//       const { name, email, password } = req.body

//       if (!name || !email || !password) {
//          res.statusCode = 406
//          throw new Error(" 'name', 'email' e 'password' são obrigatórios")
//       }

//       if (password.length < 6) {
//          res.statusCode = 406
//          throw new Error('A senha deve conter no mínimo seis caracteres');
//       }

//       if (!email.includes("@")) {
//          res.statusCode = 406
//          throw new Error('Formato de email inválido');
//       }

//       const input: SignupInput = {
//          name,
//          email,
//          password
//       }

//       const id: string = String(Date.now() + Math.random())

//       await insertUser(id, input);

//    } catch (err) {
//       res.send({
//          message: err.message || err.sqlMessage
//       })
//    }

// };


export const signUp = async (req: Request, res: Response): Promise<void> => {
   try {
      const { name, email, password } = req.body
      if (!name) {
         throw new Error("Field name is missing")
      }
      if (!email) {
         throw new Error("Field email is missing")
      }
      if (!password || password.length < 6) {
         throw new Error("Field password is missing or have less than 6 digits")
      }

      const [user] = await connection('USER')
         .where({ email })
      if (user) {
         res.statusCode = 409
         throw new Error("This email already exists")
      }

      checkEmail(req, res)

      const id = generateId()

      const newUser: user = { 
         id,
         name,
         email,
         password: createHash(password)
      }
      await connection('USER')
         .insert(newUser)

      const token: string = generateToken(id)

      res.status(201).send({
         message: "User created.",
         token
      })
   } catch (err) {
      res.send({
         message: err.message || err.sqlMessage
      })
   }
}