// import { Request, Response } from "express"
// import selectUserByEmail from "../data/selectUserByEmail";
// import { User } from "../types/User";

import { compareSync } from "bcryptjs"
import { Request, Response } from "express"
import connection from "../connection"
import { checkEmail } from "../helpFunctions/checkEmail"
import { generateToken } from "../services/authenticator"

// export const login = async (req: Request, res: Response) => {
//    try {

//       const { email, password } = req.body

//       if (!email || !password) {
//          res.statusCode = 406
//          throw new Error(" 'email' e 'password' são obrigatórios")
//       }

//       const user: User | undefined = await selectUserByEmail(email)

//       if (!user || user.password !== password) {
//          res.statusCode = 404
//          throw new Error("Usuário ou senha inválidos")
//       }

//       res.status(200).send({
//          message: 'Usuário logado',
//          token: user.id
//       });

//    } catch (err) {

//       res.send({
//          message: err.message || err.sqlMessage
//       })
//    }
// };



export const login = async (req: Request, res: Response): Promise<void> => {
   try {
      const { email, password } = req.body

      if (!email) {
         throw new Error("Field email is missing")
      }
      if (!password || password.length < 6) {
         throw new Error("Field password is missing or have less than 6 digits")
      }
      checkEmail(req, res)
      const [user] = await connection("USER").where({ email })

     const checkPassword =  compareSync(password,user.password)
      if(!checkPassword){
         throw new Error("password is incorrect")
      }
      if (!user) {
         throw new Error("email not found.")
      }
      const token = generateToken(
         user.id
      )

      res.send({
         accessToken: token
      })
   } catch (err) {

      res.send({
         message: err.message || err.sqlMessage
      })
   }
}

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3NTIwZjkyLTBjY2MtNDVkOC05NTM1LTI4ODg1NjBiZmMxNyIsImlhdCI6MTYyMzM0NzIzNywiZXhwIjoxNjIzMzgzMjM3fQ.zM5ZXFh5frJ_kFShbHdAr4S9WQF4boYPH9z3_OoxXHI