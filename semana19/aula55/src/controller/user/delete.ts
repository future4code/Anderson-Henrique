import { Request, Response } from "express"
import { deleteUserBusiness } from "../../business/user/deleteUserBusiness"



export const deleteUser = async( req:Request,res:Response) => {
    try {
        const id = req.params.id
        const token:string = req.headers.authorization as string
       await  deleteUserBusiness(id,token)
        res.status(200).send({
            message:"Usuário deletado"
        })
  
    } catch (error) {
        res.status(400).send(error.message)
     }
  }