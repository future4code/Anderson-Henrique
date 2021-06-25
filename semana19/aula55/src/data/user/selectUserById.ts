import { user } from "../../model/user"
import { connection } from "../connection"

export const selectUserById = async (id: string): Promise<user> => {
    const [result] = await connection("USER").select("*").where({ id })
    return {
        id: result.id,
        name: result.name,
        email: result.email,
        password: result.password,
        role: result.role
    }

}