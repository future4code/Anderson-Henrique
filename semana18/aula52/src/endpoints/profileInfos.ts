import { Request, Response } from "express";
import connection from "../connection";
import { getUserByID } from "../functions/getUserById";
import { getTokenData } from "../services/getTokenData";

export async function profileInfos(req: Request, res: Response) {
    try {

        const id = req.body.id
        const selectedUser = await getUserByID(id)
        const token = req.headers.authorization as string
        const authenticData = getTokenData(token)
        if(authenticData.role !=="NORMAL"){
            throw new Error("Apenas usuários normais tem acesso a este conteúdo")
        }
        const user = await connection.raw(`
        SELECT * FROM USER
        WHERE id = "${token}"
        `)
        res.status(200).send({
            id: selectedUser[0].id,
            email: selectedUser[0].email

        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}