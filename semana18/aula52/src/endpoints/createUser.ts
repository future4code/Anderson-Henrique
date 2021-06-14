import { Request, Response } from "express";
import connection from "../connection";
import { checkEmail } from "../functions/checkEmail";
import { generateToken } from "../services/generateToken";
import { generateId } from "../services/generateId";
import { user, user_roles } from "../types";
import { createHash } from "../services/hashManager";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password, role } = req.body

      if (!email || !password || !role) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'email', 'role' e 'password'")
      }
      if (password.length < 6) {
         throw new Error("Senha muito curta, mínimo 6 digitos")
      }
      if (!(role in user_roles)) {
         throw new Error("role só pode ser 'NORMAL'  ou 'ADMIN' ")
      }
      const [user] = await connection.raw(`
      SELECT * FROM USER 
      WHERE email = "${email}"`)

      if (user.length) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }
      checkEmail(req, res)

      const id: string = generateId()

      const newUser: user = {
         id,
         email,
         password: createHash(password),
         role
      }

      await connection('USER')
         .insert(newUser)

      const token = generateToken({
         id,role
      })

      res.status(201).send({
         message: "token gerado pelo jwt",
         token,
         password
      })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}