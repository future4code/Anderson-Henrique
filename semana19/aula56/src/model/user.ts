export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type userData = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export type user = userData & { id: string }

export type signUpDTO = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export type loginDTO = {
   email: string,
   password: string
}

export const toUserRoles = (input: string) => {
   switch (input) {
      case "NORMAL":
         return USER_ROLES.NORMAL
      case "ADMIN":
         return USER_ROLES.ADMIN
      default:
         throw new Error("Valid values for roles: 'ADMIN' or 'NORMAL'")
   }
}

export const toUserModel = (input: any): user => {
   return {
      id: input.id,
      name: input.name,
      nickname: input.nickname,
      email: input.email,
      password: input.password,
      role: toUserRoles(input.role)
   }
}