import { insertUser } from "../../data/user/insertUser";
import { userData } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { checkEmail } from "../../services/checkEmail";
import { hash } from "../../services/hashManager";
import { generateId } from "../../services/idGenerator";


export const signUpBusiness = async (userData: userData) => {
    if (!userData.name || !!userData.email || !userData.password || !userData.role) {
        throw new Error("Preencha todos os campos: 'name','email','password' e 'role'")
    }
    if (userData.name.length < 6) {
        throw new Error("'name' precisa de pelo menos 6 caracteres.")
    }
    checkEmail(userData.email)
    const cypherPassword = await hash(userData.password)
    const id = generateId()

    const newUser = {
        ...userData,
        password: cypherPassword,
        id
    }

    await insertUser(newUser)
    const token: string = generateToken({
        id,
        role: userData.role
    })

    return token


}