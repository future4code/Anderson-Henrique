import * as jwt from "jsonwebtoken"
import { authData } from "../types"


export function generateToken(input: authData): string {
    const expiresIn = "15min"
    const token = jwt.sign(
        {
           id:input.id,
           role:input.role
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    )
    return token
}