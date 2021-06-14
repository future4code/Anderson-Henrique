import { Request, Response } from "express";
import { signUpBusiness } from "../../business/user/signupBusiness";
import { connection } from "../../data/connection";


export const signup = async (req: Request, res: Response) => {
    try {
        const { name, email, password, role } = req.body
        const token: string = await signUpBusiness({ name, email, password, role })

        res.status(201).send({
            message: "Usuário criado.",
            token
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}