import { compare } from "bcryptjs"
import { selectUserByEmail } from "../../data/user/selectUserByEmail"
import { user } from "../../model/user"
import { generateToken } from "../../services/authenticator"
import { checkEmail } from "../../services/checkEmail"


export const loginBusiness = async (email:string,password:string) => {

    if(!email || !password){
        throw new Error("Preencha os campos 'email' e 'password'")
    }
    checkEmail(email)
    
    const user:user  = await selectUserByEmail(email)
    if(!user){
        throw new Error("Usuário não encontrado ou senha incorreta!")
    }
    const testPassword:boolean = await compare(password,user.password)
    if (!testPassword) {
        throw new Error("Usuário não encontrado ou senha incorreta")
     }
     const token: string = generateToken({
         id:user.id,
         role:user.role
     })
     return token
}