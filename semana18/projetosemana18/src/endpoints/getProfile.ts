import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";


export async function getProfile(req: Request, res: Response): Promise<void> {
   try {
      const authorization = req.headers.authorization as string
      if (!authorization) {
         throw new Error("The field authorization is empty, please fill it.")
      }
      const token = getTokenData(authorization)
      const [user] = await connection("USER").where("id", token.id)
      res.status(200).send({
         "id": user.id,
         "name": user.name,
         "email": user.email
      })
   } catch (err) {
      if (err.message.includes("invalid signature")) {
         res.status(400).send("The authorization token expired or it was invalid.");
      }
      res.send({
         message: err.message || err.sqlMessage
      })
   }
}