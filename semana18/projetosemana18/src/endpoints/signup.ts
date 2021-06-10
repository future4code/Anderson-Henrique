import { Request, Response } from "express"
import { insertUser } from "../data/insertUser";
import { SignupInput } from "../types/User";

export const signUp = async (req: Request, res: Response) => {
   try {

      const { name, email, password } = req.body

      if (!name || !email || !password) {
         res.statusCode = 406
         throw new Error(" 'name', 'email' e 'password' são obrigatórios")
      }

      if (password.length < 6) {
         res.statusCode = 406
         throw new Error('A senha deve conter no mínimo seis caracteres');
      }

      if (!email.includes("@")) {
         res.statusCode = 406
         throw new Error('Formato de email inválido');
      }

      const input: SignupInput = {
         name,
         email,
         password
      }

      const id: string = String(Date.now() + Math.random())

      await insertUser(id, input);
      
   } catch (err) {
      res.send({
         message: err.message || err.sqlMessage
      })
   }
   
};