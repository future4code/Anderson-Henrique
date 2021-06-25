import { connection } from "../connection"


export const allUsers = async () => {
    const users: any = []
    const result = await connection("USER").select("*")
    for (let user of result) {
        users.push(user)
    }
    return users
}
