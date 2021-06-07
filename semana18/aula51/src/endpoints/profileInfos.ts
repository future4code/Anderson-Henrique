import { Request, Response } from "express";
import connection from "../connection";

export async function profileInfos(req:Request,res:Response){
try {

    const authorization = req.body.authorization
    

const user = await connection.raw(`
SELECT * FROM USER
WHERE id = "${authorization}"
`)


} catch (error) {
    res.status(400).send({
        message: error.message
    })
}
}