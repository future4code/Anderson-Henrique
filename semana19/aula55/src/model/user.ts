


export type userData = {
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export type USER_ROLES = {
    NORMAL: "NORMAL",
    ADMIN: "ADMIN"
}


export type user = userData & { id: string }