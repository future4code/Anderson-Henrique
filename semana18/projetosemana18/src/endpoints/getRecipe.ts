import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";

export async function getRecipe(req: Request, res: Response) {
    try {
        const recipe_id = req.params.recipe_id
        const authorization = req.headers.authorization
        if (!authorization) {
            throw new Error("authorization is empty, please pass a token")
        }
        const tokenInfo = getTokenData(authorization)
        if (!recipe_id) {
            throw new Error("recipe_id is empty")
        }
        const [recipe] = await connection("RECIPE").where("id", recipe_id)
        const { id, title, description, createdAt } = recipe
        res.status(200).send({
            id, title, description, createdAt
        })
    } catch (err) {
        if (err.message.includes("invalid token")) {
            res.status(400).send("The authorization is invalid,try another token");
        }
        res.status(400).send({
            message: err.message || err.sqlMessage
        })
    }
}