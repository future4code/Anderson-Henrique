import { getTokenData } from "../../services/authenticator"


export const getAllUsersBusiness = async (token: string): Promise<void> => {

    const checkData = getTokenData(token) 
    if (!checkData) {
        throw new Error("token inválido, por favor, logue novamente e digite um token válido")
    }

}