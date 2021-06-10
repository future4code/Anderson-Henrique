import { config } from "dotenv";
import * as jwt from "jsonwebtoken"


config()

export type authenticationData = {
    id: string
}

export function generateToken(id: string): string {

    return jwt.sign(
        {
            id
        }
        ,
        process.env.JWT_KEY!,
        {
            expiresIn: "10h"
        }
    )
}



export function getTokenData(token: string): string {
    const result: string = jwt.verify(
        token,
        process.env.JWT_KEY!
    ) as string
    return result
}