export type user = {
   id: string
   email: string
   password: string
   role: string
}

export enum user_roles  {
   NORMAL ="NORMAL",
   ADMIN = "ADMIN"
   }



export type authData = {
   id:string,
   role:string
   }
   