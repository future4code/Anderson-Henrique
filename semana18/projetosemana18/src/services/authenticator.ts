import { config } from "dotenv";
import * as jwt from "jsonwebtoken"


config()

export type authenticationData = {
    id: string
}

export function generateToken(id: string): string {

    return jwt.sign(
        id,
        process.env.JWT_KEY as string,
        {
            expiresIn: "1h"
        }
    )
}