import { Request, Response } from "express"
import { connection } from "../data/connection"
import { post } from "../model/post"

export const getPostById = async (req: Request, res: Response) => {
    try {
        let message = "Success!"

        const { post_id } = req.params
        console.log("post_id: ",post_id)

        const queryResult: any = await connection("labook_posts")
            .select("*")
            .where({ post_id })

        if (!queryResult[0]) {
            res.statusCode = 404
            message = "Post not found"
            throw new Error(message)
        }

        const post: post = {
            id: queryResult[0].post_id,
            photo: queryResult[0].photo_link,
            description: queryResult[0].description,
            type: queryResult[0].post_type,
            createdAt: queryResult[0].createdAt,
            authorId: queryResult[0].post_reference_id,
        }

        res.status(200).send({ message, post })

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
    }
}