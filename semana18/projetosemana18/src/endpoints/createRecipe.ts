import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
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
        const recipeCreatorId = getTokenData(authorization)
        const createdAt:Date = new Date()
        const newRecipe: Recipe = {
            id,
            title,
            description,
            userId: recipeCreatorId.id,
            createdAt
        }
        const checkCreatedRecipe = await connection("RECIPE").insert(newRecipe)

        res.status(200).send({
            recipeCreatorId,
            newRecipe,
            checkCreatedRecipe
        })
    } catch (err) {
        if (err.message.includes("invalid signature")) {
            res.status(400).send("The authorization token expired or it was invalid.");
        }
        if (err.message.includes("jwt malformed")) {
            res.status(400).send("The authorization token is malformed, try another token.");
        }
        res.send({
            message: err.message || err.sqlMessage
        })
    }
}