export type addresInfo = {
   street: string
   neighborhood: string
   city: string
   state: string
}

export type completeAddressTable = {
   id: string,
   CEP: string,
   logradouro: string,
   numero: number,
   complemento?: string,
   bairro: string,
   cidade: string,
   estado: string,
   userID: string

}


export type authenticationData = {
   id: string,
   role: string
}

export type userCredentials = {
   email: string
   password: string
}

export type userPersonalInfo = {
   name: string
   nickname: string
}

export enum userRole {
   ADMIN = "ADMIN",
   NORMAL = "NORMAL"
}

export type user = {
   id: string,
   email: string,
   name: string,
   nickname: string,
   password: string,
   role: userRole
}