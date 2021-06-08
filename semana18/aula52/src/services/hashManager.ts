import * as bcrypt from "bcryptjs";

export const createHash =  (plainText: string): string=> {

const rounds = Number(12);
const salt =  bcrypt.genSaltSync(rounds);
const hash =  bcrypt.hashSync(plainText, salt);
console.log("encrypted message: ", hash);

return hash

}


export const compareHash = (
    plainText:string,
    cyphetText:string):boolean => {

    return bcrypt.compareSync(plainText,cyphetText)
}