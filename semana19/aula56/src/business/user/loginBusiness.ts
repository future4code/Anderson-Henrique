import { compare } from "../../services/hashManager"
import { selectUserByEmail } from "../../data/user/selectUserByEmail"
import { generateToken } from "../../services/authenticator"
import { loginDTO, user } from "../../model/user"

export const loginBusiness = async (
   loginData: loginDTO
) => {
   if (!loginData.email || !loginData.password) {
      throw new Error("'email' e 'senha' são obrigatórios")
   }

   const user: user = await selectUserByEmail(loginData.email)

   if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const passwordIsCorrect: boolean = await compare(loginData.password, user.password)

   if (!passwordIsCorrect) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const token: string = generateToken({
      id: user.id,
      role: user.role
   })

   return token
}