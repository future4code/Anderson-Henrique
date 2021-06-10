import { Request, Response } from "express";
import selectRecipesByUserId from "../data/selectRecipesByUserId";

export async function getFeed(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const token = req.headers.authorization as string

      const page: number = Number(req.query.page || 0)

      if (!token) {
         res.statusCode = 401
         throw new Error("Token inválido")
      }

      const feed = await selectRecipesByUserId(token, page)

      if (!feed.length) {
         res.statusCode = 404
         throw new Error("Nenhuma receita encontrada")
      }

      res.status(200).send({
         message: "Sucesso!",
         feed
      })

   } catch (err) {
      res.send({
         message: err.message || err.sqlMessage
      })
   }
}