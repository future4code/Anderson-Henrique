import axios from "axios";
import { addresInfo } from "../types";

export const getAddressInfo = async (cep: string): Promise<addresInfo | null> => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        const data: addresInfo = {
            street: response.data.logradouro,
            neighborhood: response.data.bairro,
            city: response.data.localidade,
            state: response.data.uf
        }
        console.log('response.data: ',response.data)
        console.log({ data })
        return data
    } catch (error) {
        return null
    }


}