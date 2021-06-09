import axios, { AxiosResponse } from "axios";
import generateId from "../services/idGenerator";
import { addresInfo, completeAddressTable } from "../types";

export const getAddressInfo = async (cep: string): Promise<[addresInfo, {}] | null> => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        const data: addresInfo = {
            street: response.data.logradouro,
            neighborhood: response.data.bairro,
            city: response.data.localidade,
            state: response.data.uf
        }
        // console.log('response.data: ', response.data)
        console.log({ data })
        return [data, response]
    } catch (error) {
        return null
    }
}

export const getFullAddressInfo =
    async (cep: string, numero: string, idOfUser: string, complemento?: string)
        : Promise<completeAddressTable | null> => {
        try {

            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            const id: string = generateId()
            console.log("id of USERRRRRRRR:", idOfUser)
            console.log('id criado aqui MESMO: ', id)
            let number = Number(numero)
            let data: completeAddressTable
            if (!complemento) {
                data = {
                    id,
                    CEP: cep,
                    logradouro: response.data.logradouro,
                    numero: number,
                    bairro: response.data.bairro,
                    cidade: response.data.localidade,
                    estado: response.data.uf,
                    userID: idOfUser
                }
            } else {
                data = {
                    id,
                    CEP: cep,
                    logradouro: response.data.logradouro,
                    numero: number,
                    complemento: complemento,
                    bairro: response.data.bairro,
                    cidade: response.data.localidade,
                    estado: response.data.uf,
                    userID: idOfUser
                }
            }
            console.log({ data })
            return data
        } catch (error) {
            throw new Error('deu ruim')
        }
    }