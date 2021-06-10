import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";


export async function getBuddyProfile(req: Request, res: Response): Promise<void> {
    try {
       const authorization = req.headers.authorization as string
       const userId = req.params.id
       if (!authorization) {
          throw new Error("The field authorization is empty, please fill it.")
       }
       if(!userId){
        throw new Error("The field id is empty, please fill it.")
       }

       const token = getTokenData(authorization)
       const [user] = await connection("USER").where("id",userId)
       res.status(200).send({
          "id": user.id,
          "name": user.name,
          "email": user.email
       })
    } catch (err) {
        if (err.message.includes("invalid signature")) {
            res.status(400).send("The authorization token expired or it was invalid.");
         }
         if (err.message.includes("jwt malformed")) {
            res.status(400).send("The authorization token is malformed, try another token.");
         }
       res.send({
          message: err.message || err.sqlMessage
       })
    }
 }