import * as jwt from "jsonwebtoken"
import { authenticationData } from "../model/user"

export const generateToken = (
   payload: authenticationData
): string => {
   return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
         expiresIn: "24min"
      }
   )
}

export const getTokenData = (
   token: string
): authenticationData => {
   const { id } = jwt.verify(
      token,
      String(process.env.JWT_KEY)
   ) as authenticationData

   return { id }
}
