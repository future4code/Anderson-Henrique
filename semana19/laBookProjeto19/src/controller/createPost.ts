import { Request, Response } from "express";
import { connection } from "../data/connection";
import { authenticationData } from "../model/user";
import { getTokenData } from "../services/authenticator";
import { generateId } from "../services/idGenerator";

export const createPost = async (req: Request, res: Response) => {
    try {
        let message = "Success!"

        const { photo_link, description, post_type } = req.body
        if (!post_type || !photo_link || !description) {
            throw new Error("'post_type', 'photo_link' and 'description' not be empty")
        }

        const token: string = req.headers.authorization as string

        const tokenData: authenticationData = getTokenData(token)

        const post_id: string = generateId()
        const createdAt = new Date().toISOString().slice(0, 10)

        const newPost = {
            post_id,
            photo_link,
            description,
            createdAt,
            post_type,
            post_reference_id: tokenData.id
        }
        await connection("labook_posts")
            .insert({ newPost })

        res.status(201).send({
            message: "sucess",
            newPostInfo: { description, createdAt }
        })

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
    }
}
