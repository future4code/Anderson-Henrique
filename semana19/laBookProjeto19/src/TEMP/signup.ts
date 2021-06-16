import { Request, Response } from "express";


export const signUp = (req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}