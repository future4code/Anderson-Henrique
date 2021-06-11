import { Request, Response } from "express";
import connection from "../connection";
import { getNewDate } from "../helpFunctions/formatedDate";
import { authenticationData, getTokenData } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { Recipe } from "../types/Recipe";


export async function createRecipe(req: Request, res: Response): Promise<void> {
    try {
        const authorization = req.headers.authorization
        const { title, description } = req.body
        if (!authorization) {
            throw new Error("The field authorization is empty, please fill it.")
        }
        if (!title) {
            throw new Error("The field title is empty, please fill it.")
        }
        if (!description) {
            throw new Error("The field description is empty, please fill it.")
        }

        const id = generateId()
        const recipeCreatorId:authenticationData = getTokenData(authorization)
       const createdAt:string =  getNewDate()
        const newRecipe: Recipe = {
            id,
            title,
            description,
            userId: recipeCreatorId.id,
            createdAt
        }
        const checkCreatedRecipe = await connection("RECIPE").insert(newRecipe)

        res.status(200).send({
            message:"Recipe created",
            checkCreatedRecipe,
            newRecipe,
            recipeCreatorId

        })
    } catch (err) {
        if (err.message.includes("invalid signature")) {
            res.status(400).send("The authorization token expired or it was invalid.");
        }
        if (err.message.includes("jwt malformed")) {
            res.status(400).send("The authorization token is malformed, try another token.");
        }
        res.status(400).send({
            message: err.message || err.sqlMessage
        })
    }
}