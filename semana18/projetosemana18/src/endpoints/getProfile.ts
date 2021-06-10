import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";

// export async function getProfile(
//    req: Request,
//    res: Response
// ): Promise<void> {
//    try {
//       const token = req.headers.authorization as string

//       const page: number = Number(req.query.page || 0)

//       if (!token) {
//          res.statusCode = 401
//          throw new Error("Token inválido")
//       }

//       const feed = await selectRecipesByUserId(token, page)

//       if (!feed.length) {
//          res.statusCode = 404
//          throw new Error("Nenhuma receita encontrada")
//       }

//       res.status(200).send({
//          message: "Sucesso!",
//          feed
//       })

//    } catch (err) {
//       res.send({
//          message: err.message || err.sqlMessage
//       })
//    }
// }

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