import { Router } from "express";
import { createPost } from "../controller/createPost";
import { getPostById } from "../controller/getPostById";


export const postRouter = Router()

postRouter.post('/new',createPost)
postRouter.get('/:post_id',getPostById)