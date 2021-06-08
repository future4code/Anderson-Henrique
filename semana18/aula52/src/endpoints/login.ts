import { Request, Response } from "express";
import connection from "../connection";
import { checkEmail } from "../functions/checkEmail";
import { generateToken } from "../services/generateToken";
import { compareHash } from "../services/hashManager";

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'email' e 'password'")
        }
        checkEmail(req, res)

        const [checkUser] = await connection.raw(`
         SELECT * FROM USER
         WHERE email = "${email}"
         `)
        if (!checkUser) {
            throw new Error("Email não encontrado.");
        }
        const [checkPassword] = await connection.raw(`
         SELECT password from USER
         WHERE email = "${email}"`)

        if (password.length < 6) {
            throw new Error("Senha muito curta ( mínimo 6 dígitos) ")
        }

        if (!compareHash(password, checkPassword[0].password)) {
            throw new Error("Senha incorreta.")
        }
        const token = generateToken({
            id: checkUser[0].id,
            role: checkUser[0].role
        })
        res.status(200).send({
            message: "login realizado",
            token
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}
