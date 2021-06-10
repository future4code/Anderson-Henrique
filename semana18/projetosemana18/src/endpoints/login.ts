import { Request, Response } from "express"
import selectUserByEmail from "../data/selectUserByEmail";
import { User } from "../types/User";

export const login = async (req: Request, res: Response) => {
   try {

      const { email, password } = req.body

      if (!email || !password) {
         res.statusCode = 406
         throw new Error(" 'email' e 'password' são obrigatórios")
      }

      const user: User | undefined = await selectUserByEmail(email)

      if (!user || user.password !== password) {
         res.statusCode = 404
         throw new Error("Usuário ou senha inválidos")
      }

      res.status(200).send({
         message: 'Usuário logado',
         token: user.id
      });

   } catch (err) {

      res.send({
         message: err.message || err.sqlMessage
      })
   }
};