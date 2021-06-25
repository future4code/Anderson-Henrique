import { user, } from "../../model/user";
import { connection } from "../connection";


export const insertUser = async (user: user): Promise<void> => {
    await connection.insert(user).into("USER")
}