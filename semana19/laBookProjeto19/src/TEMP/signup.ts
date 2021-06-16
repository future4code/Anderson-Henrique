


import { Request, Response } from "express";
import { checkEmail } from "../services/checkEmail";
import { generateId } from "../services/idGenerator";
import { hash } from "../services/hashManager";
import { generateToken } from "../services/authenticator";
import { connection } from "../data/connection";

export const login = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            throw new Error("Some field are missing. 'name','email' and 'password' have to be filled ")
        }
        if (password.length < 6) {
            throw new Error("Password have to be at least 6 characters")
        }
        checkEmail(email)

        const id = generateId()

        const cypherPassword = await hash(password)
        await connection('labook_users')
            .insert({
                id,
                name,
                email,
                password: cypherPassword
            })
        const token: string = generateToken({ id })
        res.status(200).send({
            token, cypherPassword, password, id
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}