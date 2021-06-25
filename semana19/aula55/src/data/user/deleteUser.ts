import { connection } from "../connection";



export const deleteUser = async (id: string) => {

    try {
        await connection("USER").delete().where({ id })
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}