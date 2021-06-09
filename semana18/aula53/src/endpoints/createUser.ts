import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { completeAddressTable, user, userRole } from "../types";
import { hash } from "../services/hashManager";
import { getFullAddressInfo } from "./getAddressInfo";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password, role, number, CEP, complemento } = req.body

      if (!name || !nickname || !email || !password || !role || !CEP || !number) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password', 'email', 'CEP', 'number' e 'role'")
      }

      if (role.toUpperCase() !== userRole.ADMIN && role.toUpperCase() !== userRole.NORMAL) {
         res.statusCode = 422
         throw new Error("Os valores possíveis para 'role' são NORMAL e ADMIN")
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }


      const id: string = generateId();
      const result = await getFullAddressInfo(CEP, number, id, complemento)


      const cypherText = await hash(password);
      const newUser: user = { id, email, name, nickname, password: cypherText, role }
      console.log("NEW USER: ", newUser)
      await connection('to_do_list_users')
         .insert(newUser)
      await connection('userAddressInfos')
         .insert(result)
      console.log("teste DEPOIS DE TUDOOOOOO: ")
      const token: string = generateToken({ id, role })
      res.status(201).send({ token })
   } catch (error) {
      res.send({ message: error.message })
   }
}