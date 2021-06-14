import { selectUserById } from "../../data/user/selectUserById"
import { user } from "../../model/user"
import { getTokenData } from "../../services/authenticator"




export const deleteUserBusiness = async (id: string, token: string): Promise<void> => {

    const user: user = await selectUserById(id)
    if (!user) {
        throw new Error("Id de usuário não encontrado.")
    }
    const userData = getTokenData(token)
    if (!userData) {
        throw new Error("Token inválido")
    }
    if (userData.token.role !== "ADMIN") {
        throw new Error("Apenas administradores podem realizar esta ação")
    }

}