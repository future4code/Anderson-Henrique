import { user } from "../../model/user"
import { connection } from "../connection"

export const selectUserByEmail = async (email: string): Promise<user> => {
    const [result] = await connection("USER").select("*").where({ email })
    return {
        id: result.id,
        name: result.name,
        email: result.email,
        password: result.password,
        role: result.role
    }

}