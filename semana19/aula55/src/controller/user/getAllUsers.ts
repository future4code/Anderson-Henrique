import { Request, Response } from "express";
import { getAllUsersBusiness } from "../../business/user/getAllUsersBusiness";
import { allUsers } from "../../data/user/allUsers";


export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const authorization: string = req.headers.authorization as string
        if (!authorization) {
            throw new Error("authorization não foi passado. Insira um token válido.")
        }
        getAllUsersBusiness(authorization)

        let users = allUsers()

        res.status(200).send({
            users
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}