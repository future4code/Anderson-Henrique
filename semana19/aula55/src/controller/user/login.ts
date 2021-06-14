import { Request, Response } from "express";
import { loginBusiness } from "../../business/user/loginBusiness";


export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const token: string = await loginBusiness(email, password)
        res.status(201).send({
            message: "Usuário logado com sucesso.",
            token
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}